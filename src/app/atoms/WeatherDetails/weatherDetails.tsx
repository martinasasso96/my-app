/* eslint-disable @typescript-eslint/no-explicit-any */
import { IWeatherDetailsProps } from "./weatherDetails.models";
import * as S from "./weatherDetails.style";

export const WeatherDetails = ({ details }: IWeatherDetailsProps) => {
  const organizedDetails: any = [];
  details.forEach((d, index) => {
    organizedDetails.push(<div key={index}>{d}</div>);
    organizedDetails.push(
      <S.Divider className="solid" key={`${index}divider`} />
    );
  });
  return <S.Wrap>{organizedDetails?.map((d: string) => d)}</S.Wrap>;
};
