import { WEATHER_ICON_CODES } from "@/app/views/Dashboard/dashboard.models";
import { ISingleDayProps } from "./singleDay.models";
import * as S from "./singleDay.style";
import Sunny from "@/app/icons/Sunny/Sunny";
import Cloudy from "@/app/icons/Cloudy/Cloudy";
import Rainy from "@/app/icons/Rainy/Rainy";
import Stormy from "@/app/icons/Stormy/Stormy";
import Snowy from "@/app/icons/Snowy/Snowy";
import { IWeatherData } from "@/app/store/store.models";
import { useSelector } from "react-redux";

const SingleDay = ({
  weekDay,
  day,
  month,
  iconCode,
  temp_max,
  temp_min,
}: ISingleDayProps) => {
  const days = useSelector((state: IWeatherData) => state?.weatherData?.days);

  const icon = () => {
    if (WEATHER_ICON_CODES?.sunny?.includes(iconCode || "")) return <Sunny />;
    if (WEATHER_ICON_CODES?.cloudy?.includes(iconCode || "")) return <Cloudy />;
    if (WEATHER_ICON_CODES?.rainy?.includes(iconCode || "")) return <Rainy />;
    if (WEATHER_ICON_CODES?.stormy?.includes(iconCode || "")) return <Stormy />;
    if (WEATHER_ICON_CODES?.snowy?.includes(iconCode || "")) return <Snowy />;
  };

  return (
    <S.Wrap>
      <S.WeekDay>{weekDay}</S.WeekDay>
      <S.Day>
        {day} {month}
      </S.Day>
      <S.IconWrap>{icon()}</S.IconWrap>
      <S.TempWrap $iscolumn={days !== 3}>
        <S.Temp>{temp_min}°</S.Temp>
        <S.TempSpace $iscolumn={days !== 3}> - </S.TempSpace>
        <S.Temp>{temp_max}°</S.Temp>
      </S.TempWrap>
    </S.Wrap>
  );
};

export default SingleDay;
