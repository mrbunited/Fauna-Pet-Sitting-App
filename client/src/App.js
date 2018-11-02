import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import SignIn from './components/SignIn';
import Grid from '@material-ui/core/Grid';
import PetSitter from './components/PetSitter';

// import SignIn from "./components/SignIn"

// import {Router} from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Route } from 'react-router-dom';

//App Layouts
// import Social from '../src/components/social/'
// import DragDrop from '../src/components/DragDrop/'
// import Jquery from '../src/components/Jquery/'
//Import css for the application
import './index.css'

class App extends Component {
  render() {
    return (
    
      <div>
        <Nav />
              
      <Router></Router>

        <Grid container>        
        <SignIn spacing={8} />
        <PetSitter spacing={8} />
        </Grid>
      </div>
    );
  }
}

export default App;
