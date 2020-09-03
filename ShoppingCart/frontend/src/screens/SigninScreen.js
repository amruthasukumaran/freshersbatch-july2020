import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';
//import 'bootstrap/dist/js/bootstrap.js';
//import '../css/login.css';
import {FaEnvelope, FaGooglePlusSquare, FaTwitterSquare, FaKey, FaFacebookSquare, FaGoogle} from "react-icons/fa";


function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  return <div className="form">
  <form className="boxed" onSubmit={submitHandler} >

  <ul className="form-container">
      <li>
        <h2>Login</h2>
      </li>
      <li>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </li>
      <li>
        <label htmlFor="email">
        
        <span className="input-group-prepend"><FaEnvelope size={20} style={{ fill: 'black' }}/></span>Email
        
        </label>
        <input type="email" name="email" id="email" placeholder="Enter your email-id" onChange={(e) => setEmail(e.target.value)}>
        </input>
      </li>
      <li>
        <label htmlFor="password"><FaKey size={20} style={{ fill: 'black' }} />Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}>
        </input>
      </li>
      <li>
        <button type="submit" className="button primary">Login</button>
      </li>
      
      <li>
        <label>Don't have an account?</label>
        <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your account</Link>
      </li>
    </ul>
  </form>
</div>

  
}
export default SigninScreen;



