import {
  GET_ADDRESS,
  GET_CONTACT,
  GET_USER,
  GET_CART,
  GET_PRODUCTORDERS,
  GET_CHANGEORDERSTATE,
  GET_USERS,
  GET_CARTS,
  GET_COORDINATES,
  GET_USER_CARTS,
  DELETE_PRODUCTORDER
} from "../actions/types";

const initialState = {
  address: {},
  contact: {},
  userLogged: {},
  users: [],
  cart: {},
  carts: [],
  userCarts: [],
  cartProductsOrders: [],
  orderState: {},
  coordinates: {}
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
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload
      };
    case GET_CARTS:
      return {
        ...state,
        carts: action.payload
      };
    case GET_USER_CARTS:
      return {
        ...state,
        userCarts: action.payload
      };
    case GET_PRODUCTORDERS:
      return {
        ...state,
        cartProductsOrders: action.payload
      };
    case GET_CHANGEORDERSTATE:
      return {
        ...state,
        orderState: action.payload
      };
    case GET_COORDINATES:
      return {
        ...state,
        coordinates: action.payload
      };
    case DELETE_PRODUCTORDER:
      return {
        ...state,
        cartProductsOrders: state.cartProductsOrders.filter(
          product => product.idProductOrder !== action.payload
        )
      };
    default:
      return state;
  }
}
