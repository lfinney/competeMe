import React from 'react';
import PropTypes from 'prop-types';
import { handleSubmit } from '../utilities/userEventsHelper';
import Map from '../Map/Map';
import apiKey from '../apiKeys';
const dateFormat = require('dateformat');
const convertTime = require('convert-time');

const Event = ({ comp, liveUser, activePopup,
  userCompetitions, activeUser }) => {
  return (
    <div className="Event">
      <div className="event-info">
        <div className="event-text-details">
          <h4>{comp.sport} - {comp.competitiveness}</h4>
          <h4>{comp.players}</h4>
          <h4>{convertTime(comp.time) + ' '}
            on {dateFormat(comp.date, 'mediumDate') + ' '}
            at {comp.location}</h4>
          <p>{comp.details}</p>
          <h3>{comp.compName}</h3>
        </div>
        <div className="park-map">
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
              apiKey.placesApi}&parks=places&callback=initMap`}
            nearbyParks={comp.pickedPark}
            loadingElement={
              <div style={{ height: '200px', width: '200px'}} />
            }
            containerElement={
              <div style={{ height: '200px', width: '200px'}} />
            }
            mapElement={
              <div style={{ height: '200px', width: '200px'}}
            />
            }
          />
        </div>
        <button
          onClick={ () => {
            handleSubmit(liveUser, activePopup);
            if (liveUser) {
              userCompetitions(comp, activeUser);
            }
          }}>
          Count Me In!
        </button>
      </div>
    </div>
  );
};


Event.propTypes = {
  comp: PropTypes.object,
  liveUser: PropTypes.bool,
  activePopup: PropTypes.func,
  userCompetitions: PropTypes.func,
  activeUser: PropTypes.object
};

export default Event;
