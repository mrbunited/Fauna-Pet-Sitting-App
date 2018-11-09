import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { isThisSecond } from 'date-fns';
// import { typography } from 'material-ui/styles';
import Grid from '@material-ui/core/Grid';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      clickedMarker: "Jane"

    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    console.log(props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      clickedMarker: {title: props.title, address: props.address},
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
        width: '800px',
        height: '800px',
        position: "fixed",
        
        }
    return (
      <Grid container>
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 15 }
        initialCenter = {{ lat: 41.8703354, lng: -87.6257629 }}
      >

      {/* markers for petsitters */}
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Jane Smith' }
          position = {{ lat: 41.8760666, lng: -87.6312733 }}
          address= {"431 S. Dearborn St. Apt 401, Chicago, IL 60605 773.123.4567"}
        />

        <Marker
            onClick = { this.onMarkerClick }
            title={'Tim Johnson'}
            position={{lat: 41.8611348, lng: -87.6290406}}
            address= {"1529 S. State St. Apt 8-D,  Chicago, IL 60605 773.777.9311"}
        />

        <Marker
            onClick = { this.onMarkerClick }
            title={'Debra Brown'}
            position={{lat: 41.8732745, lng: -87.6320864}}
            address= {"680 S. Federal St. Apt #708,  Chicago, IL 60605 773.123.4567"}
        />

        <Marker
            onClick = { this.onMarkerClick }
            title={'Joseph White'}
            position={{lat: 41.872597, lng: -87.6320607}}
            address= {"780 S. Federal St. Apt #1003,  Chicago, IL 60605 312.588.2300"}
        />

        <Marker
            onClick = { this.onMarkerClick }
            title={'Angela Green'}
            position={{lat: 41.8708201, lng: -87.6304672}}
            address= {'899 S. Plymouth Ct. Apt #400,  Chicago, IL 60605 312.987.6543 '}
        />


        {/* infowindow for markers */}
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <Paper>
            <Typography variant = 'headline' component = 'h4'>
              {this.state.clickedMarker.title}
            </Typography>
            <Typography component = 'p'>
            {this.state.clickedMarker.address}
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
      </Grid>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDTOoErHD1j9OHtqsCufxQykc_RffG6t1I")
})(GoogleMapsContainer)