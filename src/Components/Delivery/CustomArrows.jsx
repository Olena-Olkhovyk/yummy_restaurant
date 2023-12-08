import React from "react";

export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50px",
        right: "-1rem",
        background: "#8c9f3f",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        cursor: "pointer",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
      onClick={onClick}
    />
  );
};

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50px",
        left: "-3rem",
        background: "#8c9f3f",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        cursor: "pointer",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
      onClick={onClick}
    />
  );
};
