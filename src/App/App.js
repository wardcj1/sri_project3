import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <FirebaseUI />
      </div>
    );
  }
}

var config = {
    apiKey: "AIzaSyC5NVKGsm6lXtN-KoLPPzhz2jlxFRiz8Hc",
    authDomain: "smartroboinvestments.firebaseapp.com",
    databaseURL: "https://smartroboinvestments.firebaseio.com",
    projectId: "smartroboinvestments",
    storageBucket: "smartroboinvestments.appspot.com",
    messagingSenderId: "78343951803"
};
var app = firebase.initializeApp(config);
var authUi = new firebaseui.auth.AuthUI(firebase.auth());
var ref = firebase.database().ref("/44358340");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    ref.set(firebase.database.ServerValue.TIMESTAMP).then((error) => {
      if (error) {
        console.error(error);
      }
      else {
        console.log("Timestamp written");
      }
    });
  }
});

class FirebaseUI extends Component {
  componentDidMount() {
    var self = this;
    var uiConfig = {
      'callbacks': {
        'signInSuccess': function(user) {
          if (self.props.onSignIn) {
            self.props.onSignIn(user);
          }
          return false;
        }
      },
      'signInOptions': [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    authUi.start('#firebaseui-auth', uiConfig);
  }

  componentWillUnmount() {
    authUi.reset();
  }

  render() {
    return (
      <div id="firebaseui-auth"></div>
    );
  }
}

export default App;