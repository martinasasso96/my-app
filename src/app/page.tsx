"use client";

import * as S from "./page.style";
import { store } from "./store/store";
import { Dashboard } from "./views";
import { Provider } from "react-redux";
import background from './images/background.jpg';

const Home = () => {
  console.log("XX BAKC = ",background);
  return (
    <Provider store={store}>
      <S.PageWrapper>
        <Dashboard />
      </S.PageWrapper>
    </Provider>
  );
};

export default Home;
