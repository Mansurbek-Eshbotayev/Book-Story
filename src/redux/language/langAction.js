import { GET_LANG } from "./langType";

export const TargetLAng = (value) => {
  return {
    type: GET_LANG,
    payload: value,
  };
};
