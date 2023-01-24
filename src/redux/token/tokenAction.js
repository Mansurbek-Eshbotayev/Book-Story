import { GET_TOKEN, REMOVE_TOKEN } from "./tokenType";

export const TargetToken = (value) => {
  return {
    token: GET_TOKEN,
    paload: value,
  };
};

export const RemoveToken = (value) => {
  return {
    token: REMOVE_TOKEN,
    paload: "",
  };
};
