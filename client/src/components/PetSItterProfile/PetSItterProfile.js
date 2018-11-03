import React from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  card: {
    maxWidth: 500,
  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: 90,
    height: 90,
    backgroundColor: red[500],
  },
});


class PetSitterProfile extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  
  state = {
   petsitters: []
  };

  componentDidMount() {
    this.getPetSitter();
  }

  getPetSitter = () => {
    API.getPetSitter()
      .then(res => this.setState({ petsitters: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            {this.state.petsitters.length ? (
              <List>
                {this.state.petsitters.map(petsitters => (
                  <ListItem key={petsitters._id}>
                   

                        
<Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} src="/placeholder.png">
               <a href={"/petsitters/" + petsitters._id}></a>
            </Avatar>
          }
          action={
            <Button>
            Book Now
            </Button>
          }
          title={petsitters.first_name}
          subheader={petsitters.address.zip}
        />
        <CardContent>
          <Typography component="p">
I am an amazing pet sitter with experience with a wide array of animals. I will add more info about me later.
          <CardActions className={classes.actions} disableActionSpacing>
          <Button
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </Button>
        </CardActions></Typography>
        </CardContent>
        
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Additional info about the pet sitter from database
              <p> Full name : {petsitters.first_name}   {petsitters.last_name} </p>
              <p> Full address : {petsitters.address.street} {petsitters.address.city} {petsitters.address.state} {petsitters.address.zip}</p>

              
              
              
            </Typography>

          </CardContent>
        </Collapse>
      </Card>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}


PetSitterProfile.propTypes = {  
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (PetSitterProfile);