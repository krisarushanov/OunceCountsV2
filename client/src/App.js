/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './pages/About';
import Wolfpack from './pages/Wolfpack';
//import Sandbox from './pages/Sandbox';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      {/* <Route exact path="/" component={Login} /> */}
        {/* <Route path ="/sandbox" component={Sandbox}/> */}
        <Route path="/about" component={About}/>
        <Route path="/wolfpack" component={Wolfpack}/>
      </Switch>
    </div>
    </Router>
  );
}


export default App;
