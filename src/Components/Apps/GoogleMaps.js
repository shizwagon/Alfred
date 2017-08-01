import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class GoogleMaps extends Component {
    componentDidMount() {
        this.loadMap();
    }
    loadMap() {
        if (this.props && this.props.google) {
          // google is available
          const {google} = this.props;
          const maps = google.maps;

          const mapRef = this.refs.map;
          const node = ReactDOM.findDOMNode(mapRef);

          let zoom = 16;
          let lat = 37.774929;
          let lng = -122.419416;
          const center = new maps.LatLng(lat, lng);
          const mapConfig = Object.assign({}, {
            center: center,
            zoom: zoom
          })
          this.map = new maps.Map(node, mapConfig);
        }
    }
    render() {
        return (
          <div ref='map'>
            Loading map...
            {this.renderChildren()}
            Hello
          </div>
        )
        
      }
    renderChildren() {
        const {children} = this.props;

        if (!children) return;

        return React.Children.map(children, c => {
          return React.cloneElement(c, {
            map: this.map,
            google: this.props.google,
            mapCenter: this.state.currentLocation
          });
        })
      }

    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     };
    // };
    // static defaultProps = {
    //     city: 'Alameda',
    // };
    // _getMap = (city) => {
    //     const main = this;
    //     let query = null;
    //     main.setState({
    //         infoStatus: 'loading'
    //     });
    //     if (!city || city === '') {
    //         query = this.props.city;
    //     } else {
    //         query = city;
    //     }
    //     fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyB9mR3eQWL-TSU50q1iDJ2pzOru3D7iLWc&callback=initMap', {mode: 'no-cors'})
    //         .then( function(response) {
    //             return response;
    //         })
    //         .then( function(response) {
    //             setTimeout( function() {
    //                 main.setState({
    //                     infoStatus: 'loaded'
    //                 });
    //             }, 300);
    //             return response.json();
    //         })
    //         .then( function(data) {
    //             main.setState({

    //             });
    //         })
    //         .catch( function() {
    //             main.setState({
    //                 infoStatus: 'error'
    //             });
    //         })
    // };

    // _initMap = (google) => {
    //     var map;
    //     map = new google.maps.Map(document.getElementById('map'), {
    //       center: {lat: -34.397, lng: 150.644},
    //       zoom: 8
    //     });
    // }
    // componentWillMount() {
    //     const {
    //         infoStatus
    //     } = this.state;
    //     var google = this._getMap();
    //     if(infoStatus === 'loaded'){
    //         this._initMap(google);
    //     }
    // };

    // render() {
    //     const {
    //         infoStatus
    //     } = this.state;
    //     let data = null;
    //     if (infoStatus === 'loaded') {
    //         data = <div className="map">

    //         </div>
    //     } else if (infoStatus === 'loading') {
    //         data = <div className="info loading">Loading weather data...</div>
    //     } else if (infoStatus === 'error') {
    //         data = <div className="info error">Error while loading weather data. Try again later.</div>
    //     }
    //     return (
    //         <div className="map">
    //             {data}
    //         </div>
    //     );
    // };
}
