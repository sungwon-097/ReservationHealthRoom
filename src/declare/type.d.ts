import { v4 as uuidv4 } from "uuid";

export interface ReservationListItemProps {
  id: uuidv4; // 아이디
  managerName: string | null; // 이름
  helMngerCd: string | null; // 관리사 고유번호(필수)
  useDate: string | null; // 날짜(필수) ex)20231112
  useStTime: string | null; //시작 시간(필수) ex)1200
  useEdTime: string | null; //끝나는 시간(필수) ex)1250
  userDiv: number | null; // 자기 자신, 부모 번호(필수) 기본값으로 설정
  reqEmpNo?: string; // 사원번호(필수)
}

export interface ReservationListProps {
  reservationList: ReservationListItemProps[];
}

export interface ReservationState {
  reservationList: ReservationListItemProps[]; // 예약 목록 배열
  addReservationList: (newReservationList: ReservationListItemProps[]) => void;
  deleteReservationItem: (itemId: string) => void;
}
