import React, { Component } from "react";
import PetSitterProfile from '../../components/PetSitterProfile';
import Picker from '../../components/Picker';
import SelectionBar from '../../components/SelectionBar';
import PriceSlider from '../../components/PriceSlider';
import Grid from '@material-ui/core/Grid';

class CustomerPage extends Component {


  render() {
    return (

          <Grid container> 
          <h1> Find you pet sitter!</h1>
            <Picker />
            <SelectionBar />
            <PriceSlider />

            <PetSitterProfile />
         </Grid> 
    );
  }
}

export default CustomerPage;
