
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const pettype = [
  {
    value: 'Snake',
    label: 'Snake',
  },
  {
    value: 'Tarantula',
    label: 'Tarantula',
  },
  {
    value: 'Frog',
    label: 'Frog',
  },
  {
    value: 'Turtle',
    label: 'Turtle',
  },
  {
    value: 'Fish',
    label: 'Fish',
  },
  {
    value: 'Rabbit',
    label: 'Rabbbit',
  },
];

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const styles = theme => ({
  paper: {
    position: 'fixed',
    margin: theme.spacing.unit ,
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit *10,
  },
  button1: {
    marginLeft: theme.spacing.unit * 80,
    marginTop: theme.spacing.unit * 5,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
          <Button 
          onClick={this.handleOpen} 
          size="large" 
          color="primary" 
          variant="contained"
          className={classes.button1}
          marginLeft= "theme.spacing.unit * 80"
          marginTop= "theme.spacing.unit * 5"
          >Click User Sign Up</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
              <Grid container direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={12}>
                  <Typography component="h5" variant="h6">CUSTOMER SIGNUP
              </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="fname"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="billing address-line1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="addiress2"
                    name="addiress2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="billing address-line2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="billing address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="billing postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="billing country"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="filled-select-pettype-native"
                    select
                    label="PET 1"
                    className={classes.textField}
                    value={this.state.pettype}
                    onChange={this.handleChange('pettype')}
                    SelectProps={{
                      native: true,
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    helperText="Please Select Your Pet"
                    margin="normal"
                    variant="filled"
                  >
                    {pettype.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="filled-select-pettype-native"
                    select
                    label="PET 2"
                    className={classes.textField}
                    value={this.state.pettype}
                    onChange={this.handleChange('pettype')}
                    SelectProps={{
                      native: true,
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    helperText="Please Select Your Pet"
                    margin="normal"
                    variant="filled"
                  >
                    {pettype.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={24} sm={12}>
                  <TextField
                    id="Special Instruction"
                    label="Special Instruction"
                    multiline
                    fullWidth
                    rows="4"
                    className={classes.textField}
                  // variant="filled"
                  />
                  <Button variant="contained" color="primary" className={classes.button}
                  marginTop= "theme.spacing.unit *10 "
                  // marginBottom= "theme.spacing.unit *1 "
                  >
                  Register
                </Button>
                </Grid>
              </Grid>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;