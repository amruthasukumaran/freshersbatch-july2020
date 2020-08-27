import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Router, Link, NavLink, Redirect,Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
  return ( <h1>welcome {params.username}</h1>)
}

class App extends Component {
  state = {
    loggedIn:false
  }
   
  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li><NavLink to="/" exact activeStyle={
            {color:'green'}
          }>Home</NavLink></li>
          <li><NavLink to="/about/" exact activeStyle={
            {color:'green'}
          }>about</NavLink></li>
          <li><NavLink to="/user/peter" exact >User peter</NavLink></li>
        </ul>

        <Prompt
        when= {!this.state.loggedIn}
        message={(location) => {
          return location.pathname.startsWith('/user') ? 'Are you sure?' : true
        }}
       />
        
        <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>
        <Route path="/" exact render={
          () => {
            return( <h1>Hello...!!!!</h1> );
          }
        }/>

        <Route path="/about/" exact render={
          () => {
            return( <h1>about</h1> );
          }
        }/>

        <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/"/>)
          )}/>
        
      </div>
    </BrowserRouter>
    
    );
   }
}

export default App;
