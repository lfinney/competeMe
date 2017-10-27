import { combineReducers } from 'redux';
import { userLogin } from './Header/headerReducer';

const rootReducer = combineReducers({
  userLogin
});

export default rootReducer;
