import React from "react";

export const SelectBox = (props: any) => {
  return (
    <select
      name={props?.name}
      onChange={props?.onChange}
      defaultValue={props?.options[0]}
      style={{ width: "300px", height:"40px", textAlign:"center",borderRadius:"10px",fontSize:"16px" }}
    >
      {props.options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
