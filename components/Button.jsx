import React from "react";

const Button = ({ className = "", text, type }) => {
  return (
    <button type={type || "button"} className={` ${className}`}>
      {text}
    </button>
  );
};

export default Button;
