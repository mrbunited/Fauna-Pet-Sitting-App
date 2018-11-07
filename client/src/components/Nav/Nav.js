import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../../images/logo.png';
import fish from '../../images/fish.jpg';
import snake from '../../images/snake.jpg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    flexGrow: 1,
    background: ' #00897B',
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#E1F5FE',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    maxWidth: 345,
    margin: "0 auto",
    marginTop: 0,
  },
  media: {
    height: 300,
  },
  paper: {
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <CardMedia
              className={classes.media}
              image={snake}
            /></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <CardMedia
              className={classes.media}
              image={logo}
            /></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <CardMedia
              className={classes.media}
              image={fish}
            /></Paper>
        </Grid>
        </Grid>
        
        
        <Toolbar className={classes.tool}>

          <Typography variant="h4" className={classes.grow}>
            Because the world is bigger than cats and dogs
          </Typography>

        </Toolbar>
      

    </div >
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
