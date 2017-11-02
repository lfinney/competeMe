import { combineReducers } from 'redux';
import { activeUser } from './Header/headerReducer';
import { submitComp, activePopup, nearbyParks } from './EventCreator/eventCreatorReducer';
import { fetchFromFirebase, userLocation } from './Main/mainReducer';

const rootReducer = combineReducers({
  activeUser,
  submitComp,
  activePopup,
  fetchFromFirebase,
  userLocation,
  nearbyParks
});

export default rootReducer;
