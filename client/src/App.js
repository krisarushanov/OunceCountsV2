/* eslint-disable no-unused-vars */
import React from 'react';
import Nav from './components/Nav/Nav';
import About from './pages/About';
import Backpack from './pages/Backpack';
import Alphapack from './pages/Alphapack';
import './components/Nav/App.css';
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
        <Route path="/alphapack" component={Alphapack}/>
        <Route path="/backpack" component={Backpack}/>
        <Route path="/wolfpack" component={Wolfpack}/>
        

      </Switch>
    </div>
    </Router>
  );
}


export default App;
