import React from "react";
import * as S from "./Header.styles";
import ServerTime from "../serverTime/ServerTime";
import { LogoSvg } from "../../../assets/image/LogoSvg";

export const Header = () => {
  return (
    <S.TitleWrapper>
      <LogoSvg />
      <ServerTime />
    </S.TitleWrapper>
  );
};
