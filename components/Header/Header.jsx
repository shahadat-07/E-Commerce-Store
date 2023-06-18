"use client";
import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import CustomLink from "./CustomLink";
import DropDownLink from "./DropDownLink";
import HeaderLinkContainer from "./HeaderLinkContainer";

const Header = () => {
  const [isBrowseCategoriesOpen, setIsBrowseCategoriesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBrowseCategories = () => {
    setIsBrowseCategoriesOpen(!isBrowseCategoriesOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#F4F4F4]">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex gap-20 items-center">
            <div className=" relative group">
              <button
                onClick={toggleBrowseCategories}
                className="text-white h-16 px-4 bg-secondary font-semibold flex items-center focus:outline-none"
              >
                <span>Browse Categories</span>
                <HiOutlineChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 transform group-hover:rotate-180" />
              </button>
              {isBrowseCategoriesOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-700 py-2 rounded-md shadow-lg">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <IoIosArrowForward className="mr-2 text-gray-400" />
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <IoIosArrowForward className="mr-2 text-gray-400" />
                      Category 2
                    </a>
                  </li>
                </ul>
              )}
            </div>
            {/* Middle */}
            <div className="flex justify-center flex-grow">
              {/* Button for smaller screens */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-primary hover:text-gray-300 font-semibold flex items-center focus:outline-none"
              >
                <span>Menu</span>
                <HiOutlineChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 transform" />
              </button>

              {/* Menu items */}
              <ul
                className={`md:flex items-center space-x-4 ${
                  isMenuOpen ? "flex" : "hidden"
                }`}
              >
                <HeaderLinkContainer text="Home">
                  <DropDownLink href="#" text="Dropdown 1" />
                  <DropDownLink href="#" text="Dropdown 2" />
                </HeaderLinkContainer>
                <HeaderLinkContainer text="Catalouge">
                  <DropDownLink href="#" text="Dropdown 1" />
                  <DropDownLink href="#" text="Dropdown 2" />
                </HeaderLinkContainer>
                <CustomLink href="#" text="Blog" />
                <HeaderLinkContainer text="Pages">
                  <DropDownLink href="#" text="Dropdown 1" />
                  <DropDownLink href="#" text="Dropdown 2" />
                </HeaderLinkContainer>

                <CustomLink href="#" text="About us" />
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:block font-semibold">
            <span className="text-primary">30 Days Free Return</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
