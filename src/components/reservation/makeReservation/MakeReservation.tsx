import React, { useState } from "react";
import { BoxContainer } from "../../common/boxContainer/BoxContainer";
import { SelectBox } from "../../common/selectBox/SelectBox";
import { healthManagerInfo } from "../../../utils/HealthManagerInfo";
import { timeInfo } from "../../../utils/TimeInfo";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../common/button/Button.styles";
import * as S from "./MakeReservation.styles";
import { parseDate } from "../../../utils/ParseDate";
import useReservationStore from "../../../store/stroe";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ReservationListItemProps } from "../../../declare/type";

export const MakeReservation = () => {
  const { userId } = useParams();
  const { reservationList, addReservationList } = useReservationStore();
  const [managerName, setManagerName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      helMngerCd: "관리사 선택",
      useStime: "시간 선택",
      reservationDate: null,
    },
  });

  const onAddReserveList = (formData: any) => {
    const reserveItem = {
      id: uuidv4(),
      managerName: managerName,
      helMngerCd: formData?.helMngerCd,
      useDate: parseDate(formData?.reservationDate),
      useStTime: formData?.useStime.padEnd(5, ":00"),
      useEdTime: formData?.useStime.padEnd(5, ":50"),
      userDiv: 1,
      reqEmpNo: userId,
    };

    const exists = reservationList.some(
      (item: ReservationListItemProps) =>
        item.managerName === reserveItem.managerName &&
        item.helMngerCd === reserveItem.helMngerCd &&
        item.useDate === reserveItem.useDate &&
        item.useStTime === reserveItem.useStTime &&
        item.useEdTime === reserveItem.useEdTime &&
        item.userDiv === reserveItem.userDiv &&
        item.reqEmpNo === reserveItem.reqEmpNo
    );

    if (!exists) addReservationList([reserveItem]);
    reset();
  };

  const handleChangeHelMngerCd = (e: any) => {
    const { name, value } = e.target;
    const healthManager = healthManagerInfo?.findIndex(
      (e) => e.value === value
    );

    setValue(name, value, { shouldValidate: true });
    setManagerName(
      healthManager !== -1 && value !== "관리사 선택"
        ? healthManagerInfo[healthManager].name
        : null
    );
  };

  const handleChangeUseStime = (e: any) => {
    const { value } = e.target;
    setValue("useStime", value, { shouldValidate: true });
  };

  const handleChangeReservationDate = (e: any) => {
    setValue("reservationDate", e, { shouldValidate: true });
  };

  return (
    <BoxContainer
      title="3. 예약 선택"
      content={
        <S.SelectReservationForm onSubmit={handleSubmit(onAddReserveList)}>
          <S.SelectReservationWrapper>
            <S.SelectItemWrapper>
              <S.SelectItemTitle>관리사</S.SelectItemTitle>
              <SelectBox
                {...register("helMngerCd", {
                  validate: (value) =>
                    value !== "관리사 선택" || "관리사를 선택해주세요.",
                })}
                options={healthManagerInfo}
                name="helMngerCd"
                onChange={handleChangeHelMngerCd}
                error={errors.helMngerCd}
              />
            </S.SelectItemWrapper>
            <S.DatePickerItemWrapper>
              <S.DatePickerTitle>날짜</S.DatePickerTitle>
              <Controller
                control={control}
                name="reservationDate"
                rules={{
                  validate: (value) => value || "날짜를 선택해주세요.",
                }}
                render={({ field }) => (
                  <S.CustomDatePicker
                    placeholderText="날짜 선택"
                    onChange={(date: Date) => {
                      handleChangeReservationDate(date);
                      field.onChange(date);
                    }}
                    selected={field.value}
                    dateFormat="yyyy-MM-dd"
                    error={errors?.reservationDate}
                  />
                )}
              />
            </S.DatePickerItemWrapper>
            <S.SelectItemWrapper>
              <S.SelectItemTitle>시간</S.SelectItemTitle>
              <SelectBox
                {...register("useStime", {
                  validate: (value) =>
                    value !== "시간 선택" || "시간을 선택해주세요.",
                })}
                options={timeInfo}
                name="useStTime"
                onChange={handleChangeUseStime}
                error={errors?.useStime}
              />
            </S.SelectItemWrapper>
          </S.SelectReservationWrapper>
          <Button type="submit">예약 목록 추가</Button>
        </S.SelectReservationForm>
      }
    />
  );
};
