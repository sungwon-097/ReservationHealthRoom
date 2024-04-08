import create from "zustand";
import { ReservationListItemProps, ReservationState } from "../declare/type";

const useReservationStore = create<ReservationState>((set) => ({
  reservationList: [],
  addReservationList: (newItems: ReservationListItemProps[]) =>
    set((state) => ({
      reservationList: [...state.reservationList, ...newItems],
    })),
  deleteReservationItem: (itemId: any) =>
    set((state) => ({
      reservationList: state.reservationList.filter(
        (item) => item.id !== itemId
      ),
    })),
}));

export default useReservationStore;
