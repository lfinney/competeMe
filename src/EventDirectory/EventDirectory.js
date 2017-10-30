import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event/Event';

const EventDirectory = ({ competitions }) => {

  const compCatalogue = competitions.map( (comp) => {
    return <Event
      comp={comp}
      key={comp.key}/>;
  });

  return (
    <div className="EventDirectory">
      {compCatalogue}
    </div>
  );
};


EventDirectory.propTypes = {
  competitions: PropTypes.arrayOf(PropTypes.object)
};

export default EventDirectory;
