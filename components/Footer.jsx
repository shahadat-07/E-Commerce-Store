import Image from "next/image";

import { FooterlinkData } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-light">
      <div className="container mx-auto py-10 p-small-devices">
        <div className="bg-white py-8 px-6 md:flex md:justify-between items-center rounded-xl mb-8">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-[#1B5A7D]">
              Subscribe Newsletter
            </h3>
          </div>

          {/* Middle Section */}
          <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div class="relative w-full">
              <label
                for="email"
                class="hidden mb-2 text-sm font-medium text-gray-900 "
              >
                Email address
              </label>
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500  "
                placeholder="Enter your email"
                type="email"
                id="email"
                required=""
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-3 px-5 w-full text-sm font-medium text-center bg-secondary text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-[#1B5A7D] mt-4 md:mt-0 text-center md:text-right text-sm md:text-base">
            <p>123 Street, City</p>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="">
            <p className="text-[#1B5A7D] font-semibold text-2xl">
              Ecommerce Store
            </p>
            <p className="mr-4 text-[#1B5A7D] text-sm">
              64 st james boulevard hoswick , ze2 7zj
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex">
                <Link href="#" className="mr-2">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href="#" className="mr-2">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Render Columns */}
          {FooterlinkData.map((column, index) => (
            <div className="" key={index}>
              <h3 className="text-sm md:text-base font-bold mb-4 text-[#1B5A7D]">
                {column.title}
              </h3>
              <ul className="text-gray-700 list-none pl-0">
                {column.links.map((link, linkIndex) => (
                  <li
                    className="mb-2 relative pl-6 text-[#1B5A7D] text-sm md:text-base"
                    key={linkIndex}
                  >
                    <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#D9D9D9]"></span>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
