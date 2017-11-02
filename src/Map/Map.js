import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import apiKey from '../apiKeys';

const Map = withScriptjs(withGoogleMap(({ nearbyParks }) => {
  console.log(nearbyParks);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat:39.7508006, lng:-104.9965947 }}
    >

    </GoogleMap>
  );
}
)
);
export default Map;
