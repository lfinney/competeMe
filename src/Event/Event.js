import React from 'react';
import PropTypes from 'prop-types';
import { mapDimensions, handleSubmit } from '../utilities/userEventsHelper';
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
          <h3 className="title">{comp.compName}</h3>
          <h4 className="short-des">{comp.competitiveness} {comp.sport}</h4>
          <h4 className="type">Event details: </h4>
          <p className="details">{comp.details}</p>
          <div className="logisitics">
            <h4 className="players">
              {comp.activePlayers.length}/{comp.players} Found</h4>
            <h4 className="date-time">{convertTime(comp.time) + ' '}
              on {dateFormat(comp.date, 'mediumDate')}</h4>
          </div>
        </div>

        <div className="park-map">
          <h3 className="park">{comp.pickedPark[0].name}</h3>
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
              apiKey.placesApi}&parks=places&callback=initMap`}
            nearbyParks={comp.pickedPark}
            loadingElement={
              <div style={mapDimensions} />
            }
            containerElement={
              <div style={mapDimensions} />
            }
            mapElement={
              <div style={mapDimensions} />
            }
          />
        </div>
        <div className="button-container">
          <button
            onClick={ () => {
              liveUser ? userCompetitions(comp, activeUser) : activePopup(true);
            }}>
            Count Me In!
          </button>
        </div>
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
