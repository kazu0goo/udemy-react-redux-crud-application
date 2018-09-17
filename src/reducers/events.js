import {
  READ_EVENTS,
  READ_EVENT,
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT
} from "../actions";
import _ from "lodash";

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      //console.log(action.id);
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
