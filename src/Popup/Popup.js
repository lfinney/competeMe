import React from 'react';import { connect } from 'react-redux';
import { loginRequired } from '../EventCreator/eventCreatorActions';
import PropTypes from 'prop-types';


const Popup = ({ loginRequired }) => {
  return (
    <div className="Popup">
      <h3>Sorry, competitor.</h3>
      <h3>You must be logged in to do that.</h3>
      <button
        className="remove-popup"
        onClick={ (event) => {
          event.preventDefault();
          loginRequired();
        }}>
        Got it!
      </button>
    </div>
  );
};

Popup.propTypes = {
  removePopup: PropTypes.func
};


// const mapStateToProps = (store) => ({
// });

const mapDispatchToProps = (dispatch) => ({
  loginRequired: () => { dispatch(loginRequired(false)); }
});

export default connect(null, mapDispatchToProps)(Popup);
