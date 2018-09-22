import {RESOURCE_SEARCH} from "../actions/http/NetworkAction"

export default function(state = [], action) {
  switch (action.type) {
    case RESOURCE_SEARCH: {
      return action.payload.data.resources;
    }
  }
  return state;
}