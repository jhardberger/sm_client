import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    console.log(params);
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
    console.log(hashParams);
    return hashParams;
  }

  render() {
    return (
    <div className='App'>
      <a href='http://localhost:8888'> Login to Spotify </a>
    </div>
    );
  }
}

export default App;
