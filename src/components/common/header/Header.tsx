import React from "react";
import * as S from "./Header.styles";
import ServerTimeComponent from "../../ServerTime";

export const Header = () => {
  return (
    <S.TitleWrapper>
      <S.TitleLogoImage src={"logo.jpg"} />
      <ServerTimeComponent />
    </S.TitleWrapper>
  );
};
