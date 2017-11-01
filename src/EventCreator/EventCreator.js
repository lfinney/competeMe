import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitComp, activePopup } from './eventCreatorActions';
import { defaultUserFormState, joinComp } from '../utilities/userEventsHelper';
import Map from '../Map/Map';
import apiKey from '../apiKeys';
import PropTypes from 'prop-types';
import firebase from '../firebase.js';
// import { userCompetitions } from '../Main/mainActions';

export class EventCreator extends Component {
  constructor() {
    super();
    this.state = {
      compName: '',
      sport: '',
      players: '',
      competitiveness: 'Casual',
      date: '1987-10-09',
      time: '15:00',
      details: '',
      location: '',
      creator: '',
      activePlayers: null
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  updateState(key, event) {
    event.preventDefault();
    this.setState({[key]: event.target.value});

  }

  handleSubmit = () => {
    if (!this.props.liveUser) {
      this.props.activePopup(true);
      return;
    }
    const competition = Object.assign({}, this.state, {
      id: Date.now(),
      creator:this.props.activeUser.userId,
      activePlayers: [this.props.activeUser.userId] });
    const compsRef = firebase.database().ref('comps');

    compsRef.push(competition);
    this.props.submitComp(competition);
    this.setState({ defaultUserFormState });
    this.props.userCompetitions(competition, this.props.activeUser);
  }

  //location is hardcoded to denver; this needs to be changed to pull from user search in event creator
  //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=YOUR_API_KEY

  getLocation() {
   const proxy = 'https://cors-anywhere.herokuapp.com/'
    fetch(
      ` ${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=${
        apiKey.placesApi}`)
      // .then(res => res.json())
      .then(res => res.json()).then(data => data);
  }

  render() {
    return (
      <div>
        <div className="EventCreator">
          <h2 className="formTitle">Create New Competition</h2>
          <input
            className="text-input"
            type="text"
            placeholder="Competition Name"
            value={this.state.compName}
            onChange={ this.updateState.bind(this, 'compName') }/>
          <select
            value={this.state.value}
            onChange={ this.updateState.bind(this, 'sport')}>
            <option value="">-Select a Sport-</option>
            <option value="Soccer">Soccer</option>
            <option value="Frisbee">Frisbee</option>
            <option value="Flag Football">Flag Football</option>
          </select>
          <input
            className="text-input"
            type="number"
            pattern="\d*"
            placeholder="# Players Needed"
            value={this.state.players}
            onChange={ this.updateState.bind(this, 'players') }/>
          <h3 className="formTitle">Competitiveness</h3>
          <form className="radioButtons" action="selectCompetitiveness">
            <input
              className="radio rad1"
              type="radio"
              name="competitiveness"
              value="Casual"
              checked={this.state.competitiveness === 'Casual'}
              onChange={ this.updateState.bind(this, 'competitiveness') } />
            <span className="text1">Casual</span>
            <br />
            <input
              className="radio rad2"
              type="radio"
              name="competitiveness"
              value="Casual/Competitive"
              checked={this.state.competitiveness === 'Casual/Competitive'}
              onChange={ this.updateState.bind(this, 'competitiveness') }  />
            <span className="text2">Casual/Competitive</span>
            <br />
            <input
              className="radio rad3"
              type="radio"
              name="competitiveness"
              value="Competitive"
              checked={this.state.competitiveness === 'Competitive'}
              onChange={ this.updateState.bind(this, 'competitiveness') }  />
            <span className="text3">Competitive</span>
            <br />
          </form>
          <form>
            <h3 className="formTitle">Event Date and Time</h3>
            <input
              className="date-input"
              type="date"
              name="date"
              value={this.state.date}
              onChange={ this.updateState.bind(this, 'date')}/>
            <input
              className="time-input"
              type="time"
              name="time"
              value={this.state.time}
              step="1800"
              onChange={ this.updateState.bind(this, 'time')}/>
          </form>
          <input
            className="textInput"
            type="textarea"
            placeholder="Other details competitors should know about..."
            rows="5"
            cols="40"
            value={this.state.details}
            onChange={ this.updateState.bind(this, 'details') }/>
          <input
            className="text-input"
            type="text"
            placeholder="Park Search"
            value={this.state.location}
            onChange={ this.updateState.bind(this, 'location') }/>
          <div className="park-map">
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
                apiKey.placesApi}&parks=places&callback=initMap`}
              loadingElement={
                <div style={{ height: '200px', width: '200px'}} />
              }
              containerElement={
                <div style={{ height: '200px', width: '200px'}} />
              }
              mapElement={
                <div style={{ height: '200px', width: '200px'}} />
              }
            />
          </div>
          <button onClick={ () => this.handleSubmit() }>Game On!</button>
        </div>
      </div>
    );
  }
}

EventCreator.propTypes = {
  submitComp: PropTypes.func,
  activePopup: PropTypes.func,
  liveUser: PropTypes.bool
};

const mapStatetoProps = (store) => ({
  liveUser: store.activeUser.userId ? true : false,
  activeUser: store.activeUser
});

const mapDispatchToProps = (dispatch) => ({
  submitComp: ( newComp ) => { dispatch(submitComp(newComp)); },
  activePopup: ( bool ) => { dispatch(activePopup(bool)); },
  userCompetitions: (comp, activeUser) => {
    dispatch(joinComp(comp, activeUser));
  }
});


export default connect(mapStatetoProps, mapDispatchToProps)(EventCreator);
