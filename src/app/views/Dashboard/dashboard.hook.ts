import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IWeatherData } from "@/app/store/store.models";
import { useView } from "../views.hook";

export const useDashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { getUserLocation } = useView();

  const location = useSelector(
    (state: IWeatherData) => state?.weatherData?.location
  );
  const current = useSelector(
    (state: IWeatherData) => state?.weatherData?.current
  );
  const showCityModal = useSelector(
    (state: IWeatherData) => state?.weatherData?.showCityModal
  );
  const showError = useSelector(
    (state: IWeatherData) => state?.weatherData?.error?.code
  );

  setTimeout(() => {
    setLoading(false);
  }, 500);

  // initial location
  useEffect(() => {
    getUserLocation();
  }, []);

  return { location, current, loading, showCityModal, showError };
};
