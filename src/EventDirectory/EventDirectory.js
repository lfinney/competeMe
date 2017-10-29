import React, { Component } from 'react';

import Event from '../Event/Event';
import { fetchFromFirebase } from '../utilities/firebaseHelper';

export default class EventDirectory extends Component {
  constructor() {
    super();
    this.state = {
      upcoming: []
    };
  }

  componentDidMount() {
    const events = fetchFromFirebase();
    this.setState({
      upcoming: events
    });
    console.log(events);
  }

  render() {
    return (
      <div className="EventDirectory"
        events={this.state.upcoming}>
        {/* {events} */}
      </div>
    );
  }
}
