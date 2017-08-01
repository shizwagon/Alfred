import React, { Component } from 'react';
import {Map, Listing, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

fetchPlaces = function(mapProps, map) {
  const {google} = mapProps;
  const service = new google.maps.places.PlacesService(map);
  // ...
}

render() {

    const style = {
      width: '500px',
      height: '500px'
    }
    const oakland = {
      lat:37.8044, 
      lng: -122.2711
    }
    const delores = {
      lat: 37.759703, 
      lng: -122.428093
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Map 
          google={this.props.google}
          onReady={this.fetchPlaces}
          zoom={11}
          style={style}
          centerAroundCurrentLocation = {true}
          // initialCenter={
          //   {
          //     lat: oakland.lat - (oakland.lat - delores.lat)/2,
          //     lng: oakland.lng - (oakland.lng - delores.lng)/2
          //   }
          // }
         >
         
         <Marker
            name={'Dolores park'}
            position={delores} />
          <Marker 
            name={'Oakland'}
            position={oakland}/>
        </Map>
         
          
      </div>
    );

  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB9mR3eQWL-TSU50q1iDJ2pzOru3D7iLWc',
  libraries: ['places']
})(MapContainer)


