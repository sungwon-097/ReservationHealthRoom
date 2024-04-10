import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FieldError } from "react-hook-form";

interface SelectErrorProps {
  error?: FieldError | undefined;
}

export const CustomDatePicker = styled(DatePicker)<SelectErrorProps>`
  padding: 0;
  width: 298.19px;
  height: 38.19px;
  text-align: center;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid ${({ error }) => (error ? "red" : "black")};
  font-weight: 500;
`;

export const SelectReservationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SelectReservationWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DatePickerItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectItemWrapper = styled(DatePickerItemWrapper)`
  gap: 10px;
`;

export const SelectItemTitle = styled.span`
  width: 60px;
  text-align: center;
`;

export const DatePickerTitle = styled(SelectItemTitle)`
  margin-right: 10px;
`;
