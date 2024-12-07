/* eslint-disable @typescript-eslint/no-explicit-any */
import Humidity from "@/app/icons/Humidity/Humidity";
import { IWeatherDetailsProps } from "./weatherDetails.models";
import * as S from "./weatherDetails.style";
import Wind from "@/app/icons/Wind/Wind";
import Cloud from "@/app/icons/Cloud/Cloud";

export const WeatherDetails = ({
  humidity,
  wind,
  cloud,
}: IWeatherDetailsProps) => {
  return (
    <S.Wrap>
      <S.Param>
        <Humidity width="20px" height="20px" fill="gray" />
        <div>{humidity}%</div>
      </S.Param>
      <S.Divider className="solid" />
      <S.Param>
        <Wind width="20px" height="20px" fill="gray" />
        <div>{wind} kph</div>
      </S.Param>
      <S.Divider className="solid" />
      <S.Param>
        <Cloud width="20px" height="20px" fill="gray" />
        <div>{cloud}%</div>
      </S.Param>
    </S.Wrap>
  );
};
