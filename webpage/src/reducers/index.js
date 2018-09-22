import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginStaffReducer from './LoginStaffReducer'
import TicketListReducer from './TicketListReducer'
import EditTicketReducer from './EditTicketReducer'
import ConfigReducer from './ConfigReducer'
import StoryByDateCurrentDateReducer from './StoryByDateCurrentDateReducer'
import StoryByDateListReducer from './StoryByDateListReducer'
import AllStudentListReducer from './AllStudentListReducer'
import AllGroupListReducer from './AllGroupListReducer'
import GroupStudentListReducer from './GroupStudentListReducer'
import CurrentStudentGroupReducer from './CurrentStudentGroupReducer'


const rootReducer = combineReducers({
    state: (state = {}) => state,
    form: formReducer,
    loginStaff : LoginStaffReducer,
    ticketList : TicketListReducer,
    editTicket : EditTicketReducer,
    oomateConfig : ConfigReducer,
    storyByDateCurrentDate : StoryByDateCurrentDateReducer,
    storyByDateList: StoryByDateListReducer,
    allStudentList : AllStudentListReducer,
    allGroupList : AllGroupListReducer,
    groupStudentList : GroupStudentListReducer,
    currentStudentGroup : CurrentStudentGroupReducer
});

export default rootReducer;
