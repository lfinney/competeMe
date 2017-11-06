import React from 'react';
import { withScriptjs, withGoogleMap,
  GoogleMap, Marker } from 'react-google-maps';
// import Label from '../Label/Label';

const Map = withScriptjs(withGoogleMap(({ nearbyParks, pickPark }) => {

  const markers = nearbyParks.map( (park, index) => {
    let parkObject;
    park.geometry ?
      parkObject = {
        name: park.name,
        lat: park.geometry.location.lat,
        lng: park.geometry.location.lng
      } :
      parkObject = {
        name: park.name,
        lat: park.lat,
        lng: park.lng
      };

    return (
      <Marker
        key={index}
        position={{
          lat:parkObject.lat, lng:parkObject.lng}}
        onClick={() => pickPark(parkObject)}>
        {/* <Label parkName={parkObject.name}/> */}
      </Marker>
    );
  });


  const mapSearch = <GoogleMap
    className="Map"
    defaultZoom={12}
    defaultCenter={{ lat:39.7508006, lng:-104.9965947 }}>
    {markers}
  </GoogleMap>;

  const eventMap = <GoogleMap
    className="Map"
    defaultZoom={12}
    defaultCenter={{ lat:39.7508006, lng:-104.9965947 }}>
    {markers}
  </GoogleMap>;

  return (
    pickPark ? mapSearch : eventMap
  );
}));

export default Map;
