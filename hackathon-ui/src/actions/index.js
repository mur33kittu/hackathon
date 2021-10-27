import {
  GET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  GET_PLACED_ORDERS,
  GET_TRACKING_INFO,
  CHANGE_AUTH,
  GET_USER_INFO,
  GET_PAYMENT_INFO
} from './types';



export function changeAuth (isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
}

export function generateProducts () {
  return async function (dispatch) {
    const api = await fetch ('http://localhost:3006/api/products');
    const products = await api.json ();
    dispatch ({
      type: GET_PRODUCTS,
      payload: products,
    });
  };
}

export function addToCart (products) {
  return {
    type: ADD_TO_CART,
    payload: products,
  };
}

export function removeFromCart (products) {
  return {
    type: REMOVE_FROM_CART,
    payload: products,
  };
}

export function clearCart () {
  return {
    type: CLEAR_CART,
    payload: [],
  };
}

export function getPlacedOrders () {
  return async function (dispatch) {
    // const api = await fetch ('/api/meals');
    const api = await fetch ('http://localhost:3008/api/ordersandreturns');
    const orders = await api.json ();
    dispatch ({
      type: GET_PLACED_ORDERS,
      payload: orders,
    });
  };
}

export function getTrackingInfo (trackingNumber) {
  return async function (dispatch) {
    // const api = await fetch ('/api/meals');
    const api = await fetch (`http://localhost:3007/api/tracking/${trackingNumber}`);
    const tracking = await api.json ();
    dispatch ({
      type: GET_TRACKING_INFO,
      payload: tracking,
    });
  };
}


export function getUsers (userId) {
  return async function (dispatch) {
    const api = await fetch (`http://localhost:3009/api/users/${userId}`);
    const user = await api.json ();
    dispatch ({
      type: GET_USER_INFO,
      payload: user,
    });
  };
}



export function getPaymentInfo (userId) {
  return async function (dispatch) {
    const api = await fetch (`http://localhost:3010/api/payments/${userId}`);
    const payments = await api.json ();
    dispatch ({
      type: GET_PAYMENT_INFO,
      payload: payments,
    });
  };
}
