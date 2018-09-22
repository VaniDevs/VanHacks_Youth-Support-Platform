/**
 */

import {GROUP_STUDENT_LIST_UPDATE} from '../actions/http/NetworkAction'
import {GROUP_STUDENT_LIST_RESET} from '../actions/page/StudentList'

function _extractStudentList(action) {
    if (action.payload.data.metadata.err) {
        return [];
    } else {
        return action.payload.data.data.students;
    }
}

export default function (state = [], action) {
    switch (action.type) {
        case GROUP_STUDENT_LIST_UPDATE:
            return _extractStudentList(action);
        case GROUP_STUDENT_LIST_RESET:
            return [];
    }
    return state;
}