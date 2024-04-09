import React from "react";
import { Header } from "./components/common/header/Header";
import { AppRoutes } from "./routes/AppRoutes";
import * as S from "./App.styles";

function App() {
  return (
    <>
      <Header />
      <S.BackgroundWrapper>
        <AppRoutes />
      </S.BackgroundWrapper>
    </>
  );
}

export default App;
