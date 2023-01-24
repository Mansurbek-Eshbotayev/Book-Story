import { GET_THEME } from "./themeType";

const initialState = {
  type: localStorage.getItem("theme") || "false",
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEME:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};
