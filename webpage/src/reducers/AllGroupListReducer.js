/**
 */

import {GROUP_LIST_UPDATE} from '../actions/http/NetworkAction'

function _extractGroupList(action) {
    if (action.payload.data.metadata.err) {
        return [];
    } else {
        return action.payload.data.data.groups;
    }
}

export default function (state = [], action) {
    switch (action.type) {
        case GROUP_LIST_UPDATE:
            return _extractGroupList(action);
    }

    return state;
}
