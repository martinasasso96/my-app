/* eslint-disable import/no-anonymous-default-export */

import { IAction, IState } from "./store.models";

const initialState: IState = {
  location: { name: "loading" },
  current: {},
  forecast: {},
  days: 3,
};

export const weatherReducer = (
  state = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case "CHANGE_LOCATION":
      return { ...state, location: payload };
    case "CHANGE_CURRENT":
      return { ...state, current: payload };
    case "CHANGE_FORECAST":
      return { ...state, forecast: payload };
    case "CHANGE_DAYS":
      return { ...state, days: payload };
  }

  return state;
};
