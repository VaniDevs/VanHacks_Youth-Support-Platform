import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import LoginStaffReducer from './LoginedUserReducer'
import SearchResultReducer from './SearchResultReducer'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  form: formReducer,
  loginStaff: LoginStaffReducer,
  searchResults: SearchResultReducer,
});

export default rootReducer;
