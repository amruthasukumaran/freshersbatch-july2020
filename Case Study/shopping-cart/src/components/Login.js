
  import React, { Component } from "react";
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/js/bootstrap.js';
  import './comp.css';
  import {FaUser, FaGooglePlusSquare, FaTwitterSquare, FaKey, FaFacebookSquare, FaGoogle} from "react-icons/fa";
  
  
  class Login extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state; 
  }
      render() {
      return (
        <div className="container">
    <div className="d-flex justify-content-center h-100">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
          <div class="d-flex justify-content-end social_icon">
            <span><FaFacebookSquare/></span>
            <span><FaGooglePlusSquare /></span>
            <span><FaTwitterSquare /></span>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><FaUser /></span>
              </div>
              <input type="text" className="form-control" placeholder="username"/>
              
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><FaKey /></span>
              </div>
              <input type="password" className="form-control" placeholder="password"/>
            </div>
            <div className="row align-items-center remember">
              <input type="checkbox" />Remember Me
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn float-right login_btn"/>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?<a href="./SignUp">Sign Up</a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="./Forgotpwd">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      );
    }
  }
  
  export default Login;
  