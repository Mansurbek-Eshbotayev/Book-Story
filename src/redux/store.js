import { createStore } from "redux";
import { hookReducer } from "./AllHooks";

export const store = createStore(hookReducer);
