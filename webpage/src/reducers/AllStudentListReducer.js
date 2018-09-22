/**
 */

import {STUDENT_LIST_UPDATE} from '../actions/http/NetworkAction'


function _extractStudentList(action) {
    if (action.payload.data.metadata.err) {
        return [];
    } else {
        return action.payload.data.data.students;
    }
}

export default function (state = [], action) {
    switch (action.type) {
        case STUDENT_LIST_UPDATE:
            return _extractStudentList(action);
    }

    return state;
}