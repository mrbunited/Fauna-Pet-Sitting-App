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
import BookNowModal from "../../components/BookNowModal";
import SelectionBar from "../SelectionBar"

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


class ProfilePetSitter extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     animalType: [],
  //     expanded: false,
  //     petsitters: [],
  //     };
  //    }


    //  myCallback = (animalType) => {
    //   this.setState({ animalType: animalType})};

  state = { 
    
    expanded: false,
    petsitters: [],
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  // componentWillMount(){
  //    this.setState= ({
  //     animalType : this.props.animalType
  //   })
  // }
  componentDidMount() {
    this.getPetSitters();
    // this.findByAnimal();
  }

getPetSitters = () => {
    console.log();
    API.getPetSitters()
      .then(res =>  this.setState({ petsitters: res.data })
)
      .catch(err => console.log(err));
  };



  // findByAnimal = (animalType) => {
  //   console.log(this.state.animalType);
  //   API.getPetSitters()
  //     .then(res => this.setState({ petsitters: res.data},
  //       console.log(res.data),
  //       console.log(this.state.animalType)
  //       )
  //     )
  //     .catch(err => console.log(err));
  // };


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
          
          action={
<BookNowModal />
          }
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} src="/placeholder.png">
               {/* <a href={"/petsitters/" + petsitters._id}></a> */}
            </Avatar>
          }
          disableTypography = {false}
          title={petsitters.first_name}
          subheader={petsitters.address.city}
          // subheaderTypographyProps={<Typography><p> Full address : {petsitters.address.street} {petsitters.address.city} {petsitters.address.state} {petsitters.address.zip}</p></Typography>}
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
            <Typography paragraph>
              <p1> Full name : {petsitters.first_name}   {petsitters.last_name} </p1>
              <p> Full address : {petsitters.address.street} {petsitters.address.city} {petsitters.address.state} {petsitters.address.zip}</p>
<p>Pet expertise : {petsitters.petExpertise[0]}, {petsitters.petExpertise[1]}, {petsitters.petExpertise[2]}, {petsitters.petExpertise[3]}</p>
              
              
              
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


ProfilePetSitter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (ProfilePetSitter);
