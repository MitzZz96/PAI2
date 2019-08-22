import { GET_API } from "../actions/types";

const initialState = {
  api: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        api: action.payload
      };

    default:
      return state;
  }
}
