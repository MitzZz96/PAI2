import axios from "axios";
import { GET_ERRORS, GET_PRODUCT, GET_PRODUCTS, GET_CATEGORY } from "./types";

export const createProduct = (
  product,
  idCategory,
  history
) => async dispatch => {
  try {
    await axios.post(`/api/product`, product, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    history.push(`/api/product/${idCategory}}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProducts = () => async dispatch => {
  const res = await axios.get("/api/product/all");
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data
  });
};

export const getProduct = (name, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/product/${name}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (error) {
    history.push("/mainPage");
  }
};

export const getProductsFromCategory = idCategory => async dispatch => {
  try {
    const res = await axios.get(`/api/product/category/${idCategory}`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data
    // });
  }
};
