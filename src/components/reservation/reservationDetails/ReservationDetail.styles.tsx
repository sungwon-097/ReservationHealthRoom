import styled from "styled-components";

export const ReservationListTable = styled.table`
  max-width: 100%;
  height: 200px;
  border: 1px solid black;
  overflow: hidden;
  border-radius: 4px;
`;

export const ReservationListHead = styled.thead``;

export const ReservationListHeadTr = styled.tr`
  display: block;
  border-bottom: 1px solid black;
`;

interface WidthProps {
  width: number;
}

export const ReservationListHeadTh = styled.th<WidthProps>`
  width: ${({ width }) => width + "px"};
`;

export const ReservationListBody = styled.tbody`
  display: block;
  height: 160px;
  overflow-y: auto;
  text-align: center;
  
  &::-webkit-scrollbar {
    display: none;
  }

  /* 파이어폭스용 스크롤바 숨김 */
  scrollbar-width: none;

  /* IE 및 엣지용 스크롤바 숨김 */
  -ms-overflow-style: none;
`;

export const ReservationListBodyTr = styled.tr`
  height: 40px;
  display: table;
  table-layout: fixed;
  width: 100%;
  font-size: 14px;
`;

export const ReservationListBodyTd = styled.td<WidthProps>`
  padding: 0;
  width: ${({ width }) => width + "px"};
`;
