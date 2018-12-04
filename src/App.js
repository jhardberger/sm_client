import React, { Component } from 'react';
import './App.css';
/**         app containers           **/
import Login from './Login/index';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    console.log(params, '<---------------- in constructor');
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

  render() {
    return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Login} />
 
        </Switch>
      <a href='http://localhost:8888'> Login to Spotify </a>
    </div>
    );
  }
}

export default App;
