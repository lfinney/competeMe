import React, { Component } from 'react';
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

export default EventDirectory;
