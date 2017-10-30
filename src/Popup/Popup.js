import React from 'react';import { connect } from 'react-redux';
import { removePopup } from './popupActions';
import PropTypes from 'prop-types';


const Popup = ({ removePopup }) => {
  return (
    <div className="Popup">
      <h3>Sorry, competitor.</h3>
      <h3>You must be logged in to do that.</h3>
      <button
        className="remove-popup"
        onClick={ (event) => {
          event.preventDefault();
          removePopup();
        }}>
        Got it!
      </button>
    </div>
  );
};

Popup.propTypes = {
  removePopup: PropTypes.func
};


const mapStateToProps = (store) => ({
  liveUser: store.activeUser.userId ? true : false
});

const mapDispatchToProps = (dispatch) => ({
  removePopup: () => { dispatch(removePopup(true)); }
});

export default connect(null, mapDispatchToProps)(Popup);
