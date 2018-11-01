import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
// import SignIn from './components/SignIn';
import Grid from '@material-ui/core/Grid';
// import PetSitter from './components/PetSitter';
import CustomerPage from './pages/CustomerPage';
// import SignIn from "./components/SignIn"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import './index.css'

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      <Grid container>
      <Router>
      <Switch>       
        {/* <Route exact path="/" component={MainPage} /> */}
        <Route exact path="/customer/:id" component={CustomerPage} />
        {/* <Route component={NoMatch} /> */}
      </Switch> 
      </Router>
      </Grid>
    </div>


      // <div>
      //   <Nav />
      //        <SignIn spacing={8} />
      //   <PetSitter spacing={8} />
      //   <CustomerPage exact          
      // <Router></Router>

               

     
      // </div>
    );
  }
}

export default App;
