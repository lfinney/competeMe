import React, { Component } from 'react';
import dummyMap from '../assets/dummyMap.png';
import firebase from '../firebase';

export default class EventCreator extends Component {
  constructor() {
    super();
    this.state = {
      compName: '',
      // sport: '',
      // competitiveness: '',
      // date: '',
      // details: '',
      // time: '',
      location: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(key, event) {
    this.setState({[key]: event.target.value});

  }

  handleSubmit() {
    const competition = Object.assign({}, {id: Date.now()}, this.state);
    const compsRef = firebase.database().ref('comps');

    compsRef.push(competition);
    this.setState({
      compName: '',
      // sport: '',
      // competitiveness: '',
      // date: '',
      // details: '',
      // time: '',
      location: ''
    });
  }

  render() {
    return (
      <div className="EventCreator">
        <h2 className="formTitle">Create New Competition</h2>
        <input
          className="text-input"
          type="text"
          placeholder="Competition Name"
          value={this.state.compName}
          onChange={ this.updateState.bind(this, 'compName') }/>
        {/* <select>
          <option value="">-Select a Sport-</option>
          <option value="Soccer">Soccer</option>
          <option value="Frisbee">Frisbee</option>
          <option value="Flag Football">Flag Football</option>
        </select>
        <h3 className="formTitle">Competitiveness</h3>
        <form className="radioButtons" action="selectCompetitiveness">
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
        </form> */}
        {/* <form>
          <h3 className="formTitle">Event Date and Time</h3>
          <input
            className="date-input"
            type="datetime-local"
            name="date-time" />
        </form> */}
        {/* <input
          className="textInput"
          type="textarea"
          placeholder="Other details competitors should know about..."
          rows="5"
          cols="40"/> */}
        <input
          className="text-input"
          type="text"
          placeholder="Park Search"
          value={this.state.location}
          onChange={ this.updateState.bind(this, 'location') }/>
        <div className="park-map">
          <img className="map" src={dummyMap} alt="placeholder map" />
        </div>
        <button onClick={ () => this.handleSubmit() }>Game On!</button>
      </div>
    );
  }
}
