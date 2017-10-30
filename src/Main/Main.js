import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDirectory from '../EventDirectory/EventDirectory';
import PropTypes from 'prop-types';
import { fetchFromFirebase } from '../utilities/firebaseHelper';
import { activePopup } from '../EventCreator/eventCreatorActions';



export class Main extends Component {
  componentDidMount() {
    this.props.fetchFromFirebase();
  }

render() {
    return (
      <div className="Main">
        <div className="nav-tabs">
          <h2>Upcoming Competitions</h2>
          <h2>Your Competitions</h2>
        </div>
        <EventDirectory
          competitions={this.props.competitions}
          liveUser={this.props.liveUser}
          activePopup={this.props.activePopup}/>
      </div>
    );
  }
}

Main.propTypes = {
  fetchFromFirebase: PropTypes.func,
  competitions: PropTypes.arrayOf(PropTypes.object),
  liveUser: PropTypes.bool,
  activePopup: PropTypes.func
};

const mapStateToProps = (store) => ({
  competitions: store.fetchFromFirebase,
  liveUser: store.activeUser.userId ? true : false
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFromFirebase: () => { dispatch(fetchFromFirebase()); },
    activePopup: ( bool ) => { dispatch(activePopup(bool)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
