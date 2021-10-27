import {combineReducers} from 'redux';
import productsReducer from './products.js';
import cartReducer from '../reducers/cart';
import placedOrdersReducer from '../reducers/placedorders';
import trackingReducer from '../reducers/tracking';
import authReducer from '../reducers/auth';
import paymentReducer from '../reducers/payment';
import userReducer from '../reducers/user';

export default combineReducers ({
  products: productsReducer,
  cart: cartReducer,
  orders: placedOrdersReducer,
  tracking: trackingReducer,
  auth: authReducer,
  payment: paymentReducer,
  user: userReducer
});
