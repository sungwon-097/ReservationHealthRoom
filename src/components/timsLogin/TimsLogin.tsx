import React from "react";
import { BoxContainer } from "../common/boxContainer/BoxContainer";
import { constURL } from "../../utils/ConstURL";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/button/Button.styles";
import * as S from "./TimsLogin.styles";

export const TimsLogin = () => {
  const navigate = useNavigate();

  const onClickLogin = () => {
    window.open(constURL.timsUrl, "_blank");
    navigate("/employee-auth");
  };

  return (
    <BoxContainer
      title="1. Tims 로그인"
      content={
        <>
          <Button onClick={onClickLogin}>Tims 로그인</Button>
          <S.CautionWrapper>
            <S.CautionTitle>*주의사항*</S.CautionTitle>
            <S.CautionContent>
              1. 예약 <S.Emphasis>10분전</S.Emphasis> 로그인 권장
            </S.CautionContent>
            <S.CautionContent>2. 해당 페이지 팝업 허용</S.CautionContent>
            <S.CautionContent>3. 본인 사원번호 기억하기</S.CautionContent>
          </S.CautionWrapper>
        </>
      }
    />
  );
};
