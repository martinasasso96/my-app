import { IFavorites } from "../components/Favourites/favourites.hook";
import { ICurrentResponse, ILocation, useGetCurrent } from "../hooks";
import usePage from "../page.hook";
import { IWeatherData } from "../store/store.models";
import { useDispatch, useSelector } from "react-redux";
import { WEATHER_ICON_CODES } from "./Dashboard/dashboard.models";
import { useCallback } from "react";
import {
  changeErrorAction,
  changeFavoritesAction,
} from "../store/weatherActions";

const getColor = (iconCode: string) => {
  if (WEATHER_ICON_CODES?.sunny?.includes(iconCode || "")) return "#f7d64c";
  if (WEATHER_ICON_CODES?.cloudy?.includes(iconCode || "")) return "#a0a7c4";
  if (WEATHER_ICON_CODES?.rainy?.includes(iconCode || "")) return "#2396c3";
  if (WEATHER_ICON_CODES?.stormy?.includes(iconCode || "")) return "#81b9e5";
  if (WEATHER_ICON_CODES?.snowy?.includes(iconCode || "")) return "#2869a4";
};

export const useView = () => {
  const { onCurrentSuccess, onForecastSuccess } = usePage();
  const { refetch } = useGetCurrent();
  const days = useSelector((state: IWeatherData) => state?.weatherData?.days);
  const local = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ) as IFavorites[];
  const dispatch = useDispatch();

  const updateFavorites = useCallback((city?: string) => {
    refetch({
      city: city || "",
      onSuccess: (data: ICurrentResponse) => {
        localStorage.setItem(
          "favorites",
          JSON.stringify(
            local.concat([
              {
                name: city || "",
                temp_c: data?.current?.temp_c || "",
                iconCode: data?.current?.condition?.code || "",
                color:
                  getColor(data?.current?.condition?.code?.toString() || "") ||
                  "",
              },
            ])
          )
        );
        dispatch(
          changeFavoritesAction(
            local.concat([
              {
                name: city || "",
                temp_c: data?.current?.temp_c || "",
                iconCode: data?.current?.condition?.code || "",
                color:
                  getColor(data?.current?.condition?.code?.toString() || "") ||
                  "",
              },
            ])
          )
        );
      },
    });
  }, []);

  const updateAll = (city: ILocation) => {
    onCurrentSuccess(0, 0, city?.name);
    onForecastSuccess(city?.name || "", days);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onCurrentSuccess(latitude, longitude);
          onForecastSuccess(`${latitude},${longitude}` || "", days);
        },
        (error) => {
          dispatch(
            changeErrorAction({
              code: error.code,
              message: error.message,
            })
          );
        }
      );
    } else {
      dispatch(
        changeErrorAction({
          code: 1,
          message: "Geolocation is not supported by this browser.",
        })
      );
    }
  };

  return { updateAll, getUserLocation, updateFavorites };
};
