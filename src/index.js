import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Home from './Home/Home';
import InvSpectrum from './InvSpectrum/InvSpectrum';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import Suitability from './Suitability/Suitability';

import './index.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

// import * as firebase from 'firebase';
// var config = {
//     apiKey: "AIzaSyC5NVKGsm6lXtN-KoLPPzhz2jlxFRiz8Hc",
//     authDomain: "smartroboinvestments.firebaseapp.com",
//     databaseURL: "https://smartroboinvestments.firebaseio.com",
//     // projectId: "smartroboinvestments",
//     storageBucket: "smartroboinvestments.appspot.com",
//     // messagingSenderId: "78343951803"
// };
// firebase.initializeApp(config);


ReactDOM.render(
  <Router>
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink activeClassName="activeNav" to="/">Smart Robo Investments</NavLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
              <li><NavLink activeClassName="activeNav" to="/InvSpectrum/InvSpectrum">Start</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <Route exact path="/" component={Home}/>
      <Route path="/InvSpectrum" component={InvSpectrum} history={history}/>
      <Route path="/MyPortfolio" component={MyPortfolio} history={history}/>
      <Route path="/Suitability" component={Suitability} history={history}/>
    </div>
  </Router>, 
 document.getElementById('root')
);

