import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import API from "../../utils/API";
import ProfilePetSitter from "../ProfilePetSitter";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
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

const animalType = [
  {
    value: 'dog',
    label: 'dog',
  },
  {
    value: 'cat',
    label: 'cat',
  },
  {
    value: 'lizard',
    label: 'lizard',
  },
  {
    value: 'bird',
    label: 'bird',
  },
];


class SelectionBar extends React.Component {

  state = {
    animalType: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleFormSubmit = event => {
console.log(this.state.animalType)
    event.preventDefault();

    this.setState({
      animalType: this.state.animalType,
    });
    // ProfilePetSitter.getPetSitters(this.state.animalType);
  };


  // componentDidMount() {
  //   this.findByAnimal();
  // }

 

  render() {
    const { classes } = this.props;

    return (
      <Grid>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid item>
            <TextField
              id="standard-select-animalType"
              select
              label="Select"
              className={classes.textField}
              value={this.state.animalType}
              onChange={this.handleChange('animalType')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your animal"
              margin="normal"
            >
              {animalType.map(option => (

                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>

              ))}

            </TextField>
          </Grid>
          {/* <Grid>
          <TextField
          id="standard-search"
          label="Search by ZIP"
          type="search"
          className={classes.textField}
          margin="normal"
        /> 

        </Grid> */}

          <Grid item sm>
            <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}
            onClick={this.handleFormSubmit}
            type="submit"
            > Search </Button>
          </Grid>
        </form>
      </Grid>
    );
  }
}

SelectionBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectionBar);