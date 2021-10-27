import {GET_PLACED_ORDERS} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case GET_PLACED_ORDERS:
      return action.payload;
    default:
      return state;
  }
}
