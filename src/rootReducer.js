import { combineReducers } from 'redux';
import { activeUser } from './Header/headerReducer';
import { submitComp } from './EventCreator/eventCreatorReducer';

const rootReducer = combineReducers({
  activeUser,
  submitComp
});

export default rootReducer;
