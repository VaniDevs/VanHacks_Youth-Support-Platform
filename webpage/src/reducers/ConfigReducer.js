/**
 */

import {CONFIG_QUERY, CONFIG_UPDATE} from '../actions/http/NetworkAction'

export default function(state = {}, action) {
    switch (action.type) {
        case CONFIG_QUERY:
        case CONFIG_UPDATE:
            return action.payload.data.data.config;
    }
    return state;
}