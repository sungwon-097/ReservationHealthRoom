import React from "react";
import * as S from "../../App.styles";

interface ContainerItemsProps {
  title: string;
  content?: React.ReactNode;
}

export const ContainerItem = ({ title, content }: ContainerItemsProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {content}
    </S.Container>
  );
};
