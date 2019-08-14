import axios from "axios";
import { GET_ERRORS } from "./types";

export const addNewUser = newUser => async dispatch => {
  try {
    await axios.post(`/api/user`, newUser);
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
