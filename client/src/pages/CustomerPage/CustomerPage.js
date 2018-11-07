<<<<<<< HEAD
import React, { Component } from "react";
import PetSitterProfile from '../../components/PetSitterProfile';
=======
import React, { Component, Fragment } from "react";
>>>>>>> 8f89b1e098a39b5f47efbe874d8fecc699c519d8
import Picker from '../../components/Picker';
import SelectionBar from '../../components/SelectionBar';
import PriceSlider from '../../components/PriceSlider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import Maps from "../../components/Maps";

=======
import ProfilePetSitter from "../../components/ProfilePetSitter";
>>>>>>> 8f89b1e098a39b5f47efbe874d8fecc699c519d8

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
<<<<<<< HEAD

      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            
            <Grid container>
              <Grid item sm>
                <h1> Find your pet-sitter!</h1>
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
                <Button variant="contained" color="primary" className={classes.button}> Search </Button>
              </Grid>

            </Grid>

          </Paper>
        </Grid>

        <Grid item md>
          <PetSitterProfile />
        </Grid>

        <Grid item md>
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
=======
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
>>>>>>> 8f89b1e098a39b5f47efbe874d8fecc699c519d8
