import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


const Map = withScriptjs(withGoogleMap(({ nearbyParks, markerIsShown }) => {
  console.log(nearbyParks);

  const toggleLabel = () => console.log(this.props);

  const markers = nearbyParks.map( (park, index) => {
    return (
      <MarkerWithLabel
        key={index}
        position={{
          lat:park.geometry.location.lat, lng:park.geometry.location.lng}}
          labelStyle={{backgroundColor: "gray", fontSize: "1em", padding: "2px"}}
          labelVisible={false}
          onMouseOver={() => toggleLabel()}
     >
       <div>{park.name}</div>
     </MarkerWithLabel>
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
