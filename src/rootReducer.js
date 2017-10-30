import { combineReducers } from 'redux';
import { activeUser } from './Header/headerReducer';
import { submitComp, activePopup } from './EventCreator/eventCreatorReducer';
import { removePopup } from './Popup/popupReducer';
import { fetchFromFirebase } from './Main/mainReducer';

const rootReducer = combineReducers({
  activeUser,
  submitComp,
  activePopup,
  removePopup,
  fetchFromFirebase
});

export default rootReducer;
