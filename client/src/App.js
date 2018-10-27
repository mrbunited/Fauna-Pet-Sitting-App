import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import SignIn from './components/SignIn';
import Grid from '@material-ui/core/Grid';
import PetSitter from './components/PetSitter';

// import SignIn from "./components/SignIn"

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Grid container>        
        <SignIn spacing={8} />
        <PetSitter spacing={8} />
        </Grid>
      </div>
    );
  }
}

export default App;
