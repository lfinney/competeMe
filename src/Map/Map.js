import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import apiKey from '../apiKeys';

const Map = withScriptjs(withGoogleMap(() => {
  // console.log(props);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
    </GoogleMap>
  );
}
)
);
export default Map;
