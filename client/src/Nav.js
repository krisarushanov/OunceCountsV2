import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <h1 class="title">OunceCounts</h1>
        <ul className="nav-links">
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/alphapack">
            <li>Alpha Wolfpack Backpack</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
