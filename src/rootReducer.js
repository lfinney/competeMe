import { combineReducers } from 'redux';
import { activeUser } from './Header/headerReducer';

const rootReducer = combineReducers({
  activeUser
});

export default rootReducer;
