import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event/Event';

const EventDirectory = ({ competitions, liveUser, activePopup,
  userCompetitions, activeUser }) => {

  let compCatalogue;

  competitions ?
    compCatalogue = competitions.map( (comp) => {
      return <Event
        comp={comp}
        key={comp.key}
        liveUser={liveUser}
        activePopup={activePopup}
        userCompetitions={userCompetitions}
        activeUser={activeUser} />;
    }) :
    compCatalogue = <div className="Event">
      <div className="event-text-details">
        <h3 className="title">You have not joined any competitions yet.</h3>
      </div>
    </div>;

  return (
    <div className="EventDirectory">
      {compCatalogue}
    </div>
  );
};


EventDirectory.propTypes = {
  competitions: PropTypes.arrayOf(PropTypes.object),
  liveUser: PropTypes.bool,
  activePopup: PropTypes.func,
  userCompetitions: PropTypes.func,
  activeUser: PropTypes.object
};

export default EventDirectory;
