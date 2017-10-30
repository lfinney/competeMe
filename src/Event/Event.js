import React from 'react';
const dateFormat = require('dateformat');
const convertTime = require('convert-time');



const Event = ({ comp }) => {
  console.log(comp);
  return (
    <div className="Event">
      <h3>{comp.compName}</h3>
      <h4>{comp.sport} - {comp.competitiveness}</h4>
      <h4>{comp.players}</h4>
      <h4>{dateFormat(comp.date, 'mediumDate')}, {convertTime(comp.time)}, {comp.location}</h4>
      <p>{comp.details}</p>
      <div className="park-map"></div>
      <button>Count Me In!</button>
    </div>
  );
};


export default Event;
