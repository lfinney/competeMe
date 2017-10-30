import { combineReducers } from 'redux';
import { activeUser } from './Header/headerReducer';
import { submitComp, loginRequired } from './EventCreator/eventCreatorReducer';
import { removePopup } from './Popup/popupReducer';
import { fetchFromFirebase, storeData } from './Main/mainReducer';

const rootReducer = combineReducers({
  activeUser,
  submitComp,
  loginRequired,
  removePopup,
  fetchFromFirebase
});

export default rootReducer;
