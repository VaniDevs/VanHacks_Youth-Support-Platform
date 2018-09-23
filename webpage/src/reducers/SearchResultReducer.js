import {RESOURCE_SEARCH} from "../actions/http/NetworkAction"
import {SEARCH_CLEAR_RESULTS} from '../actions/page/SearchHome'

export default function(state = [], action) {
  switch (action.type) {
    case RESOURCE_SEARCH: {
      return action.payload.data.resources || [];
    }
    case SEARCH_CLEAR_RESULTS: {
      return [];
    }
  }
  return state;
}