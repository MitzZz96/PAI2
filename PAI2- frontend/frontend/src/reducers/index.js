import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  errors: errorReducer,
  product: productReducer,
  categories: categoryReducer
});
