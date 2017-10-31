import { combineReducers } from 'redux';
import { activeUser } from './Header/headerReducer';
import { submitComp, activePopup } from './EventCreator/eventCreatorReducer';
import { fetchFromFirebase } from './Main/mainReducer';

const rootReducer = combineReducers({
  activeUser,
  submitComp,
  activePopup,
  fetchFromFirebase
});

export default rootReducer;
