import React, { Component } from 'react';
import './App.css';
/**         app containers           **/
import Login from './Login/index';
import MainContainer from './MainContainer';
import { Route, Switch } from 'react-router-dom';

/**         Spotify wrapper          **/
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    console.log(params, '<---------------- in constructor');
    const token = params.access_token; 
      //conects app to the wrapper if token 
      //now we can make api calls
    if (token) {
      console.log(token, '<----------------- token');
      console.log(typeof token, '<----------- what are you?');
      spotifyApi.setAccessToken(token);
      console.log(spotifyApi.getAccessToken(), '<--------- token inserted');
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
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

  //test of spotify api wrapper -> but may incorporate later
  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
              .then((response) => {
                console.log(response);
                this.setState({
                  nowPlaying: {
                    name: response.item.name,
                    albumArt: response.item.album.images[0].url
                  }
                });
              })
  }

  //add a 404 at some point

  render() {
    return (
    <div className='App'>

      <div>
        <a href='http://localhost:8888'> Login to Spotify </a>
        <div>
          Now Playing: { this.state.nowPlaying.name }
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        }
      </div>
      
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={MainContainer} />
      </Switch>

    </div>
    );
  }
}

export default App;
