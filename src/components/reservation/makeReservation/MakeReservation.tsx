import React from "react";
import { BoxContainer } from "../../common/BoxContainer";
import { SelectBox } from "../../common/SelectBox";
import { healthManagerInfo } from "../../../utils/HealthManagerInfo";
import { timeInfo } from "../../../utils/TimeInfo";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styled from "styled-components";

const CustomDatePicker = styled(DatePicker)`
  padding: 0;
  width: 298.19px;
  height: 38.19px;
  text-align: center;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid gray;
  font-weight: 500;
`;

export const MakeReservation = () => {
  return (
    <BoxContainer
      title="3. 예약 목록 선택"
      content={
        <>
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ width: "60px", textAlign: "center" }}>관리사</span>
              <SelectBox
                options={healthManagerInfo}
                name="helMngerCd"
                // onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ width: "60px", textAlign: "center" }}>시간</span>
              <SelectBox
                options={timeInfo}
                name="useStTime"
                // onChange={handleChangeTime}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  width: "60px",
                  textAlign: "center",
                  marginRight: "10px",
                }}
              >
                날짜
              </span>
              <CustomDatePicker
                // selected={selectedDate}
                // onChange={handleDateChange}
                dateFormat="yyyyMMdd"
                placeholderText="날짜 선택"
              />
            </div>
          </div>
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
            // onClick={onClickLogin}
          >
            예약 목록 추가
          </button>
        </>
      }
    />
  );
};
