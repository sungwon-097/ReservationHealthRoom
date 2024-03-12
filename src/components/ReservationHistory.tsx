import React from "react";
import { ContainerItem } from "./common/ContainerItem";
import { constURL } from "../utils/ConstURL";
import * as S from "../App.styles";

export const ReservationHistory = () => {
  return (
    <ContainerItem
      title={"4. 예약 내역 보기"}
      content={<S.A href={constURL.historyUrl}>건강 관리실 예약 현황 확인</S.A>}
    />
  );
};
