import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Nav from "./components/Nav";
import Grid from '@material-ui/core/Grid';
import CustomerPage from './pages/CustomerPage';
import MainPage from './pages/MainPage'
import BookAppointment from './pages/BookAppointment';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css'
const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>

      {/* <Nav /> */}

      <Grid container> 

      <Router history={hist}>
      <Switch>       
        <Route exact path="/" component={MainPage} />
        <Route exact path="/customer/:id" component={CustomerPage} />
        <Route exact path="/appointment/:customerId/:sitterId" component={BookAppointment} />
        {/* <Route component={NoMatch} /> */}
      </Switch> 
      </Router>
      </Grid>
    </div>


    );
  }
}

export default App;
