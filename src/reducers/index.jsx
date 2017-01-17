import { combineReducers } from 'redux';
import CurrentUserReducer from './current-user.reducer';

const rootReducer = combineReducers({
  currentUser: CurrentUserReducer
});

export default rootReducer;
