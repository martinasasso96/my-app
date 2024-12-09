/* eslint-disable @typescript-eslint/no-explicit-any */

import { IFavorites } from "../components/Favourites/favourites.hook";
import { SELECT_CITY_TYPE } from "../components/SelectCity/selectCity.models";
import { ICurrent, IForecast, ILocation } from "../hooks";

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  location: ILocation;
  current: ICurrent;
  forecast: IForecast;
  days: number;
  showCityModal: {
    state: boolean;
    type: SELECT_CITY_TYPE;
  };
  favorites: IFavorites[];
  error: {
    code?: number;
    message?: string;
  };
}

export interface IWeatherData {
  weatherData: IState;
}
