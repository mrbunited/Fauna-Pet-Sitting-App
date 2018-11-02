import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    
});


class Picker extends React.Component {

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };


    render() {
    const { classes } = this.props;

    return (

        <Fragment>
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="Select the drop off date"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>

            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="Select the pick up date"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>

 
        </Fragment>
    );
};
}

Picker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Picker);