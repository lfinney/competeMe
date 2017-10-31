import React from 'react';
import PropTypes from 'prop-types';
import { handleSubmit, joinComp } from '../utilities/userEventsHelper';
const dateFormat = require('dateformat');
const convertTime = require('convert-time');

const Event = ({ comp, liveUser, activePopup, userCompetitions, activeUser }) => {
  return (
    <div
      className="Event"
      liveUser={liveUser}>
      <h3>{comp.compName}</h3>
      <h4>{comp.sport} - {comp.competitiveness}</h4>
      <h4>{comp.players}</h4>
      <h4>{convertTime(comp.time) + ' '}
        on {dateFormat(comp.date, 'mediumDate') + ' '}
        at {comp.location}</h4>
      <p>{comp.details}</p>
      <div className="park-map"></div>
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
