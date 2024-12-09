import { formatDate } from "../components.utils";
import { useDispatch, useSelector } from "react-redux";
import { IWeatherData } from "@/app/store/store.models";
import { useView } from "@/app/views/views.hook";
import { changeShowCityModalAction } from "@/app/store/weatherActions";
import { SELECT_CITY_TYPE } from "../SelectCity/selectCity.models";

const useWeatherPrimary = () => {
  const { getUserLocation } = useView();
  const dispatch = useDispatch();

  const today = new Date();
  const formattedDate: string = formatDate(today);

  const location = useSelector(
    (state: IWeatherData) => state?.weatherData?.location
  );
  const current = useSelector(
    (state: IWeatherData) => state?.weatherData?.current
  );

  // on click location
  const handleClick = () => {
    getUserLocation();
  };

  const handleModal = () => {
    dispatch(
      changeShowCityModalAction({
        state: true,
        type: SELECT_CITY_TYPE.CURRENT,
      })
    );
  };

  return {
    current,
    formattedDate,
    handleClick,
    location,
    handleModal,
  };
};

export default useWeatherPrimary;
