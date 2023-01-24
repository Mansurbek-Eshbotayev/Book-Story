import { combineReducers } from "redux";
import { langReducer } from "./language/langReducer";
import { themeReducer } from "./theme/themeReduser";
import { tokenReducer } from "./token/tokenReducer";

export const hookReducer = combineReducers({
  theme: themeReducer,
  token: tokenReducer,
  lang: langReducer,
});
