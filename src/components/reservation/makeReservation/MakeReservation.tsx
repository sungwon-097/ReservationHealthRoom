import React, { useState } from "react";
import { BoxContainer } from "../../common/boxContainer/BoxContainer";
import { SelectBox } from "../../common/SelectBox";
import { healthManagerInfo } from "../../../utils/HealthManagerInfo";
import { timeInfo } from "../../../utils/TimeInfo";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../common/button/Button.styles";
import * as S from "./MakeReservation.styles";
import { parseDate } from "../../../utils/ParseDate";

//   const [params, setParams] = useState<any>({
//     helMngerCd: null,
//     useDate: null,
//     useStTime: null,
//     useEdTime: null,
//     userDiv: 1,
//     reqEmpNo: null,
//   });

export const MakeReservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [selectReservation, setSelectReservation] = useState<any>({
    managerName: "",
    helMngerCd: null,
    useDate: null,
    useStTime: null,
    useEdTime: null,
    userDiv: 1,
    // reqEmpNo: null,
  });

  console.log("셀렉트 값", selectReservation);

  const handleChangeHelMngerCd = (e: any) => {
    const { name, value } = e.target;
    const healthManager = healthManagerInfo?.findIndex(
      (e) => e.value === value
    );
    setSelectReservation((prev: any) => ({
      ...prev,
      [name]: value,
      managerName:
        healthManager !== -1 ? healthManagerInfo[healthManager].name : "",
    }));
  };

  const handleChangeUseStime = (e: any) => {
    const { value } = e.target;
    setSelectReservation((prev: any) => ({
      ...prev,
      useStTime: value.padEnd(5, ":00"),
      useEdTime: value.padEnd(5, ":50"),
    }));
  };

  const handleChangeReservationDate = (e: any) => {
    setSelectReservation((prev: any) => ({
      ...prev,
      useDate: e !== null ? parseDate(e) : null,
    }));
  };

  return (
    <BoxContainer
      title="3. 예약 선택"
      content={
        <>
          <S.SelectReservationWrapper>
            <S.SelectItemWrapper>
              <S.SelectItemTitle>관리사</S.SelectItemTitle>
              <SelectBox
                {...register("helMngerCd")}
                options={healthManagerInfo}
                name="helMngerCd"
                defaultValue={"관리사 선택"}
                onChange={handleChangeHelMngerCd}
                // onChange={handleChange}
              />
            </S.SelectItemWrapper>
            <S.DatePickerItemWrapper>
              <S.DatePickerTitle>날짜</S.DatePickerTitle>
              <Controller
                control={control}
                name="reservationDate"
                render={({ field }) => (
                  <S.CustomDatePicker
                    placeholderText="날짜 선택"
                    onChange={(date: any) => {
                      handleChangeReservationDate(date);
                      field.onChange(date);
                    }}
                    selected={field.value}
                    dateFormat="yyyyMMdd"
                  />
                )}
              />
            </S.DatePickerItemWrapper>
            <S.SelectItemWrapper>
              <S.SelectItemTitle>시간</S.SelectItemTitle>
              <SelectBox
                {...register("useStime")}
                options={timeInfo}
                name="useStTime"
                onChange={handleChangeUseStime}
                defaultValue={"시간 선택"}
              />
            </S.SelectItemWrapper>
          </S.SelectReservationWrapper>
          <Button
          // onClick={onClickLogin}
          >
            예약 목록 추가
          </Button>
        </>
      }
    />
  );
};
