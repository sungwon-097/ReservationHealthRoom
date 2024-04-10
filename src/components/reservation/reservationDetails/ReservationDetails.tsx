import React from "react";
import { BoxContainer } from "../../common/boxContainer/BoxContainer";
import { Button } from "../../common/button/Button.styles";
import * as S from "./ReservationDetail.styles";
import useReservationStore from "../../../store/stroe";
import { constURL } from "../../../utils/ConstURL";
import { onSubmit } from "../../../utils/onSubmit";
import { ReservationListItemProps } from "../../../declare/type";

export const ReservationDetails = () => {
  const { reservationList, deleteReservationItem } = useReservationStore();

  const handleDeleteItem = (id: any) => {
    deleteReservationItem(id);
  };

  const handleRegistHealthCare = () => {
    const registLink = reservationList.map(
      (e: ReservationListItemProps) =>
        `${constURL.reservationUrl}helMngerCd=${
          e.helMngerCd
        }&useDate=${e.useDate?.split("-").join("")}&useStTime=${e.useStTime
          ?.split(":")
          .join("")}&useEdTime=${e.useEdTime
          ?.split(":")
          .join("")}&userDiv=0001&reqEmpNo=${e.reqEmpNo}`
    );
    if (registLink.length > 0) onSubmit(registLink);
  };

  return (
    <BoxContainer
      title="4. 예약 목록 및 등록"
      content={
        <>
          <S.ReservationListTable>
            <S.ReservationListHead>
              <S.ReservationListHeadTr>
                <S.ReservationListHeadTh width={30}>#</S.ReservationListHeadTh>
                <S.ReservationListHeadTh width={140}>
                  관리사(장소)
                </S.ReservationListHeadTh>
                <S.ReservationListHeadTh width={120}>
                  시간
                </S.ReservationListHeadTh>
                <S.ReservationListHeadTh width={110}>
                  날짜
                </S.ReservationListHeadTh>
                <S.ReservationListHeadTh width={60}>
                  삭제
                </S.ReservationListHeadTh>
              </S.ReservationListHeadTr>
            </S.ReservationListHead>
            <S.ReservationListBody>
              {reservationList.map((row, index) => (
                <S.ReservationListBodyTr key={index}>
                  <S.ReservationListBodyTd width={30}>
                    {index + 1 + "."}
                  </S.ReservationListBodyTd>
                  <S.ReservationListBodyTd width={140}>
                    {row.managerName?.slice(3)}
                  </S.ReservationListBodyTd>
                  <S.ReservationListBodyTd width={120}>
                    {`${row.useStTime} ~ ${row.useEdTime}`}
                  </S.ReservationListBodyTd>
                  <S.ReservationListBodyTd width={110}>
                    {row.useDate}
                  </S.ReservationListBodyTd>
                  <S.ReservationListBodyTd width={60}>
                    <button onClick={() => handleDeleteItem(row.id)}>
                      취소
                    </button>
                  </S.ReservationListBodyTd>
                </S.ReservationListBodyTr>
              ))}
            </S.ReservationListBody>
          </S.ReservationListTable>
          <Button onClick={handleRegistHealthCare}>예약 등록</Button>
        </>
      }
    />
  );
};
