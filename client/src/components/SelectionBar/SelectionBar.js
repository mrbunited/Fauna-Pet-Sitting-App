import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (

      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-select-animalType"
          select
          label="Select"
          className={classes.animalType}
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

   <Button variant="contained" color="primary" className={classes.button}>
      Search
    </Button>
      </form>
   
    );
  }
}

SelectionBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectionBar);