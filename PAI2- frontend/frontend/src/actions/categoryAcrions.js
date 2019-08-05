import axios from "axios";
import { GET_CATEGORY, GET_ERRORS } from "./types";

export const getCategory = idCategory => async dispatch => {
  try {
    const res = await axios.get(`/api/category/${idCategory}`);
    dispatch({
      type: GET_CATEGORY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
