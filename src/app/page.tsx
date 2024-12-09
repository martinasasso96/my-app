"use client";

import * as S from "./page.style";
import { store } from "./store/store";
import { Dashboard } from "./views";
import { Provider } from "react-redux";
import back from "./images/background.jpg";

const Home = () => {
  return (
    <Provider store={store}>
      <S.PageWrapper src={back?.src}>
        <Dashboard />
      </S.PageWrapper>
    </Provider>
  );
};

export default Home;
