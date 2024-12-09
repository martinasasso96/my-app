import { useDispatch, useSelector } from "react-redux";
import { changeErrorAction } from "@/app/store/weatherActions";
import { IWeatherData } from "@/app/store/store.models";

export const useErrorModal = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: IWeatherData) => state?.weatherData?.error);

  const closeModal = () => {
    dispatch(
      changeErrorAction({
        code: 0,
        message: "",
      })
    );
  };

  return {
    closeModal,
    error
  };
};
