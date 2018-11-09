import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { typography } from 'material-ui/styles';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
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
        width: '49%',
        height: '100%',
        position: "fixed",
        }
    return (
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
        />

        <Marker
            onClick = { this.onMarkerClick }
            name={'Tim Johnson'}
            position={{lat: 41.8611348, lng: -87.6290406}}
        />

        <Marker
            onClick = { this.onMarkerClick }
            name={'Debra Brown'}
            position={{lat: 41.8732745, lng: -87.6320864}}
        />

        <Marker
            onClick = { this.onMarkerClick }
            name={'Joseph White'}
            position={{lat: 41.872597, lng: -87.6320607}}
        />

        <Marker
            onClick = { this.onMarkerClick }
            name={'Angela Green'}
            position={{lat: 41.8708201, lng: -87.6304672}}
        />


        {/* infowindow for markers */}
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <Paper>
            <Typography variant = 'headline' component = 'h4'>
              Jane Smith
            </Typography>
            
            <Typography component = 'p'>
              431 S. Dearborn St. <br /> Apt 401, <br /> Chicago, IL 60605 <br />
              773.123.4567
            </Typography>   
          
            <Typography variant = 'headline' component = 'h4'>
              Tim Johnson
            </Typography>
            
            <Typography component = 'p'>
            1529 S. State St.<br /> Apt 8-D, <br /> Chicago, IL 60605 <br />
            773.777.9311
            </Typography>

            <Typography variant = 'headline' component = 'h4'>
              Debra Brown
            </Typography>
            
            <Typography component = 'p'>
            680 S. Federal St.<br /> Apt #708, <br /> Chicago, IL 60605 <br />
            773.123.4567
            </Typography> 

            <Typography variant = 'headline' component = 'h4'>
              Joseph White
            </Typography>
            
            <Typography component = 'p'>
            780 S. Federal St.<br /> Apt #1003, <br /> Chicago, IL 60605 <br />
            312.588.2300
            </Typography>

            <Typography variant = 'headline' component = 'h4'>
              Angela Green
            </Typography>
            
            <Typography component = 'p'>
            899 S. Plymouth Ct.<br /> Apt #400, <br /> Chicago, IL 60605 <br />
            312.987.6543
            </Typography>
          
          
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDTOoErHD1j9OHtqsCufxQykc_RffG6t1I")
})(GoogleMapsContainer)