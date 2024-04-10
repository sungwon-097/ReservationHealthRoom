import React from "react";
import { MakeReservation } from "./makeReservation/MakeReservation";
import { ReservationDetails } from "./reservationDetails/ReservationDetails";
import { ReservationWrapper } from "./Rservation.styles";

function Reservation() {
  return (
    <ReservationWrapper>
      <MakeReservation />
      <ReservationDetails />
    </ReservationWrapper>
  );
}

export default Reservation;
