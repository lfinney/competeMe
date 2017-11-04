import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Label from '../Label/Label';
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


const Map = withScriptjs(withGoogleMap(({ nearbyParks, markerIsShown }) => {
  console.log(nearbyParks);

  const selectPark = (park) => console.log(park);

  const markers = nearbyParks.map( (park, index) => {
    const parkObject = {
      name: park.name,
      lat: park.geometry.location.lat,
      lng: park.geometry.location.lng
    };

    return (
      <Marker
        key={index}
        position={{
          lat:parkObject.lat, lng:parkObject.lng}}
        onClick={() => selectPark(parkObject)}>
        <Label parkName={parkObject.name}/>
      </Marker>
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
