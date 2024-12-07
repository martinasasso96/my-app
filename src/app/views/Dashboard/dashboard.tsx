import { Days, WeatherPrimary } from "@/app/components";
import { useDashboard } from "./dashboard.hook";
import weatherLoading from "../../images/weatherLoading.gif";
import * as S from "./dashboard.style";

export const Dashboard = () => {
  const { location, loading } = useDashboard();
  return (
    <>
      {!loading &&
        (location?.name === "loading" ? (
          <S.PageLoader>
            <img src={weatherLoading?.src?.toString()} alt="LOADING..." />
          </S.PageLoader>
        ) : (
          <S.Top>
            <WeatherPrimary />
            <Days />
          </S.Top>
        ))}
    </>
  );
};
