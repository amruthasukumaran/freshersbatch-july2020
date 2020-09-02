import React, { Component, useState, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import './comp.css';
import {FaUser, FaEnvelope, FaPhone, FaLock, FaHome} from "react-icons/fa";

class SignUp extends Component {
    render() {
        return (
            <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign Up</h3>
				
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><FaUser /></span>
						</div>
						<input type="text" className="form-control" placeholder="Full name"/>
					</div>

					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><FaEnvelope /></span>
						</div>
						<input type="password" className="form-control" placeholder="Email Id"/>
					</div>

                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><FaHome /></span>
						</div>
						<input type="password" className="form-control" placeholder="Your address"/>
					</div>

                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><FaPhone /></span>
						</div>
						<input type="password" className="form-control" placeholder="Phone Number"/>
					</div>

                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><FaLock /></span>
						</div>
						<input type="password" className="form-control" placeholder="Create password"/>
					</div>

                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><FaLock /></span>
						</div>
						<input type="password" className="form-control" placeholder="Repeat password"/>
					</div>

					

					<div className="form-group">
						<input type="submit" value="Create Account" className="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
                Have an account?<a href="./Login">Log In</a>
				</div>
				
			</div>
		</div>
	</div>
</div>
        );
    }
}

export default SignUp;