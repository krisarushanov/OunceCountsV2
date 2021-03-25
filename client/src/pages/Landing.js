/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';



function Landing () {
    return (
        <div className="container">
            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="Register" className="btn btn-dark" id="register">Register</button>
  <button type="Log In" className="btn btn-dark" id="login">Log In</button>
  <small id="loginHelp" className="form-text text-muted">Log In if you have an account with us!</small>
</form>
        </div>
    );
}

export default Landing;