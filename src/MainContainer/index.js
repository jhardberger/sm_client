import React, { Component } from 'react';
import UserContainer from '../UserContainer';
import LibraryContainer from '../LibraryContainer';
import MoldContainer from '../MoldContainer';
// import MoldList from '../MoldList';
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
    console.log(params, '<---------------- in constructor');
    const userId = params.user_id; //will change this later 
    const token = params.access_token; 
      //conects app to the wrapper if token 
      //now we can make api calls
    if (token) {
      console.log(token, '<----------------- token');
      spotifyApi.setAccessToken(token);
      console.log(spotifyApi.getAccessToken(), '<--------- token inserted');
    }
    this.state = {
      loggedIn: token ? true : false, //do I even need this? 
      userId: userId,
      nowPlaying: { 
        name: '', 
        artist: '',
        albumArt: '' 
      },
      topSongs: [],
      molds: [],
      currentSongId: '',
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
    console.log(hashParams, '<------------- get hash params');
    return hashParams;
  }

  //getting user info                 <------------------ doesn't work atm, will return later
  // getUser(){
  //   console.log(this.state.userId, '<------ userid');
  //   spotifyApi.getUser()
  //             .then((response) => {
  //               console.log(response, '<---- user info');
  //             })
  // }

  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
              .then((response) => {
                this.setState({
                  nowPlaying: {
                    name: response.item.name,
                    artist: response.item.artists[0].name,
                    albumArt: response.item.album.images[0].url
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

  getAudioFeatures(){
    spotifyApi.getAudioFeaturesForTrack("0tVzXGFyNPusa1VkHmYDLd")
              .then((response) => {
                const parseBool = (float) => {
                  console.log(float);
                  if(Math.round(float) === 1){
                    console.log('true');
                    return true
                  }else{
                    console.log('false');
                    return false
                  }
                }
                const acoustic = parseBool(response.acousticness);
                const danceable = parseBool(response.danceability);
                const energetic = parseBool(response.energy);
                const instrumental = parseBool(response.instrumentalness);
                const live = parseBool(response.liveness);
                const spoken = parseBool(response.speechiness);
                const upbeat = parseBool(response.valence);

                this.setState({
                  songFeatures: {
                    acoustic: acoustic,
                    danceable: danceable,
                    energetic: energetic,
                    instrumental: instrumental,
                    live: live,
                    spoken: spoken,
                    upbeat: upbeat
                  }
                })
              });
    console.log(this.state.songFeatures, '<----songFeatures');
  }

  getMolds = async () => {
    const molds = await fetch(apiUrl + '/api/v1/molds/');
    const parsedMolds = await molds.json();
    return parsedMolds  
  }

  //reset this to component did mount soon
  componentDidMount(){
      this.getTopSongs();
      this.getNowPlaying();
      this.getMolds().then((molds) => {
        this.setState({molds: molds.data})
      }).catch((err) => {
        console.log(err);
      })
  }


  addMold = async (mold, e) => {
    console.log(mold, '<----- mold');
    try{ 
   
      const newMold = await fetch(apiUrl + '/api/v1/molds', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(mold),
        headers: {
          'Content-Type': 'application/json',
        }
      });
   
      const parsedResponse = await newMold.json();
      console.log(parsedResponse, '<-------- successfully added mold!');
   
       //do I need my molds in state? maybe... will workt this out later
       this.setState({molds: [...this.state.molds, parsedResponse.data]})

    }catch(err){
      console.log(err);
    }
  }


  render() {
    return (
    <div className='App'>
      <a href='http://localhost:8888'> Login to Spotify </a>

      { this.state.loggedIn &&
        <div>
          <button onClick={() => this.callBoth()}>
            load those bands
          </button>
            <Grid id='main' divided='vertically'> 
              <UserContainer nowPlaying={this.state.nowPlaying}  /> 
              <Grid.Row id='music' columns={2} >

                <LibraryContainer topSongs={this.state.topSongs}/>
                <Grid.Column id='molds' width={8}>
                  <MoldContainer molds={this.state.molds} getAudioFeatures={this.getAudioFeatures} addMold={this.addMold} />
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
