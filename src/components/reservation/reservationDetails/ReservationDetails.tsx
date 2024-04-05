import React from "react";
import { BoxContainer } from "../../common/boxContainer/BoxContainer";
import { Button } from "../../common/button/Button.styles";
import * as S from "./ReservationDetail.styles";

export const ReservationDetails = () => {
  const tableData = [
    {
      manager: "홍길동",
      time: "14:00 - 15:00",
      date: "2022-04-01",
    },
    {
      manager: "홍길동",
      time: "14:00 - 15:00",
      date: "2022-04-01",
    },
    {
      manager: "홍길동",
      time: "14:00 - 15:00",
      date: "2022-04-01",
    },
    {
      manager: "홍길동",
      time: "14:00 - 15:00",
      date: "2022-04-01",
    },
    {
      manager: "홍길동",
      time: "14:00 - 15:00",
      date: "2022-04-01",
    },
    {
      manager: "홍길동",
      time: "14:00 - 15:00",
      date: "2022-04-01",
    },
    {
      manager: "홍길동",
      time: "14:00 - 15:00",
      date: "2022-04-01",
    },
    {
      manager: "홍길동",
      time: "14:00 - 15:00",
      date: "2022-04-01",
    },
  ];

  return (
    <BoxContainer
      title="4. 예약 목록 및 등록"
      content={
        <>
          <S.ReservationListTable>
            <S.ReservationListHead>
              <S.ReservationListHeadTr>
                <S.ReservationListHeadTh width={30}>#</S.ReservationListHeadTh>
                <S.ReservationListHeadTh width={90}>
                  관리사
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
              {tableData.map((row, index) => (
                <S.ReservationListBodyTr key={index}>
                  <S.ReservationListBodyTd width={30}>
                    {index + 1 + "."}
                  </S.ReservationListBodyTd>
                  <S.ReservationListBodyTd width={90}>
                    {row.manager}
                  </S.ReservationListBodyTd>
                  <S.ReservationListBodyTd width={120}>
                    {row.time}
                  </S.ReservationListBodyTd>
                  <S.ReservationListBodyTd width={110}>
                    {row.date}
                  </S.ReservationListBodyTd>
                  <S.ReservationListBodyTd width={60}>
                    <button>취소</button>
                  </S.ReservationListBodyTd>
                </S.ReservationListBodyTr>
              ))}
            </S.ReservationListBody>
          </S.ReservationListTable>
          <Button
          // onClick={onClickLogin}
          >
            예약 등록
          </Button>
        </>
      }
    />
  );
};
