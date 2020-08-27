import React, { Component } from 'react';
import './styles.css';
import Cart from './components/Cart';
import Products from './components/Products';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';

import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shirts from './components/Shirts';
import Cosmetics from './components/Cosmetics';
import HomeDecor from './components/HomeDecor';
import Gadgets from './components/Gadgets';

 function App() {
    return (
     <Provider store={store}>
       <div className="App">
         <BrowserRouter>
           <Header/>
           <Switch>                                              //Render one component at a time
             <Route exact path="/" component={Home}/>
             <Route exact path="/products" component={Products}/>
             <Route exact path="/shirts" component={Shirts}/>
             <Route exact path="/cosmetics" component={Cosmetics}/>
             <Route exact path="/homedecor" component={HomeDecor}/>
             <Route exact path="/gadgets" component={Gadgets}/>
             <Route path="/cart" component={Cart}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/login" component={Login}/>
            
           </Switch>
           
         </BrowserRouter>
      
     </div>
     </Provider>
    )
  }

export default App;