import React from "react";
import * as S from "./BoxContainer.styles";

interface BoxConatainerProps {
  title?: string;
  content?: JSX.Element;
}

export const BoxContainer = ({ title, content }: BoxConatainerProps) => {
  return (
    <S.BoxContainer>
      <S.BoxContainerTitle>{title}</S.BoxContainerTitle>
      {content}
    </S.BoxContainer>
  );
};
