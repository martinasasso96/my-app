/* eslint-disable @typescript-eslint/no-explicit-any */

import { changeErrorAction } from "@/app/store/weatherActions";
import API_LIST, { API_KEY } from "../api";
import { ICurrentProps } from "../Current";
import { useDispatch } from "react-redux";

export const useAutocomplete = () => {
  const dispatch = useDispatch();
  const options = { method: "GET", headers: { accept: "application/json" } };

  const refetch = ({ city, onSuccess, onError }: ICurrentProps) => {
    const input = `${API_LIST.AUTOCOMPLETE}?key=${API_KEY}&q=${city}&lang=it`;

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
