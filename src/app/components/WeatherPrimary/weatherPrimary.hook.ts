import { formatDate } from "../components.utils";
import { useSelector } from "react-redux";
import { IWeatherData } from "@/app/store/store.models";
import usePage from "@/app/page.hook";
import { useState } from "react";
import { useView } from "@/app/views/views.hook";

const useWeatherPrimary = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { getUserLocation } = useView();

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
    setOpenModal(true);
  };

  return {
    current,
    formattedDate,
    handleClick,
    location,
    handleModal,
    openModal,
    setOpenModal,
  };
};

export default useWeatherPrimary;
