import { ICurrent, IForecast, ILocation } from "../hooks";

export const changeLocationAction = (location: ILocation) => {
  return {
    type: "CHANGE_LOCATION",
    payload: location,
  };
};

export const changeCurrentAction = (current: ICurrent) => {
  return {
    type: "CHANGE_CURRENT",
    payload: current,
  };
};

export const changeForecastAction = (forecast: IForecast) => {
  return {
    type: "CHANGE_FORECAST",
    payload: forecast,
  };
};

export const changeDaysAction = (days: number) => {
  return {
    type: "CHANGE_DAYS",
    payload: days,
  };
};
