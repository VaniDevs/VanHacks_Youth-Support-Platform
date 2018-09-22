/**
 */
import {STAFF_LOGIN, STAFF_GET, STAFF_LOGOUT} from "../actions/http/NetworkAction"

function _extractStaffData(action) {
    if (action.payload.data.metadata.err) {
        return null;
    } else {
        return action.payload.data.data.staff;
    }
}

export default function(state = null, action) {
    switch (action.type) {
        case STAFF_LOGIN:
        case STAFF_GET:
            return _extractStaffData(action);
            // console.log("reducer staff_get:");
            // console.log(action.payload);
            // return action.payload.data.data.staff;
        case STAFF_LOGOUT:
            return null;
    }
    return state;
}