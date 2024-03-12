import React, { useState } from "react";
import { ContainerItem } from "./common/ContainerItem";
import moment from "moment";
import * as S from "../App.styles";
import { onSubmit } from "../utils/onSubmit";

interface ReservationListProps {
  reservationList: string[];
}

export const Reservation = ({ reservationList }: ReservationListProps) => {
  /**
   * @brief 예약 리스트 url 파싱
   */
  function getParseList(ele: any) {
    const infos = ele.substring(55).split("&");
    const date = moment(infos[1].substring(8), "YYYYMMDD");
    return (
      date.format("YYYY년 MM월 DD일 dddd ") +
      infos[2].substring(10) +
      "~" +
      infos[3].substring(10)
    );
  }

  return (
    <ContainerItem
      title={"3. 예약 대기 리스트"}
      content={
        <>
          <S.List>
            {reservationList &&
              reservationList.map((ele, i) => {
                return <p key={i}>{getParseList(ele)}</p>;
              })}
          </S.List>
          <S.Button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              onSubmit(event, reservationList)
            }
          >
            건강 관리실 신청
          </S.Button>
        </>
      }
    />
  );
};
