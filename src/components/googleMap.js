import React, { Component } from 'react';
import google from 'react-google-maps';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
        zoom: 12,
        center: {
          lat: 35.5951,
          lng: 82.5515
        }
    });
  }

  render() {
    //this.refs.map
    return <div ref="map"><GoogleMap lng={} lat={} /></div>;

  }


}

export default GoogleMap;
