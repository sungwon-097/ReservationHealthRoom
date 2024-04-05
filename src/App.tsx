import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/ko";
import { Header } from "./components/common/header/Header";
import { AppRoutes } from "./routes/AppRoutes";
import * as S from "./App.styles";

function App() {
  /**
   * @brief 전체 예약 내역 상태 관리(url)
   */
  const [reservationList, setReservationList] = useState([]);
  console.log("reservationList", reservationList);

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
