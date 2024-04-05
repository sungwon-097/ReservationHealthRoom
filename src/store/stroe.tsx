import create from "zustand";
import { persist } from "zustand/middleware";

const useReservationStore = create((set) => ({
  empNum: "",
  reservationList: [],
  setEmpNum: (newEmpNum: string) => set((state: string) => newEmpNum),
  setReservationList: (newParams: any) =>
    set((state: any) => ({ params: { ...state.params, ...newParams } })),
}));

export default useReservationStore;
