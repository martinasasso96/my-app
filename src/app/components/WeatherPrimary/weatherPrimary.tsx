import { WeatherDetails } from "@/app/atoms";
import * as S from "./weatherPrimary.style";
import useWeatherPrimary from "./weatherPrimary.hook";
import Geolocation from "../../icons/Geolocation/Geolocation";
import Dots from "@/app/icons/Dots/Dots";
import CentralModal from "../CentralModal/centralModal";

export const WeatherPrimary = () => {
  const {
    current,
    formattedDate,
    handleClick,
    location,
    handleModal,
    openModal,
    setOpenModal,
  } = useWeatherPrimary();

  return (
    <S.Wrap>
      {openModal && <CentralModal setOpenModal={setOpenModal} />}
      <div>
        <S.Header>
          {formattedDate && <S.Date>{formattedDate}</S.Date>}
          <S.IconButton onClick={handleModal}>
            <Dots width="20px" height="20px" color="white" />
          </S.IconButton>
        </S.Header>
        {location && <S.City>{location?.name}</S.City>}
        <S.Temperature>{current?.temp_c}°</S.Temperature>
        <S.GeoButton onClick={handleClick}>
          <Geolocation width="25px" height="25px" />
        </S.GeoButton>
      </div>
      <WeatherDetails
        humidity={current?.humidity}
        wind={current?.wind_kph}
        cloud={current?.cloud}
      />
    </S.Wrap>
  );
};
