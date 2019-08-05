import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";



export default combineReducers({
  errors: errorReducer,
  product: productReducer,
});
