import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event/Event';

const EventDirectory = ({ competitions, liveUser, activePopup, userCompetitions, activeUser }) => {
  console.log(activeUser);

  const compCatalogue = competitions.map( (comp) => {
    return <Event
      comp={comp}
      key={comp.key}
      liveUser={liveUser}
      activePopup={activePopup}
      userCompetitions={userCompetitions}
      activeUser={activeUser} />;
  });

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
