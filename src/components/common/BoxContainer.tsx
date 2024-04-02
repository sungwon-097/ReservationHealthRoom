import React from "react";

interface BoxConatainerProps {
  title?: string;
  content?: JSX.Element;
}

export const BoxContainer = ({ title, content }: BoxConatainerProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 59px)",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "450px",
          height: "450px",
          border: "3px solid #d5d5d5",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{title}</h1>
        {content}
      </div>
    </div>
  );
};
