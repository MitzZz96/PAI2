import axios from "axios";
import { GET_API } from "./types";

export const getApi = () => async dispatch => {
  const res = await axios.get("https://elephant-api.herokuapp.com/elephants");
  dispatch({
    type: GET_API,
    payload: res.data
  });
};
