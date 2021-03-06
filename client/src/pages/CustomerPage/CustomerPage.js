import React, { Component } from "react";
import ProfilePetSitter from '../../components/ProfilePetSitter';
import Picker from '../../components/Picker';
import SelectionBar from '../../components/SelectionBar';
import PriceSlider from '../../components/PriceSlider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Maps from "../../components/Maps";
import BookingModal from "../../components/BookingModal";


const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
});


class CustomerPage extends Component {
  state = {
    petsitters: []
  }


  render() {

    const { classes } = this.props;

    return (

      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

            <Grid container>
              <Grid item sm>
                <h1> Book your Sitter!</h1>
              </Grid>

              <Grid item sm>
                <Picker />
              </Grid>

              <Grid item sm>
                <SelectionBar />
              </Grid>

              <Grid item sm>
                <PriceSlider />
              </Grid>



              <Grid item sm>

                <BookingModal />
              </Grid>
            </Grid>

          </Paper>
        </Grid>

        <Grid item xs={12} sm={5}>
          <ProfilePetSitter />
        </Grid>

        <Grid item xs={12} sm={7}>
          <Maps />
        </Grid>


      </Grid>
    );
  }
};


CustomerPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerPage);
