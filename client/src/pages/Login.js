import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function Login () {
    return (
        <div className="container" id="login">
            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <Link to="/"><button type="Register" className="btn btn-dark" id="register">Back to Register</button></Link>
  <Link to="/home"><button type="Log In" className="btn btn-dark" id="loginbutton">Log In</button></Link>
    </form>

        </div>
    )
}

export default Login;