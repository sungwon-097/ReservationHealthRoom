import React, { SetStateAction, useState } from "react";
import * as S from "../App.styles";
import { ContainerItem } from "./common/ContainerItem";
import { SelectBox } from "./common/SelectBox";
import { healthManagerInfo } from "../utils/HealthManagerInfo";
import { timeInfo } from "../utils/TimeInfo";
import { parseDate } from "../utils/ParseDate";
import { constURL } from "../utils/ConstURL";
import { fieldNames } from "../utils/FieldNames";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AddSelected } from "./common/AddSelected";

interface ReservationListProps {
  setReservationList: any;
}

export const MakeReservationList = ({
  setReservationList,
}: ReservationListProps) => {
  /**
   * @brief 단건 예약 상태 관리
   */

  const [params, setParams] = useState<any>({
    helMngerCd: null,
    useDate: null,
    useStTime: null,
    useEdTime: null,
    userDiv: 1,
    reqEmpNo: null,
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    setParams((prevParams: any) => ({
      ...prevParams,
      useDate: parseDate(date),
    }));
  };

  const handleAdd = () => {
    const missingFields = Object.keys(params).filter(
      (field) => params[field] === null
    );

    if (missingFields.length > 0) {
      const missingFieldNames = missingFields
        .map((field) => fieldNames[field as keyof typeof fieldNames])
        .join(", ");
      return window.alert(`${missingFieldNames}을(를) 입력해 주세요`);
    }

    const url = `${constURL.reservationUrl}helMngerCd=${params.helMngerCd}&useDate=${params.useDate}&useStTime=${params.useStTime}&useEdTime=${params.useEdTime}&userDiv=0001&reqEmpNo=${params.reqEmpNo}`;
    setReservationList((prevState: any[]): any =>
      !prevState.includes(url) ? [...prevState, url] : [...prevState]
    );
  };

  const handleChangeTime = (e: any) => {
    const { value } = e.target;
    setParams((prevParams: any) => ({
      ...prevParams,
      useStTime: value + "00",
      useEdTime: value + "50",
    }));
  };

  return (
    <ContainerItem
      title={"2. 예약 리스트 생성"}
      content={
        <>
          <S.Field>
            <S.Text>사번</S.Text>
            <input
              name={"reqEmpNo"}
              onChange={handleChange}
              type="text"
              placeholder="7자리 사번 입력"
              maxLength={7}
            />
          </S.Field>
          <S.Field>
            <S.Text>관리사</S.Text>
            <SelectBox
              options={healthManagerInfo}
              name="helMngerCd"
              onChange={handleChange}
            />
          </S.Field>
          <S.Field>
            <S.Text>시간</S.Text>
            <SelectBox
              options={timeInfo}
              name="useStTime"
              onChange={handleChangeTime}
            />
          </S.Field>
          <S.Field>
            <S.Text>날짜</S.Text>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyyMMdd"
              placeholderText="날짜를 선택하세요"
            />
          </S.Field>
          <AddSelected
            selectedDate={selectedDate}
            params={params}
            handleClick={handleAdd}
          />
        </>
      }
    />
  );
};
