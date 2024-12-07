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

  setTimeout(() => {
    setLoading(false);
  }, 500);

  // initial location
  useEffect(() => {
    getUserLocation();
  }, []);

  return { location, current, loading };
};
