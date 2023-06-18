import React from "react";

const DropDownLink = ({ href, text }) => {
  return (
    <li>
      <a href={href} className="block px-4 py-2 transition-colors duration-300">
        {text}
      </a>
    </li>
  );
};

export default DropDownLink;
