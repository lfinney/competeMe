import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Label extends Component {
  constructor() {
    super();
    this.state = {
      showLabel: false
    };
  }
  //
  // toggleLabel() {
  //   this.setState({
  //     showLabel: !this.state.showLabel
  //   });
  // }

  render() {
    const { parkName } = this.props;
    return (
      // <div
      //   className="label-container"
      //   onMouseOver={() => this.toggleLabel()}
      //   onMouseOut={() => this.toggleLabel()}>
      //   { this.state.showLabel &&
      <div className="park-label">
        {parkName}
      </div>
      // }
      // </div>
    );
  }
}

Label.propTypes = {
  parkName: PropTypes.string,
  toggleLabel: PropTypes.string
};
