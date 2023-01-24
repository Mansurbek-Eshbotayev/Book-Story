import { GET_LANG } from "./langType";

const initialState = {
  lang: localStorage.getItem("lang") || "en",
};

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LANG:
      return {
        ...state,
        type: action.paload,
      };
    default:
      return state;
  }
};
