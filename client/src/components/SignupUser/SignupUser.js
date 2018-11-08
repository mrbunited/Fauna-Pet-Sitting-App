import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';



const styles = theme => ({

  root: {
    flexGrow: 1,
    margin: theme.spacing.unit *10,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    marginTop: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
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



class FilledTextFields extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24} direction="row"
          justify="center"
          alignItems="center"
          >
          <Grid item xs={12}>
            <Paper className={classes.paper}> <Typography component="h5" variant="h6" gutterBottom>CUSTOMER SIGNUP
              </Typography></Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              marginLeft= "theme.spacing.unit *10"
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
          </Grid>
          <Grid item xs={24} sm={12}>
            <Button variant="contained" color="primary"  className={classes.button}>
              Register
            </Button>
          </Grid>

        </Grid>
      </div>


    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);
