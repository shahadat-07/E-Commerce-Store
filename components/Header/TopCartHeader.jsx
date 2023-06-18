"use client";

import React, { useState } from "react";
import { SearchBar } from "..";
import Container from "../Container";
import TopLinkContainer from "./TopLinkContainer";

const TopCartHeader = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary">
      <div className="container mx-auto">
        <div className="max-w-7xl">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-white text-lg font-semibold">
                  E-Commerce Store
                </span>
              </div>
            </div>
            <div className="flex justify-center flex-grow">
              <SearchBar />
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="bg-gray-700 text-white hover:bg-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open mobile menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden lg:block">
              <TopLinkContainer />
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <TopLinkContainer />
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopCartHeader;
