import usePage from "@/app/page.hook";
import { IWeatherData } from "@/app/store/store.models";
import { changeDaysAction } from "@/app/store/weatherActions";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useModalDays = (
  setOpenModal: Dispatch<SetStateAction<boolean>>
) => {
  const days = useSelector((state: IWeatherData) => state?.weatherData?.days);
  const location = useSelector(
    (state: IWeatherData) => state?.weatherData?.location
  );
  const dispatch = useDispatch();
  const { onForecastSuccess } = usePage();

  const handleClick = (n: number) => {
    dispatch(changeDaysAction(n));
    onForecastSuccess(`${location?.lat},${location?.lon}` || "", n);
    setOpenModal(false);
  };

  return { handleClick, days };
};
