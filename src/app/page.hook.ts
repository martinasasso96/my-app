"use client";

import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ICurrentResponse,
  IForecast,
  useGetCurrent,
  useGetForecast,
} from "./hooks";
import {
  changeCurrentAction,
  changeForecastAction,
  changeLocationAction,
} from "./store/weatherActions";

const usePage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { refetch: refetchCurrent } = useGetCurrent();
  const { refetch: refetchForecast } = useGetForecast();

  const dispatch = useDispatch();

  const onCurrentSuccess = useCallback(
    (lat?: number, lon?: number, city?: string) => {
      refetchCurrent({
        city: city || `${lat},${lon}`,
        onSuccess: (data: ICurrentResponse) => {
          dispatch(changeLocationAction(data?.location));
          dispatch(changeCurrentAction(data?.current));
          setLoading(false);
        },
      });
    },
    []
  );

  const refineForecast = (forecast: IForecast) => {
    return forecast?.forecastday?.map((f) => {
      return { ...f, date: new Date(f?.date) };
    });
  };

  const onForecastSuccess = useCallback((city: string, days: number) => {
    refetchForecast({
      city: city,
      days,
      onSuccess: (data) => {
        refineForecast(data?.forecast);
        dispatch(
          changeForecastAction({
            forecastday: refineForecast(data?.forecast),
          })
        );
      },
    });
  }, []);

  return {
    onCurrentSuccess,
    loading,
    onForecastSuccess,
  };
};

export default usePage;
