import React from "react";
import * as S from "../App.styles";
import ServerTimeComponent from "./ServerTime";
import { CreateEventByClock } from "./common/CreateEventByClock";
import { onSubmit } from "../utils/onSubmit";
import { ReservationListProps } from "../declare/type";

export const Header = ({ reservationList }: ReservationListProps) => {
  return (
    <S.TitleWrapper>
      <S.TitleLogoImage src={"logo.jpg"} />
      <ServerTimeComponent />
      <CreateEventByClock
        event={(event: React.MouseEvent<HTMLButtonElement>) =>
          onSubmit(event, reservationList)
        }
      />
    </S.TitleWrapper>
  );
};
