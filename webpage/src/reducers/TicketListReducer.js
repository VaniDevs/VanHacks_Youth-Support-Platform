/**
 */
import {TICKET_QUERY} from "../actions/http/NetworkAction"

function _extractTicketsData(action) {
    if (action.payload.data.metadata.err) {
        return [];
    } else {
        return action.payload.data.data.tickets;
    }
}

export default function(state = [], action) {
    switch (action.type) {
        case TICKET_QUERY:
            return _extractTicketsData(action);
    }
    return state;
}