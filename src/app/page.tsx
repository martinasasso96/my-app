"use client";

import { WeatherPrimary } from "./components";
import usePage from "./page.hook";
import * as S from "./page.style";

const Home = () => {
  const { handleClick } = usePage();

  return (
    <S.PageWrapper>
      <WeatherPrimary />
      <button onClick={handleClick}>CLICK ME</button>
    </S.PageWrapper>
  );
};

export default Home;
