import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Grid from '@material-ui/core/Grid';
import CustomerPage from './pages/CustomerPage';
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './index.css'

class App extends Component {
  render() {
    return (
      <div>

      <Nav />

      <Grid container> 

      <Router>
      <Switch>       
        <Route exact path="/" component={MainPage} />
        <Route exact path="/customer/" component={CustomerPage} />
        {/* <Route component={NoMatch} /> */}
        
      </Switch>

      </Router>
      </Grid>
    </div>


    );
  }
}

export default App;
