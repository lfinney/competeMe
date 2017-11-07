import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitComp, activePopup, parkSearch } from './eventCreatorActions';
import { mapDimensions, defaultUserFormState, joinComp } from '../utilities/userEventsHelper';
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
      date: '2017-11-01',
      time: '15:00',
      details: '',
      location: '',
      creator: '',
      activePlayers: null,
      pickedPark: [],
      nearbyParks: []
    };
    this.pickPark = this.pickPark.bind(this);
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

  getLocation(userSearch) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(
      `${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/` +
      `json?location=39.7508,-104.9966&radius=1000&type=park` +
      `&keyword=${userSearch}&key=${apiKey.placesApi}`)
      .then(res => res.json()).then(parkData => {
        this.props.parkSearch(parkData.results);
        this.setState({nearbyParks: parkData.results});
      });
  }

  pickPark(park) {
    this.setState({pickedPark: [park]});
  }

  render() {
    return (
      <div>
        <div className="EventCreator">
          <h2 className="title">Create New Competition</h2>
          <input
            className="textInput compName"
            type="text"
            placeholder="Competition Name"
            value={this.state.compName}
            onChange={ this.updateState.bind(this, 'compName') }/>
          <select
            className="sportDropDown"
            value={this.state.value}
            onChange={ this.updateState.bind(this, 'sport')}>
            <option value="">-Select a Sport-</option>
            <option value="Soccer">Soccer</option>
            <option value="Frisbee">Frisbee</option>
            <option value="Flag Football">Flag Football</option>
          </select>
          <input
            className="textInput players"
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
          <h3 className="formTitle">Event Date and Time</h3>
          <form className="date-time">
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
          <textarea
            className="textInput textarea"
            type="textarea"
            placeholder="Other details competitors should know about..."
            rows="5"
            cols="40"
            value={this.state.details}
            onChange={ this.updateState.bind(this, 'details') }/>
          <h3 className="formTitle">Pick a Park to Play At</h3>
          <input
            className="text-input parkSearch"
            type="text"
            placeholder="Park Search"
            value={this.state.location}
            onChange={ this.updateState.bind(this, 'location') }/>
          <button onClick={ () =>{
            if (!this.props.liveUser) {
              this.props.activePopup(true);
              return;
            }
            this.getLocation(this.state.location) ;
          }
          }>Find Park</button>
          <div className="selected-park">
            {this.state.pickedPark.length < 1 ?
              <div className="park-name">
                <h3 className="italitcs">no park selected yet</h3>
              </div>
              :
              <div className="park-name">
                <h3>Current selection:  {this.state.pickedPark[0].name}</h3>
              </div>
            }
          </div>
          <div className="park-map">
            <Map
              pickPark={this.pickPark}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
                apiKey.placesApi}&parks=places&callback=initMap`}
              nearbyParks={this.props.nearbyParks}
              loadingElement={
                <div style={mapDimensions} />
              }
              containerElement={
                <div style={mapDimensions} />
              }
              mapElement={
                <div style={mapDimensions} />
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
  userCompetitions: PropTypes.func,
  parkSearch: PropTypes.func,
  liveUser: PropTypes.bool,
  activeUser: PropTypes.object,
  nearbyParks: PropTypes.arrayOf(PropTypes.object)
};

const mapStatetoProps = (store) => ({
  liveUser: store.activeUser.userId ? true : false,
  activeUser: store.activeUser,
  nearbyParks: store.nearbyParks,
  selectedPark: store.selectedPark
});

const mapDispatchToProps = (dispatch) => ({
  submitComp: ( newComp ) => { dispatch(submitComp(newComp)); },
  activePopup: ( bool ) => { dispatch(activePopup(bool)); },
  userCompetitions: (comp, activeUser) => {
    dispatch(joinComp(comp, activeUser));
  },
  parkSearch: ( searchResults ) => { dispatch(parkSearch(searchResults)); }
});


export default connect(mapStatetoProps, mapDispatchToProps)(EventCreator);
