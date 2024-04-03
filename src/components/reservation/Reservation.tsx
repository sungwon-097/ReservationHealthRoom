import React from "react";
import { MakeReservation } from "./makeReservation/MakeReservation";
import { ReservationDetails } from "./reservationDetails/ReservationDetails";

function Reservation() {
  return (
    <div>
      <MakeReservation />
      <ReservationDetails />
    </div>
  );
}

export default Reservation;
