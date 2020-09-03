import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import {FaHome, FaShoppingCart, FaUser, FaEnvelope, FaListAlt, FaSlack, FaPhoneAlt} from 'react-icons/fa'

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
        <div className="brand">
            
            <FaSlack size={35} style={{ fill: 'white' }} /><Link to="/">YourChoice</Link>
          </div>
          <div className="header-links">
            <a href="/"><FaHome />Home</a>

            <div className="dropdown">
            <a href="#"><FaListAlt />Categories</a> 
                <ul className="dropdown-content">
                  <li>
                  <Link to="/category/Men's ">Men's </Link><br /><br/>
                  <Link to="/category/Women's ">Women's </Link><br/><br/>
                  <Link to="/category/Cosmetics ">Cosmetics</Link><br/><br/>
                  <Link to="/category/Electronics ">Electronics</Link><br/><br/>
                  <Link to="/category/HomeDecor ">HomeDecor </Link>
                  </li>
                </ul>
              </div>

            
            <a href="cart.html" className="cart-a"><FaShoppingCart />Cart</a>
            {userInfo ? (
              <Link to="/profile"><FaUser />{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link><br />
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
        <strong>Contact Us : </strong><br />
          <FaEnvelope size={20} style={{ fill: 'white' }}/>&nbsp;&nbsp;yourchoice@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaPhoneAlt size={20} style={{ fill: 'white' }}/>+(91) 9898989898
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;