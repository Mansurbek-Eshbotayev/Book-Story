import { GET_THEME } from "./themeType";

export const targetTheme = (value) => {
  return {
    type: GET_THEME,
    payload: value,
  };
};
