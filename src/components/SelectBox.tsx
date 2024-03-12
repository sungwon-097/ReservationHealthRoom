import React from "react";

export const SelectBox = (props: any) => {
  return (
    <select
      name={props?.name}
      onChange={props?.onChange}
      defaultValue={props?.options[0]}
      style={{ width: "10.6rem" }}
    >
      {props.options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
