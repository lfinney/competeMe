import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDirectory from '../EventDirectory/EventDirectory';
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
        <EventDirectory events={this.props.events}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  events: store.fetchFromFirebase
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFromFirebase: () => dispatch(fetchFromFirebase())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
