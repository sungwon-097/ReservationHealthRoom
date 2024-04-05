import React from "react";
import { BoxContainer } from "../common/boxContainer/BoxContainer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/button/Button.styles";
import * as S from "./EmployeeNumField.styles";

export const EmployeeNumField = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const filteredValue = value.replace(/[^0-9]/g, "");
    e.target.value = filteredValue;
  };

  const onEmpSubmit = (data: any) => {
    // console.log(data);
    navigate(`/reservation/${data.employeeNumber}`);
  };

  return (
    <BoxContainer
      title="2. 사원번호 입력"
      content={
        <S.EmpNumForm onSubmit={handleSubmit(onEmpSubmit)}>
          <S.EmpNumInput
            {...register("employeeNumber", {
              required: "사원번호를 입력해주세요.",
              minLength: {
                value: 7,
                message: "사원번호는 7자리가 입력 되어야합니다.",
              },
              maxLength: {
                value: 7,
                message: "사원번호는 최대 7자리까지 입력 가능합니다.",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "숫자만 입력해주세요.",
              },
            })}
            onChange={handleInputChange}
            placeholder="사원 번호 입력"
          />
          {errors.employeeNumber ? (
            <S.ErrorMessage>
              {errors.employeeNumber?.message?.toString()}
            </S.ErrorMessage>
          ) : (
            <S.EmptyDiv />
          )}
          <Button type="submit">다음 페이지</Button>
        </S.EmpNumForm>
      }
    />
  );
};
