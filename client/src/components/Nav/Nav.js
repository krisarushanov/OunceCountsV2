/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
function Nav() {
  return (
    <nav>
      <img src="/logo512.png" width="30" height="30" className="d-inline-block align-top" alt="Ounce Counts" id="logo"/>
        <h3 class="logo">OunceCounts</h3>
        <ul className="nav-links">
           <Link to="/home">
            <li>Home</li>
            </Link>
            <Link to="/alphapack">
            <li>Alpha Backpack</li>
            </Link>
            <Link to="/backpack">
            <li>Backpack</li>
            </Link>
            <Link to ="/wolfpack">
              <li>Wolfpack</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
