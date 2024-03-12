import { ReservationListProps } from "../declare/type";

export const onSubmit = (
  event: React.MouseEvent<HTMLButtonElement>,
  reservationList: string[]
) => {
  //   event.preventDefault();
  for (const arg of reservationList) {
    window.open(arg, "_blank");
  }
};
