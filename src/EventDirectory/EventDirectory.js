import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event/Event';

const EventDirectory = ({ competitions, liveUser, activePopup }) => {

  const compCatalogue = competitions.map( (comp) => {
    return <Event
      comp={comp}
      key={comp.key}
      liveUser={liveUser}
      activePopup={activePopup}/>;
  });

  return (
    <div className="EventDirectory">
      {compCatalogue}
    </div>
  );
};


EventDirectory.propTypes = {
  competitions: PropTypes.arrayOf(PropTypes.object),
  activePopup: PropTypes.func,
  liveUser: PropTypes.bool
};

export default EventDirectory;
