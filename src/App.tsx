import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ServerTimeComponent from "./ServerTimeComponent";
import moment from "moment";
import "moment/locale/ko";
import { parseDate } from "./utils/ParseDate";
import { healthManagerInfo } from "./utils/HealthManagerInfo";
import { SelectBox } from "./components/SelectBox";
import { timeInfo } from "./utils/TimeInfo";
import { constURL } from "./utils/ConstURL";
import { AddSelected } from "./components/AddSelected";
import { fieldNames } from "./utils/FieldNames";
import { CreateEventByClock } from "./components/CreateEventByClock";
import * as S from "./App.styles";
import { ContainerItem } from "./components/common/ContainerItem";

function App() {
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

  /**
   * @brief 전체 예약 내역 상태 관리(url)
   */
  const [reservationList, setReservationList] = useState([]);

  /**
   * @brief 사번 입력 상태 관리
   */
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * @brief select 태그 상태 관리(시간)
   * @param e : EventTarget
   */
  const handleChangeTime = (e: any) => {
    const { value } = e.target;
    setParams((prevParams: any) => ({
      ...prevParams,
      useStTime: value + "00",
      useEdTime: value + "50",
    }));
  };

  /**
   * @brief DatePicker 선택 날짜 상태 관리
   */
  const [selectedDate, setSelectedDate] = useState(null);

  /**
   * @brief DatePicker 선택 날짜 상태 변경
   * @param date : Date
   */
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    setParams((prevParams: any) => ({
      ...prevParams,
      useDate: parseDate(date),
    }));
  };

  /**
   * @brief 예약 리스트 추가
   */
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
    setReservationList((prevState: any[]): any => [...prevState, url]);
  };

  /**
   * @brief 예약 -> Tims 예약 창 오픈
   */
  const summit = () => {
    for (const arg of reservationList) {
      window.open(arg, "_blank");
    }
  };

  /**
   * @brief 예약 리스트 url 파싱
   */
  function getParseList(ele: any) {
    const infos = ele.substring(55).split("&");
    const date = moment(infos[1].substring(8), "YYYYMMDD");
    return (
      date.format("YYYY년 MM월 DD일 dddd ") +
      infos[2].substring(10) +
      "~" +
      infos[3].substring(10)
    );
  }

  return (
    <>
      <S.TitleLogoImage src={"logo.jpg"} />
      <ContainerItem
        title={"1. 사전 작업"}
        content={
          <>
            <p>
              TALK 로그인 필요(10분 전 권장)
              <S.A href={constURL.timsUrl}>TALK</S.A>
            </p>
            <p>해당 페이지 팝업 허용</p>
          </>
        }
      />

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

      <ContainerItem
        title={"3. 예약 대기 리스트"}
        content={
          <>
            <S.List>
              {reservationList &&
                reservationList.map((ele, i) => {
                  return <p key={i}>{getParseList(ele)}</p>;
                })}
            </S.List>
            <S.Button onClick={summit}>건강 관리실 신청</S.Button>
          </>
        }
      />

      <ContainerItem
        title={"4. 현재 시간"}
        content={
          <>
            <ServerTimeComponent />
            <CreateEventByClock event={summit} />
          </>
        }
      />

      <ContainerItem
        title={"5. 예약 내역 보기"}
        content={
          <>
            <p>
              건강 관리실 예약 현황 확인{" "}
              <S.A href={constURL.historyUrl}>TALK</S.A>
            </p>
          </>
        }
      />
    </>
  );
}

export default App;
