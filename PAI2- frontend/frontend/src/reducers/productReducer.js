import { GET_PRODUCT, GET_PRODUCTS, GET_CATEGORY } from "../actions/types";

const initialState = {
  products: [],
  product: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        products: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_PRODUCT:
      return {
        ...state,
        project: action.payload
      };
    default:
      return state;
  }
}
