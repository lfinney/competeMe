import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDirectory from '../EventDirectory/EventDirectory';
import PropTypes from 'prop-types';
import { fetchFromFirebase, loadUserComps } from '../utilities/firebaseHelper';
import { joinComp } from '../utilities/userEventsHelper';
import { NavLink } from 'react-router-dom';
import { activePopup } from '../EventCreator/eventCreatorActions';



export class Main extends Component {
  componentDidMount() {
    this.props.fetchFromFirebase();
    loadUserComps(this.props.activeUser, this.props.competitions);
  }

  render() {
    return (
      <div className="Main">
        <div className="nav-tabs">
          <h2><NavLink to='/'>Upcoming Competitions</NavLink></h2>
          <h2><NavLink to='/my-competitions'>Your Competitions</NavLink></h2>
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
  activeUser: PropTypes.object
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
