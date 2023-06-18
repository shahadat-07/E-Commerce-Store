"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const HeroCarousel = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  if (!products || products.length === 0) {
    return null; // Handle empty products array gracefully
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-10">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-primary">
          {products[activeIndex].name}
        </h2>
        <div className="flex space-x-4">
          <Button
            className="bg-secondary text-white font-semibold px-2 md:px-4 lg:px-8 py-[7px] lg:py-[10px] rounded-xl"
            text="Shop Now"
          />
          <Button
            className="bg-white border border-primary hover:border-white hover:bg-primary hover:text-white transition px-2 md:px-4 lg:px-8 py-[7px] lg:py-[10px] rounded-xl"
            text="Show More"
          />
        </div>
        <div className="flex mt-8">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full mx-2 cursor-pointer ${
                index === activeIndex ? "bg-secondary" : "bg-gray-300"
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full lg:w-1/2">
        <Image
          src={`${products[activeIndex].image}`}
          alt={products[activeIndex].name}
          width={500}
          height={300}
          className="rounded-lg ml-auto"
        />
        <span className="absolute top-[65%] right-[15%] w-20 h-20 rounded-full bg-secondary flex justify-center items-center text-white font-semibold text-sm">
          only
          <br />${products[activeIndex].price}
        </span>
      </div>
    </div>
  );
};

const HomePage = () => {
  const products = [
    {
      name: "MacBook Pro M1",
      image: "/hero2.jpg",
      price: 1999,
    },
    {
      name: "MacBook Air M1",
      image: "/hero2.jpg",
      price: 1499,
    },
    // Add more products as needed
  ];

  return (
    <div>
      <HeroCarousel products={products} />
    </div>
  );
};

export default HomePage;
