import React from "react";
import * as S from "../../App.styles";
import ServerTimeComponent from "../ServerTime";
import { ReservationListProps } from "../../declare/type";

export const Header = ({ reservationList }: ReservationListProps) => {
  return (
    <S.TitleWrapper>
      <S.TitleLogoImage src={"logo.jpg"} />
      <ServerTimeComponent />
    </S.TitleWrapper>
  );
};
