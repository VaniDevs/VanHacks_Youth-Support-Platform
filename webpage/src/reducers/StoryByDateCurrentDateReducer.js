/**
 */

import moment from 'moment'
import {STORY_BY_DATE_RESET_DATE, STORY_BY_DATE_SET_DATE} from '../actions/page/StoryByDate'

export default function (state, action) {
    state = state || null;
    switch (action.type) {
        case STORY_BY_DATE_RESET_DATE:
            return null;
        case STORY_BY_DATE_SET_DATE:
            return action.payload;
    }
    return state;
}