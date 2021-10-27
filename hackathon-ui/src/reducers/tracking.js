import {GET_TRACKING_INFO} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_TRACKING_INFO:
      return action.payload;
    default:
      return state;
  }
}
