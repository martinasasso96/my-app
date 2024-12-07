import { ILocation } from "../hooks";
import usePage from "../page.hook";
import { IWeatherData } from "../store/store.models";
import { useSelector } from "react-redux";

export const useView = () => {
  const { onCurrentSuccess, onForecastSuccess } = usePage();
  const days = useSelector((state: IWeatherData) => state?.weatherData?.days);

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
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return { updateAll, getUserLocation };
};
