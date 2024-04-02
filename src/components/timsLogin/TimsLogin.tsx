import React from "react";
import { BoxContainer } from "../common/BoxContainer";
import { constURL } from "../../utils/ConstURL";
import { useNavigate } from "react-router-dom";

export const TimsLogin = () => {

  const navigate = useNavigate();

  const onClickLogin = () => {
    window.open(constURL.timsUrl, '_blank');
    navigate("/employee-auth");
  }

  return (
    <BoxContainer
      title="1. Tims 로그인"
      content={
        <>
          <button
            style={{
              width: "300px",
              height: "50px",
              borderRadius: "5px",
              marginTop: "40px",
              backgroundColor: "#666666",
              color: "white",
              fontFamily: "Noto Sans KR",
              fontSize: "16px",
              fontWeight: "700",
            }}
            onClick={onClickLogin}
          >
            Tims 로그인
          </button>
          <div style={{ width: "100%", marginTop: "40px" }}>
            <h2 style={{ color: "red", textAlign: "center" }}>*주의사항*</h2>
            <p style={{ paddingLeft: "120px" }}>
              1. 예약 <span style={{ color: "red" }}>10분전</span> 로그인 권장
            </p>
            <p style={{ paddingLeft: "120px" }}>2. 해당 페이지 팝업 허용</p>
            <p style={{ paddingLeft: "120px" }}>3. 본인 사원번호 기억하기</p>
          </div>
        </>
      }
    />
  );
};
