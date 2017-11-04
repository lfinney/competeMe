import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(({ nearbyParks, markerIsShown }) => {
  console.log(nearbyParks);
  const markers = nearbyParks.map( (park, index) => {
    return (
      <Marker
        key={index}
        position={{lat:park.geometry.location.lat, lng:park.geometry.location.lng}}/>
    );
  });

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat:39.7508006, lng:-104.9965947 }}>
      {markers}
    </GoogleMap>
  );
}));

export default Map;
