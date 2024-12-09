import Cloudy from "../icons/Cloudy/Cloudy";
import Rainy from "../icons/Rainy/Rainy";
import Snowy from "../icons/Snowy/Snowy";
import Stormy from "../icons/Stormy/Stormy";
import Sunny from "../icons/Sunny/Sunny";
import { WEATHER_ICON_CODES } from "./Dashboard/dashboard.models";

const Icon = (iconCode: string, width?: string, height?: string) => {
  if (WEATHER_ICON_CODES?.sunny?.includes(iconCode || ""))
    return <Sunny height={height} width={width} />;
  if (WEATHER_ICON_CODES?.cloudy?.includes(iconCode || ""))
    return <Cloudy height={height} width={width} />;
  if (WEATHER_ICON_CODES?.rainy?.includes(iconCode || ""))
    return <Rainy height={height} width={width} />;
  if (WEATHER_ICON_CODES?.stormy?.includes(iconCode || ""))
    return <Stormy height={height} width={width} />;
  if (WEATHER_ICON_CODES?.snowy?.includes(iconCode || ""))
    return <Snowy height={height} width={width} />;
};

export default Icon;
