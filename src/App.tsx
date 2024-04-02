import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/ko";
import { PreWork } from "./components/PreWork";
import { MakeReservationList } from "./components/MakeReservationList";
import { Reservation } from "./components/Reservation";
import { ReservationHistory } from "./components/ReservationHistory";
import { Header } from "./components/common/Header";
// import { BoxContainer } from "./components/common/BoxContainer";
import { TimsLogin } from "./components/timsLogin/TimsLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeeNumField } from "./components/employeeNumField/EmployeeNumField";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  /**
   * @brief 전체 예약 내역 상태 관리(url)
   */
  const [reservationList, setReservationList] = useState([]);
  console.log("reservationList", reservationList);

  return (
    <>
      <Header reservationList={reservationList} />
      {/* <PreWork />
      <MakeReservationList setReservationList={setReservationList} />
      <Reservation reservationList={reservationList} />
      <ReservationHistory /> */}
      <AppRoutes/>
    </>
  );
}

export default App;
