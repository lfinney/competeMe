import React from 'react';
import EventDirectory from '../EventDirectory/EventDirectory';


const Main = () => {
  return (
    <div className="Main">
      <div className="nav-tabs">
        <h2>Upcoming</h2>
        <h2>In-Progress</h2>
        <h2>Completed</h2>
      </div>
      <EventDirectory />
    </div>
  );
}


export default Main;
