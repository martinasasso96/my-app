import { WeatherDetails } from "@/app/atoms";
import * as S from "./weatherPrimary.style";
import useWeatherPrimary from "./weatherPrimary.hook";
import Geolocation from "../../icons/Geolocation/Geolocation";

export const WeatherPrimary = () => {
  const { formattedDate, handleClick, location } = useWeatherPrimary();

  return (
    <S.Wrap>
      <div>
        <S.Header>
          {formattedDate && <S.Date>{formattedDate}</S.Date>}
          <S.IconButton onClick={handleClick}>
            <Geolocation width="20px" height="20px" />
          </S.IconButton>
        </S.Header>
        {location && <S.City>{location?.name}</S.City>}
        <S.Temperature>34°</S.Temperature>
      </div>
      <WeatherDetails details={["a", "b", "c"]} />
    </S.Wrap>
  );
};
