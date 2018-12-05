import React, { Component } from 'react';
import UserContainer from '../UserContainer';
import LibraryContainer from '../LibraryContainer';
import MoldContainer from '../MoldContainer';
import { Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
 
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
      currentSongId: '',
      molds: [],
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
                this.setState({
                  songFeatures: {
                    acousticness: response.acousticness,
                    danceability: response.danceability,
                    energy: response.energy,
                    instrumentalness: response.instrumentalness,
                    liveness: response.liveness,
                    loudness: response.loudness,
                    speechiness: response.speechiness,
                    tempo: response.tempo,
                    valence: response.valence
                  }
                })
              });
  }



  //reset this to component did mount soon
  callBoth(){
      console.log('groovy');
      this.getTopSongs();
      this.getNowPlaying();
  }

  //add a 404 at some point

  colorfix = async () => {
    console.log('now everything else is magically green');
  }

  addMold = async (mold, e) => {
    const customStringify = function (v) {
      const cache = new Set();
      return JSON.stringify(v, function (key, value) {
        if (typeof value === 'object' && value !== null) {
          if (cache.has(value)) {
            // Circular reference found, discard key
            return;
          }
          // Store value in our set
          cache.add(value);
        }
        return value;
      });
    };

    const newMold = await fetch('http://localhost:9000/api/vi/molds', {
      method: 'POST',
      credentials: 'include',
      body: customStringify(mold),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await newMold.json();
    console.log(parsedResponse, '<-------- successfully added mold!');

    //do I need my molds in state? maybe... will workt this out later
    this.setState({molds: [...this.state.molds, parsedResponse.data]})

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

                <MoldContainer getAudioFeatures={this.getAudioFeatures} addMold={this.addMold} />

              </Grid.Row>
            </Grid>
        </div>
      }
    
    </div>
    );
  }
}

export default MainContainer;
