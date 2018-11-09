import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import Grid from '@material-ui/core/Grid';
import CustomerPage from './pages/CustomerPage';
import MainPage from './pages/MainPage';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';

class App extends Component {
  render() {
    return (
      <div>

      {/* <Nav /> */}
              
              <Router>
            <Switch>       
        <Route exact path="/" component={MainPage} />
        <Route exact path="/customer/:id" component={CustomerPage} />
        {/* <Route component={NoMatch} /> */}
      </Switch> 
      </Router>
        
                {/* <SignIn/> */}
               
    </div>


    );
  }
}

export default App;
