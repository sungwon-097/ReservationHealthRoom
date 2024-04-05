import styled from "styled-components";
import { Button } from "./button/Button.styles";
import React from "react";

export const List = styled.div`
  padding: 1rem;
  justify-content: center;
`;

export const AddSelected = (props: any) => {
  return (
    <>
      {props.selectedDate && (
        <>
          <List>
            {props.selectedDate.toLocaleDateString("ko-KR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            {props.params.useStTime}~{props.params.useEdTime}
          </List>
          <Button onClick={props.handleClick}>예약 리스트 추가</Button>
        </>
      )}
    </>
  );
};
