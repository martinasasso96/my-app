/* eslint-disable import/no-anonymous-default-export */

import { SELECT_CITY_TYPE } from "../components/SelectCity/selectCity.models";
import { IAction, IState } from "./store.models";

const initialState: IState = {
  location: { name: "loading" },
  current: {},
  forecast: {},
  days: 3,
  showCityModal: {
    state: false,
    type: SELECT_CITY_TYPE.ADD,
  },
  favorites: [],
  error: {
    code: 0,
    message: "",
  },
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
    case "CHANGE_SHOW_CITY_MODAL":
      return { ...state, showCityModal: payload };
    case "CHANGE_FAVORITES":
      return { ...state, favorites: payload };
    case "CHANGE_ERROR":
      return { ...state, error: payload };
  }

  return state;
};
