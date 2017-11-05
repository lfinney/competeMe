import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDirectory from '../EventDirectory/EventDirectory';
import PropTypes from 'prop-types';
import { fetchFromFirebase, loadUserComps } from '../utilities/firebaseHelper';
import { joinComp, locationDefaults } from '../utilities/userEventsHelper';
import { NavLink } from 'react-router-dom';
import { activePopup } from '../EventCreator/eventCreatorActions';



export class Main extends Component {
  componentDidMount() {
    this.props.fetchFromFirebase();
    this.props.getUserLocation();

  }

  componentWillUpdate(nextProps) {
    if ( this.props.competitions.length !== nextProps.competitions.length) {
      const { activeUser, competitions } =  nextProps;
      loadUserComps(activeUser, competitions);
    }
  }

  render() {
    return (
      <div className="Main">
        <div className="nav-tabs">
          <NavLink
            to='/all-competitions'
            className='display-link'
            activeClassName="selected">
            <h2>
              Upcoming Competitions
            </h2>
          </NavLink>
          <NavLink
            to='/my-competitions'
            className='display-link'
            activeClassName="selected">
            <h2>
              Your Competitions
            </h2>
          </NavLink>
        </div>
        { this.props.location.pathname === '/my-competitions' && this.props.liveUser ?
          <EventDirectory
            competitions={this.props.activeUser.competitions}
            liveUser={this.props.liveUser}
            activePopup={this.props.activePopup}
            userCompetitions={this.props.userCompetitions}
            activeUser={this.props.activeUser}/>
          :
          <EventDirectory
            competitions={this.props.competitions}
            liveUser={this.props.liveUser}
            activePopup={this.props.activePopup}
            userCompetitions={this.props.userCompetitions}
            activeUser={this.props.activeUser}/>
        }
      </div>
    );
  }
}

Main.propTypes = {
  fetchFromFirebase: PropTypes.func,
  competitions: PropTypes.arrayOf(PropTypes.object),
  liveUser: PropTypes.bool,
  activePopup: PropTypes.func,
  userCompetitions: PropTypes.func,
  getUserLocation: PropTypes.func,
  activeUser: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = (store) => ({
  competitions: store.fetchFromFirebase,
  liveUser: store.activeUser.userId ? true : false,
  activeUser: store.activeUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFromFirebase: () => { dispatch(fetchFromFirebase()); },
    activePopup: (bool) => { dispatch(activePopup(bool)); },
    userCompetitions: (comp, activeUser) => {
      dispatch(joinComp(comp, activeUser));
    },
    getUserLocation: () => { dispatch(locationDefaults()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
