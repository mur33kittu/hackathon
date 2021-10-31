import reducers from '../reducers';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {generateProducts, getPlacedOrders} from '../actions';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middlewares = [thunk];

const store = createStore (
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware (...middlewares))
);

store.dispatch (generateProducts ());
store.dispatch(getPlacedOrders());

export default store;
