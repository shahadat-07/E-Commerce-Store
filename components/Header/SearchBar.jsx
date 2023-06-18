"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-7xl">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search anything"
          className="pl-5 lg:pl-10 pr-[50px] md:pr-[100px] lg:pr-[250px] py-2 lg:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 w-full lg:w-auto"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 bg-secondary text-white font-semibold px-3 md:px-6 lg:px-12 py-[9px] lg:py-[13px] rounded-full lg:mt-0"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
