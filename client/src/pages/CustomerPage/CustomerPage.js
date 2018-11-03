import React, { Component, Fragment } from "react";
import PetSitterProfile from '../../components/ProfilePetSitter';
import Picker from '../../components/Picker';
import SelectionBar from '../../components/SelectionBar';
import PriceSlider from '../../components/PriceSlider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ProfilePetSitter from "../../components/ProfilePetSitter";

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

  
  render() {
    
    const { classes } = this.props;

    return (
<Fragment>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <h1> Find you pet sitter!</h1>
          </Grid>
          <Grid item>
            <Picker />
          </Grid> 
          <Grid item>
              <SelectionBar />
          </Grid>
          <Grid item>
              <PriceSlider />
          </Grid>
          <Grid>
              <Button> Search </Button>
          </Grid>

        </Grid>   

      </Paper>  
      
      
<ProfilePetSitter />
</Fragment>
        );
      }
    };
    
    
    CustomerPage.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles)(CustomerPage);
