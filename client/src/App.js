import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
// import SignIn from './components/SignIn';
import Grid from '@material-ui/core/Grid';

// import PetSitter from './components/PetSitter';
import CustomerPage from './pages/CustomerPage';

import PetSitter from './components/PetSitter';
import SignupUser from './components/SignupUser';



// import SignIn from "./components/SignIn"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import './index.css'

class App extends Component {
  render() {
    return (
      <div>

      <Nav />
      <SignIn spacing={8} />
<PetSitter spacing={8} />
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


    );
  }
}

export default App;
