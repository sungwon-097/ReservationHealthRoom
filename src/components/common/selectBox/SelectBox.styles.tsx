import styled from "styled-components";
import { FieldError } from "react-hook-form";

export interface SelectErrorProps {
  error?: FieldError | undefined;
}

export const Select = styled.select<SelectErrorProps>`
  width: 300px;
  height: 40px;
  text-align: center;
  border-radius: 10px;
  font-size: 16px;
  border-color: ${({ error }) => (error ? "red" : "black")};
`;
