import React, { useState, Fragment } from 'react';
import '../styles.css';

function Signup() {




    return (
     
        <div className="hero">
            <div className="form-box">
                <div className="button-box">
                <div className="btn"></div>
                  <button type="button" className="toggle-btn">Login</button>  
                  <button type="button" className="toggle-btn">SignUp</button>  
                </div>
            </div>
            
            <form className="input-group">
                <input type="text" className="input-field" placeholder="Username" required/>
                <input type="text" className="input-field" placeholder="Password" required/>
                <input type="checkbox" className="check-box"/><span>Remember me</span>
                <button type="submit" className="submit-btm">Login</button>
            </form>
        </div>
    )
}

export default Signup;
