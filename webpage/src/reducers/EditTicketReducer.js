/**
 */

import {TICKET_QUERY_ONE} from '../actions/http/NetworkAction'
import {CLEAR_TICKET_EDITING} from '../actions/page/TicketEditing'
export default function(state = {}, action) {

    switch (action.type) {
        case TICKET_QUERY_ONE:
            return action.payload.data.data.ticket || {};
        case CLEAR_TICKET_EDITING:
            return {};
    }
    return state;
}