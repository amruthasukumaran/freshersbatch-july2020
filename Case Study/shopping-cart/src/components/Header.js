import React, {useState, useEffect} from 'react'
import '../styles.css';
import { connect } from 'react-redux';
import { getCart } from '../Actions/getCart'
import { Link } from 'react-router-dom';

function Header(props) {
    console.log(props);
    
    useEffect(() => {
    getCart();
    }, []);

    return (
        <header>
        
        <div className="overlay"></div>
        <nav>
          <h2><ion-icon name="logo-slack"></ion-icon>YourChoice</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li className="cart"><Link to="/cart">
            <ion-icon name="cart-outline"></ion-icon>Cart<span>{props.cartProps.cartNumbers}</span>
              </Link></li>
          </ul>
        </nav>
      </header>
   )
}

const mapStateToProps = state => ({
  cartProps: state.cartState              //from index.js of Reducers
})

export default connect(mapStateToProps, { getCart })(Header);

