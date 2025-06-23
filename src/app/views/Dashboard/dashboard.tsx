/*import { Days, WeatherPrimary } from "@/app/components";
import { useDashboard } from "./dashboard.hook";
import weatherLoading from "../../images/weatherLoading.gif";
import * as S from "./dashboard.style";
import Favourites from "@/app/components/Favourites/favourites";
import SelectCity from "@/app/components/SelectCity/selectCity";
import ErrorModal from "@/app/components/ErrorModal/errorModal"; */
import RegistrationForm from "@/app/components/RegistrationForm/registrationForm";
import ThemeProvider from "@/app/components/ThemeProvider/themeProvider";
import TodoList from "@/app/components/Todo/todo";

export const Dashboard = () => {
  // const { location, loading, showCityModal, showError } = useDashboard();
  return (
    <>
      <TodoList />

      <ThemeProvider> HELLO </ThemeProvider>

      <RegistrationForm/>
    </>
  );
};

/**
 * <>
      {!loading &&
        (location?.name === "loading" ? (
          <S.PageLoader>
            <img src={weatherLoading?.src?.toString()} alt="LOADING..." />
          </S.PageLoader>
        ) : (
          <>
            {showCityModal?.state && <SelectCity type={showCityModal?.type} />}
            {showError !== 0 && <ErrorModal />}
            <S.Top>
              <WeatherPrimary />
              <Days />
            </S.Top>
            <S.Bottom>
              <Favourites />
            </S.Bottom>
          </>
        ))}
    </>
 */
