import React from 'react';
import PropTypes from 'prop-types';
const dateFormat = require('dateformat');
const convertTime = require('convert-time');

const handleSubmit = (liveUser, activePopup) => {
  if (!liveUser) {
    activePopup(true);
    return;
  }
};

const Event = ({ comp, liveUser, activePopup }) => {
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
        onClick={ () => handleSubmit(liveUser, activePopup) }>
        Count Me In!
      </button>
    </div>
  );
};


Event.propTypes = {
  comp: PropTypes.object,
  liveUser: PropTypes.bool,
  activePopup: PropTypes.func
};

export default Event;
