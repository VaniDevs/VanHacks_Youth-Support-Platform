/**
 */
import {USER_LOGIN, USER_GET, USER_LOGOUT} from "../actions/http/NetworkAction"

function _extractStaffData(action) {
    if (action.payload.data.err) {
        return null;
    } else {
        return action.payload.data.data.staff;
    }
}

export default function(state = null, action) {
    switch (action.type) {
        case USER_LOGIN:
        case USER_GET:
            return _extractStaffData(action);
            // console.log("reducer staff_get:");
            // console.log(action.payload);
            // return action.payload.data.data.staff;
        case USER_LOGOUT:
            return null;
    }
    return state;
}