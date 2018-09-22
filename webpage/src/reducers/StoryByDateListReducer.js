/**
 */

import {STORY_LIST_BY_DATE_UPDATE, STORY_UPDATE_CHOSEN, STORY_UPDATE_TOP} from "../actions/http/NetworkAction"
import {STORY_BY_DATE_RESET_DATE, STORY_BY_DATE_SET_DATE, STORY_BY_DATE_UPDATE_LOCAL_TOP} from '../actions/page/StoryByDate'

function _extractStoryList(action) {

    if (action.payload.data.metadata.err) {
        return [];
    } else {
        return action.payload.data.data.stories;
    }
}

function _extractStory(action) {
    if (action.payload.data.metadata.err) {
        return [];
    } else {
        return action.payload.data.data.story;
    }
}

export default function (state = [], action) {
    switch (action.type) {
        case STORY_LIST_BY_DATE_UPDATE:
            return _extractStoryList(action);
        case STORY_UPDATE_CHOSEN:
            var newStory = _extractStory(action);
            if (newStory) {
                var newStateList = state.slice();
                newStateList.forEach(function (s) {
                    if (s._id === newStory._id) {
                        s.chosen = newStory.chosen;
                    }
                });
                return newStateList;
            } else {
                return state;
            }
        case STORY_UPDATE_TOP:
            var newStory = _extractStory(action);
            if (newStory) {
                var newStateList = state.slice();
                newStateList.forEach(function (s) {
                    if (s._id === newStory._id) {
                        s.top = newStory.top;
                    }
                });
                return newStateList;
            } else {
                return state;
            }
        case STORY_BY_DATE_UPDATE_LOCAL_TOP:
            var storyRef = action.payload.storyRef;
            var top = action.payload.top;
            var newStateList = state.slice();
            newStateList.forEach(function (s) {
                if (s._id === storyRef) {
                    s.top = top;
                }
            });
            return newStateList;
        case STORY_BY_DATE_RESET_DATE:
            return [];
        case STORY_BY_DATE_SET_DATE:
            return [];
    }
    return state;
}