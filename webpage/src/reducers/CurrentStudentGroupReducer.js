/**
 */

import {STUDENT_LIST_CHANGE_GROUP, STUDENT_LIST_GROUP_ALL} from '../actions/page/StudentList'


export default function (state = STUDENT_LIST_GROUP_ALL, action) {
    switch (action.type) {
        case STUDENT_LIST_CHANGE_GROUP:
            return action.payload;
    }
    return state;
}