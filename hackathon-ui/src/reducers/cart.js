import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART} from '../actions/types';

const initialState = {
  products: [],
  totalAmount: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedTotalAmount =
        state.totalAmount + parseFloat (action.payload.prices_amountmax);

      const existingCartItemIndex = state.products.findIndex (
        item => item.id === action.payload.id
      );
      const existingCartItem = state.products[existingCartItemIndex];
      // existingCartItem['quantity'] += 1;
      let updatedProducts;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          totalAmount: parseFloat(existingCartItem.prices_amountmax) +
            parseFloat (action.payload.prices_amountmax),
          quantityAdded: existingCartItem.quantityAdded + 1,
        };
        updatedProducts = [...state.products];
        updatedProducts[existingCartItemIndex] = updatedItem;
      } else {
        action.payload.quantityAdded = 1;
        updatedProducts = state.products.concat (action.payload);
      }

      return {
        products: updatedProducts,
        totalAmount: updatedTotalAmount,
      };
    case REMOVE_FROM_CART:
      const existingCartItemIndex1 = state.products.findIndex (
        item => item.id === action.id
      );
      const existingItem = state.products[existingCartItemIndex];
      const updatedTotalAmount1 = state.totalAmount - existingItem.price;
      // let updatedItems;
      if (existingItem.totalAmount === 1) {
        updatedProducts = state.products.filter (item => item.id !== action.id);
      } else {
        const updatedItem = {...existingItem, amount: existingItem.amount - 1};
        updatedProducts = [...state.products];
        updatedProducts[existingCartItemIndex1] = updatedItem;
      }

      return {
        products: updatedProducts,
        totalAmount: updatedTotalAmount1,
      };

    case CLEAR_CART:
      return state;
    default:
      return state;
  }
}
