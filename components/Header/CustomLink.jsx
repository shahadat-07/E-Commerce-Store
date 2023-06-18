import React from "react";

const CustomLink = ({ className = "", href, text }) => {
  return (
    <li>
      <a href={href} className={`text-primary  ${className}`}>
        {text}
      </a>
    </li>
  );
};

export default CustomLink;
