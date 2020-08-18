import React from 'react';
import {Component} from 'react';
import Products from './components/Products';
import Profile from './components/Profile';
import Order from './components/Order';
import Cart from './components/Cart';
import Wallet from './components/Wallet';
import Login from './components/Login';
import Home from './components/Home';
 

class App extends Component {
    render(){
    return (
    <div className="grid-container">
      <header>
        <a href='/'>Your Choice Shopping</a>
                
      </header>
      <main>
        <div className="content">
          <div className="main">
           <Products/>
           <Profile/>
           <Cart/>
           <Login/>
           <Wallet/>
           <Order/>
           <Home/>
          </div>
          <div className="sidebar">Cart</div>
        </div>
      </main>
      <footer>
        Yoooo
      </footer>
    </div>
  );}
}

export default App;
