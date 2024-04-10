import React from "react";
import { Select, SelectErrorProps } from "./SelectBox.styles";

interface SelectProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { name: string; value: string | null }[];
  defaultValue?: string | number | readonly string[] | undefined;
}

export const SelectBox = React.forwardRef<
  HTMLSelectElement,
  SelectProps & SelectErrorProps
>(
  (
    { name, onChange, options, error }: SelectProps & SelectErrorProps,
    ref: React.Ref<HTMLSelectElement>
  ) => {
    return (
      <Select
        ref={ref}
        name={name}
        onChange={onChange}
        defaultValue={options[0]?.value ?? ""}
        error={error}
      >
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select>
    );
  }
);
