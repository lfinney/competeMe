import { combineReducers } from 'redux';
import { activeUser } from './Header/headerReducer';
import { submitComp, loginRequired } from './EventCreator/eventCreatorReducer';
import { removePopup } from './Popup/popupReducer';

const rootReducer = combineReducers({
  activeUser,
  submitComp,
  loginRequired,
  removePopup
});

export default rootReducer;
