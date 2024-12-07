/* eslint-disable @typescript-eslint/no-explicit-any */

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
}

export interface IWeatherData {
  weatherData: IState;
}
