import React from 'react';
import { withScriptjs, withGoogleMap,
  GoogleMap, Marker } from 'react-google-maps';
import { defaultMapPlacement } from '../utilities/userEventsHelper';

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
      </Marker>
    );
  });


  const mapSearch = <GoogleMap
    className="Map"
    defaultZoom={12}
    defaultCenter={defaultMapPlacement}>
    {markers}
  </GoogleMap>;

  const eventMap = <GoogleMap
    className="Map"
    defaultZoom={12}
    defaultCenter={defaultMapPlacement}>
    {markers}
  </GoogleMap>;

  return (
    pickPark ? mapSearch : eventMap
  );
}));

export default Map;
