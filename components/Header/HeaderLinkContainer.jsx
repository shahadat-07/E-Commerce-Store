import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const HeaderLinkContainer = ({ text, children }) => {
  return (
    <li className="relative group">
      <a href="#" className="text-primary flex items-center">
        {text}
        <HiOutlineChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 transform group-hover:rotate-180" />
      </a>
      <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-gray-700 py-2 rounded-md shadow-lg">
        {children}
      </ul>
    </li>
  );
};

export default HeaderLinkContainer;
