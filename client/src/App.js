import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import SignIn from './components/SignIn';
// import SignIn from "./components/SignIn"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SignIn></SignIn>
      </div>
    );
  }
}

export default App;
