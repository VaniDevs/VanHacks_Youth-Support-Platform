/**
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {storyListQueryByDate, groupQueryStudent} from '../actions/http/NetworkAction'
import {STORY_BY_DATE_SET_DATE, STORY_BY_DATE_RESET_DATE} from '../actions/page/StoryByDate'
import {STUDENT_LIST_CHANGE_GROUP, groupStudentListReset} from '../actions/page/StudentList'
import moment from 'moment'


function* fetchStoryListByDate(action) {
    var targetDate = null;
    switch (action.type) {
        case STORY_BY_DATE_RESET_DATE: {
            targetDate = "";
            break;
        }
        case STORY_BY_DATE_SET_DATE: {
            targetDate = action.payload || "";
            break;
        }
    }

    if (targetDate !== null) {
        const a = yield call(storyListQueryByDate, targetDate);
        yield put(a);
    }

}

function* fetchStudentByGroup(action) {
    if (action.type == STUDENT_LIST_CHANGE_GROUP ) {
        const newAction = yield call(groupStudentListReset);
        yield put(newAction);
        if (action.payload == 'all') {
        } else {
            const newAction = yield call(groupQueryStudent, action.payload);
            yield put(newAction);
        }
    }
}


function* networkSaga() {
    // yield takeLatest(STORY_BY_DATE_SET_DATE, fetchStoryListByDate);
    // yield takeLatest(STORY_BY_DATE_RESET_DATE, fetchStoryListByDate);
    // yield takeLatest(STUDENT_LIST_CHANGE_GROUP, fetchStudentByGroup);
}


export default networkSaga;