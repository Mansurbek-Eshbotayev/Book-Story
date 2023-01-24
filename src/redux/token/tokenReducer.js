import { GET_TOKEN, REMOVE_TOKEN } from "./tokenType";

const initialState = {
  token: localStorage.getItem("token") || "",
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        type: action.payload,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};
