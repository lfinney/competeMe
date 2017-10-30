import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDirectory from '../EventDirectory/EventDirectory';
import PropTypes from 'prop-types';
import { fetchFromFirebase } from '../utilities/firebaseHelper';


export class Main extends Component {
  componentDidMount() {
    this.props.fetchFromFirebase();
  }

render() {
    return (
      <div className="Main">
        <div className="nav-tabs">
          <h2>Upcoming</h2>
          <h2>In-Progress</h2>
          <h2>Completed</h2>
        </div>
        <EventDirectory competitions={this.props.competitions}/>
      </div>
    );
  }
}

Main.propTypes = {
  fetchFromFirebase: PropTypes.func,
  competitions: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (store) => ({
  competitions: store.fetchFromFirebase
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFromFirebase: () => dispatch(fetchFromFirebase())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
