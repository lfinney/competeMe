import React, { Component } from 'react';

export default class Label extends Component {
  constructor() {
    super();
    this.state = {
      showLabel: false
    };
  }

  render() {
    const { parkName } = this.props;
    console.log(parkName);
    return (
      <div>
        {parkName}
      </div>
    );
  }


}
