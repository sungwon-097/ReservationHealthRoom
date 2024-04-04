import React, { useState } from "react";
import { MakeReservation } from "./makeReservation/MakeReservation";
import { ReservationDetails } from "./reservationDetails/ReservationDetails";

function Reservation() {

  const [params, setParams] = useState<any>({
    helMngerCd: null,
    useDate: null,
    useStTime: null,
    useEdTime: null,
    userDiv: 1,
    reqEmpNo: null,
  });

  return (
    <div style={{display: "flex", flexDirection:"row", gap:"50px"}}>
      <MakeReservation />
      <ReservationDetails />
    </div>
  );
}

export default Reservation;
