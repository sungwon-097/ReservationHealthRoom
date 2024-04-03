import React from "react";
import { BoxContainer } from "../common/BoxContainer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const EmployeeNumField = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const filteredValue = value.replace(/[^0-9]/g, '');
    e.target.value = filteredValue;
  };

  const onEmpSubmit = (data: any) => {
    // console.log(data);
    navigate(`/reservation/${data.employeeNumber}`)
  };

  return (
    <BoxContainer
      title="2. 사원번호 입력"
      content={
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleSubmit(onEmpSubmit)}
        >
          <input
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
            style={{
              width: "300px",
              height: "35px",
              borderRadius: "10px",
              marginTop: "100px",
              backgroundColor: "#e8f0fe",
              padding: "0px 0px 0px 4px",
            }}
            onChange={handleInputChange}
            placeholder="사원 번호 입력"
          />
          {errors.employeeNumber ? (
            <p style={{ color: "red" }}>
              {errors.employeeNumber?.message?.toString()}
            </p>
          ) : (
            <div style={{height:"21px", margin:"16px 0px"}}/>
          )}
          <button
            type="submit"
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
          >
            다음 페이지
          </button>
        </form>
      }
    />
  );
};
