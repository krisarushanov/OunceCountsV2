/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';



function Landing () {
    return (
        <div className="container" id="landing">
            <h1 className="register" id="top">Register</h1>
            <h3 className="register"><small>You're on your way to creating your backpack</small></h3>
            <hr />
            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <Link to="/home"><button type="Register" className="btn btn-dark" id="register">Register</button></Link>
  <Link to="/login"><button type="Log In" className="btn btn-dark" id="loginbutton">Log In</button></Link>
</form>
        </div>
    );
}

export default Landing;