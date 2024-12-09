import { IFavorites } from "../components/Favourites/favourites.hook";
import { SELECT_CITY_TYPE } from "../components/SelectCity/selectCity.models";
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

export const changeShowCityModalAction = (modalState: {
  state: boolean;
  type: SELECT_CITY_TYPE;
}) => {
  return {
    type: "CHANGE_SHOW_CITY_MODAL",
    payload: modalState,
  };
};

export const changeFavoritesAction = (favorites: IFavorites[]) => {
  return {
    type: "CHANGE_FAVORITES",
    payload: favorites,
  };
};

export const changeErrorAction = (error: { code: number; message: string }) => {
  return {
    type: "CHANGE_ERROR",
    payload: error,
  };
};
