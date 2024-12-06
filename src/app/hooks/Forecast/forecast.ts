/* eslint-disable @typescript-eslint/no-explicit-any */

import API_LIST, { API_KEY } from "../api";
import { IForecastProps } from "./models";

/**
 * This method is used retrieve the current weather data.
 * Method: GET
 * @param payload: {key: string; q: string;}
 * @returns
 */

export const useGetForecast = ({
  city,
  days,
  onSuccess,
  onError,
}: IForecastProps) => {
  const options = { method: "GET", headers: { accept: "application/json" } };
  const input = `${API_LIST.FORECAST}?key=${API_KEY}&q=${city}&days=${days}`;

  const refetch = () => {
    fetch(input, options)
      .then((response) => response.json())
      .then((data) => {
        if (onSuccess) onSuccess(data);
      })
      .catch((err) => {
        if (onError) onError(err);
        console.error(err);
      });
  };

  return { refetch };
};
