import {
  GET_ADDRESS,
  GET_CONTACT,
  GET_USER,
  GET_CART,
  GET_PRODUCTORDERS
} from "../actions/types";

const initialState = {
  address: {},
  contact: {},
  userLogged: {},
  cart: {},
  cartProductsOrders: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case GET_USER:
      return {
        ...state,
        userLogged: action.payload
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload
      };
    case GET_PRODUCTORDERS:
      return {
        ...state,
        cartProductsOrders: action.payload
      };
    default:
      return state;
  }
}
