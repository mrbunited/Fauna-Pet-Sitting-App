import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import SignIn from './components/SignIn';
// import SignIn from "./components/SignIn"

// import {Router} from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Route } from 'react-router-dom';

//App Layouts
import Social from '../src/components/social/'
import DragDrop from '../src/components/DragDrop/'
import Jquery from '../src/components/Jquery/'
//Import css for the application
import './index.css'

class App extends Component {
  render() {
    return (
    
      <div>
        <Nav />
              
      <Router>

      <SignIn>
            {/* <Route exact path="/" title="FAUNA" component={Social}></Route>
            <Route path="/social" component={Social}></Route>
            <Route path="/dnd" component={DragDrop}></Route>
            <Route path="/jquery" component={Jquery}></Route>
             */}
      </SignIn>
        </Router>

      </div>
    );
  }
}

export default App;
