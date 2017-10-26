import React from 'react';
import dummyMap from '../assets/dummyMap.png'

const EventCreator = () => {
  return (
    <div className="EventCreator">
      <h2 className="form-title">Create New Competition</h2>
      <input className="text-input" type="text" placeholder="Competition Name" />
      <select>
        <option value="">-Select a Sport-</option>
        <option value="Soccer">Soccer</option>
        <option value="Frisbee">Frisbee</option>
        <option value="Flag Football">Flag Football</option>
      </select>
      <h3 className="form-title">Competitiveness</h3>
      <form className="radio-buttons" action="selectCompetitiveness">
        <input
          className="radio rad1"
          type="radio"
          name="competitiveness"
          value="Casual" />
          <span className="text1">Casual</span>
          <br />
        <input
          className="radio rad2"
          type="radio"
          name="competitiveness"
          value="Casual/Competitive" />
          <span className="text2">Casual/Competitive</span>
          <br />
        <input
          className="radio rad3"
          type="radio"
          name="competitiveness"
          value="Competitive" />
          <span className="text3">Competitive</span>
          <br />
      </form>
    <form>
        <h3 className="form-title">Event Date and Time</h3>
        <input className="date-input" type="datetime-local" name="date-time" />
      </form>
      <input className="text-input" type="textarea" placeholder="Other details competitors should know about..." rows="5" cols="40"/>
      <input className="text-input" type="text" placeholder="Park Search" />
      <div className="park-map">
        <img className="map" src={dummyMap} alt="placeholder map" />
      </div>
      <button>Game On!</button>
    </div>
  );
}


export default EventCreator;
