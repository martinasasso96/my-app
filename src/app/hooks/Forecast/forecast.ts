/* eslint-disable @typescript-eslint/no-explicit-any */

import { changeErrorAction } from "@/app/store/weatherActions";
import API_LIST, { API_KEY } from "../api";
import { IForecastProps } from "./models";
import { useDispatch } from "react-redux";

/**
 * This method is used retrieve the current weather data.
 * Method: GET
 * @param payload: {key: string; q: string;}
 * @returns
 */

export const useGetForecast = () => {
  const dispatch = useDispatch();
  const options = { method: "GET", headers: { accept: "application/json" } };

  const refetch = ({ city, days, onSuccess, onError }: IForecastProps) => {
    const input = `${API_LIST.FORECAST}?key=${API_KEY}&q=${city}&days=${days}&lang=it`;

    fetch(input, options).then((response) => {
      if (!response.ok) {
        dispatch(
          changeErrorAction({
            code: response.status,
            message: response.statusText,
          })
        );
        throw new Error("HTTP status code: " + response.status);
      }
      response
        .json()
        .then((data) => {
          if (onSuccess) onSuccess(data);
        })
        .catch((err) => {
          if (onError) onError(err);
        });
    });
  };

  return { refetch };
};
