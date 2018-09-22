import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginStaffReducer from './LoginStaffReducer'


const rootReducer = combineReducers({
    state: (state = {}) => state,
    form: formReducer,
    loginStaff : LoginStaffReducer,
});

export default rootReducer;
