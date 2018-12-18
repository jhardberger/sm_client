import React, { Component } from 'react';
import UserContainer from '../UserContainer';
import LibraryContainer from '../LibraryContainer';
import MoldContainer from '../MoldContainer';
import MoldList from '../MoldList';
import EditModal from '../EditModal';
import { Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
/**         .env stuff               **/
import apiUrl from '../apiUrl';
/**         Spotify wrapper          **/
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class MainContainer extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    // console.log(params, '<---------------- in constructor');
    const token = params.access_token; 
      //conects app to the wrapper if token 
      //now we can make api calls
    if (token) {
      // console.log(token, '<----------------- token');
      spotifyApi.setAccessToken(token);
      // console.log(spotifyApi.getAccessToken(), '<--------- token inserted');
    }
    this.state = {
      loggedIn: token ? true : false, //do I even need this? 
      nowPlaying: { 
        name: '', 
        artist: '',
        albumArt: '',
        id: '' 
      },
      topSongs: [],
      molds: [],
      edit_title: '',
      edit_seed_song_id: '',
      edit_acoustic: false,
      edit_danceable: false,
      edit_energetic: false,
      edit_instrumental: false,
      edit_live: false,
      edit_spoken: false,
      edit_upbeat: false,  
      showEditModal: false,
      currentSeed: {
        name: '', 
        artist: '',
        albumArt: '',
        id: '' 
      }
    }
  }

  getHashParams(){

    //gets access token from params (expanded from index.html code on backend)
    let hashParams = {};
    let e = /([^&;=]+)=?([^&;]*)/g;
    const r = /([^&;=]+)=?([^&;]*)/g; 
    const q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }

    //returns access token
    // console.log(hashParams, '<------------- get hash params');
    return hashParams;
  }

  //this, getTopSongs and getAudioFeatures all load at startup -------------------------
  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
              .then((response) => {
                console.log(response, '<---- response for current');
                this.setState({
                  nowPlaying: {
                    name: response.item.name,
                    artist: response.item.artists[0].name,
                    albumArt: response.item.album.images[0].url,
                    id: response.item.id
                  }
                });
              })
  }

  getTopSongs(){
    spotifyApi.getMyTopTracks()
              .then((response) => {
                this.setState({
                  topSongs: [...this.state.topSongs, response.items]
                })
              })
  }

/**           NOTE              **/
//this currently doesn't do much worth writing about, so I've commented it out
//hopefully at some point will be able to link it up to the switches
//to show what features a song has to start with. 

  // getAudioFeatures(){
  //   spotifyApi.getAudioFeaturesForTrack(this.state.currentSeed.id)
  //             .then((response) => {

  //               //this turns floats into easier-to-work-with bools
  //               const parseBool = (float) => {
  //                 if(Math.round(float) === 1){
  //                   console.log('true');
  //                   return true
  //                 }else{
  //                   console.log('false');
  //                   return false
  //                 }
  //               }

  //               //using it on returned data from spotify api
  //               const acoustic = parseBool(response.acousticness);
  //               const danceable = parseBool(response.danceability);
  //               const energetic = parseBool(response.energy);
  //               const instrumental = parseBool(response.instrumentalness);
  //               const live = parseBool(response.liveness);
  //               const spoken = parseBool(response.speechiness);
  //               const upbeat = parseBool(response.valence);

  //               this.setState({
  //                 newMold: {
  //                   acoustic: acoustic,
  //                   danceable: danceable,
  //                   energetic: energetic,
  //                   instrumental: instrumental,
  //                   live: live,
  //                   spoken: spoken,
  //                   upbeat: upbeat
  //                 }
  //               })
  //               console.log(this.state.newMold, '<----- new mold');
  //             });
    // console.log(this.state.songFeatures, '<----songFeatures');
  // }

  //onclick for visible songs - selects clicked as currentSeed
  retrieveSong = async (song) => {
    console.log(song, '<------------- current seed');
    this.setState({
      currentSeed:{
        name: song.name,
        artist: song.artists[0].name,
        albumArt: song.album.images[0].url,
        id: song.id
      }
    });
  }

  //loads molds to moldList
  getMolds = async () => {
    const molds = await fetch(apiUrl + '/api/v1/molds');
    const parsedMolds = await molds.json();
    return parsedMolds  
  }

  componentDidMount(){
      this.getTopSongs();
      this.getNowPlaying();
      // this.getAudioFeatures();
      this.getMolds().then((molds) => {
        this.setState({molds: molds.data})
      }).catch((err) => {
        console.log(err);
      })
  }

  //mold CRUD ----------------------------------------------
  addMold = async (molds, e) => {
    e.preventDefault();
    console.log(e, '<--------- e ');
    console.log(molds, '<--------- molds');

    try{ 
      const newMold = await fetch(apiUrl + '/api/v1/molds', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(molds),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(newMold, '<------- new mold you dingus');
      const parsedResponse = await newMold.json();
      console.log(parsedResponse, '<-------- successfully added mold!');
   
       //do I need my molds in state? maybe... will workt this out later
       // this.setState({molds: [...this.state.molds, parsedResponse.data]})

    }catch(err){
      console.log(err);
    }
  }

  deleteMold = async (id) => {
    const deleteMoldResponse = await fetch(apiUrl + '/api/v1/molds/' + id, {
      method: 'DELETE'
    });
    const deletedMoldParsed = await deleteMoldResponse.json();
    console.log(deletedMoldParsed, '<----------- successfully deleted!');
  
    //removing from state
    this.setState({molds: this.state.molds.filter((mold) => mold._id !== id)})
  }

  handleEditChange = (e) => {
    if(e.currentTarget.name === 'title'){
      console.log(e.currentTarget, '<---- string');
      this.setState({
        moldToEdit: {
          [e.currentTarget.name]: e.currentTarget.value
        }
      })
    }else{
      console.log(e.currentTarget.attributes.class.value, '<-----checked?');
      let value = true; 
      if(e.currentTarget.attributes.class.value === "ui checked fitted slider checkbox"){
        value = true; 
        console.log(value, '<----- true');
      }else{
        value = false;
        console.log(value, '<----- false');
      }
      console.log(e.currentTarget.children[0].name, '<--- attribute');  
      this.setState({
        moldToEdit: {
          [e.currentTarget.children[0].name]: value
        }
      })
    }
    console.log(this.state.moldToEdit, '<----- mold to edit in state');
  }

  closeAndEdit = async (e) => {
    e.preventDefault();

     try {
       const editResponse = await fetch(apiUrl + '/api/v1/molds/' + this.state.moldToEdit._id, {
        method: 'PUT',
        body: JSON.stringify({
          title: this.state.moldToEdit.title,
          seed_song_id: this.state.moldToEdit.seed_song_id,
          acoustic: this.state.moldToEdit.acoustic,
          danceable: this.state.moldToEdit.danceable,
          energetic: this.state.moldToEdit.energetic,
          instrumental: this.state.moldToEdit.instrumental,
          live: this.state.moldToEdit.live,
          spoken: this.state.moldToEdit.spoken,
          upbeat: this.state.moldToEdit.upbeat,  
        }),
        headers: {
          'Content-Type': 'application/json'
        }
       });

       // const editResponseParsed = editResponse.json();
       // const newMoldArrayWithEdit = this.state.molds.map((mold) => {
       //   if(mold._id === editResponseParsed.data._id){
       //    mold = editResponseParsed.data
       //   }

       //   return mold
       // });

     //   this.setState({
     //    showEditModal: false,
     //    molds: newMoldArrayWithEdit
     //   });

     //   console.log(editResponseParsed, ' parsed edit');

     } catch(err){
       console.log(err)
     }
      
  }

  openAndEdit = (moldFromList) => {
    console.log(moldFromList, '<----- mold to edit');

    this.setState({
      showEditModal: true,
      moldToEdit: {
        ...moldFromList
      }
    })

  }

  render() {

    return (
    <div className='App'>

      { this.state.loggedIn &&
        <div>
            <Grid id='main' divided='vertically'> 
              <UserContainer nowPlaying={this.state.nowPlaying}  /> 
              <Grid.Row id='music' columns={2} >

                <LibraryContainer topSongs={this.state.topSongs} retrieveSong={this.retrieveSong}/>
                <Grid.Column id='molds' width={7}>
                  <MoldContainer handleValueChange={this.handleValueChange} currentSeed={this.state.currentSeed} addMold={this.addMold} />
                  <MoldList molds={this.state.molds} deleteMold={this.deleteMold} openAndEdit={this.openAndEdit} />
                  <EditModal open={this.state.showEditModal} moldToEdit={this.state.moldToEdit} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </div>
      }
    
    </div>
    );
  }
}

export default MainContainer;