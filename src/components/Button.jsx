import React from "react";

export const Button = ({ text, customBorder }) => {
  const namee = "samad";
  return (
    <>
      <button
        style={{
          backgroundColor: "darkblue",
          padding: "10px 20px",
          cursor: "pointer",
          color: "white",
          borderRadius: customBorder,
        }}
      >
        {text}
      </button>
    </>
  );
};
