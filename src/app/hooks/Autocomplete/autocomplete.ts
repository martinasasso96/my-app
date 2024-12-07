/* eslint-disable @typescript-eslint/no-explicit-any */

import API_LIST, { API_KEY } from "../api";
import { ICurrentProps } from "../Current";

export const useAutocomplete = () => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  const refetch = ({ city, onSuccess, onError }: ICurrentProps) => {
    const input = `${API_LIST.AUTOCOMPLETE}?key=${API_KEY}&q=${city}&lang=it`;

    fetch(input, options)
      .then((response) => response.json())
      .then((data) => {
        // Set the weather data to state
        if (onSuccess) onSuccess(data);
      })
      .catch((err) => {
        // Set the error to state if there is an error
        if (onError) onError(err);
        console.error(err);
      });
  };

  return { refetch };
};
