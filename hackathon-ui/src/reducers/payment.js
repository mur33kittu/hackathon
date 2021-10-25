import {GET_PAYMENT_INFO} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_PAYMENT_INFO:
      return action.payload;
    default:
      return state;
  }
}
