import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const CustomDatePicker = styled(DatePicker)`
  padding: 0;
  width: 298.19px;
  height: 38.19px;
  text-align: center;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid gray;
  font-weight: 500;
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
