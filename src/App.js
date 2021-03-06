import React, { Component } from 'react';
import './App.css';
import MainContainer from './MainContainer';
import Login from './LoginContainer';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
/**         .env stuff               **/
import apiUrl from './apiUrl';
console.log(apiUrl);

const My404 = () => {
  return(
    <div>
      I'm sorry. I can't allow you to do that, Dave. 
    </div>
  )

}

class App extends Component {
  render(){
    return(
      <div className="App">
        <Header /> 
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={MainContainer}/>
          <Route component={My404}/>
        </Switch>
      </div>
      
    )
  }
}
export default App;
