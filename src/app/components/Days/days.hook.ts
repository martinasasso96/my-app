import usePage from "@/app/page.hook";
import { IWeatherData } from "@/app/store/store.models";
import { useState } from "react";
import { useSelector } from "react-redux";

const useDays = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const days = useSelector((state: IWeatherData) => state?.weatherData?.days);
  const location = useSelector(
    (state: IWeatherData) => state?.weatherData?.location
  );
  const forecast = useSelector(
    (state: IWeatherData) => state?.weatherData?.forecast
  );
  const { onForecastSuccess } = usePage();

  const handleClick = () => {
    onForecastSuccess(location?.name || "", days);
    setOpenModal(true);
  };

  const date = new Date(forecast?.forecastday?.[0]?.date || "");

  return { handleClick, days, forecast, openModal, setOpenModal, date };
};

export default useDays;
