"use client";

import Image from "next/image";
import { useState } from "react";

const Product = ({ title, price, rating, image }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`relative rounded-lg border ${
        hovered ? "p-4" : "p-6"
      } transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Product Image */}
      <Image
        width={200}
        height={200}
        src={image}
        alt="Product"
        className="w-full h-auto mb-4"
      />
      {hovered ? (
        <div className="mb-2" />
      ) : (
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
      )}
      {/* Price */}3
      {hovered ? (
        <div className="mb-2" />
      ) : (
        <div className="mb-2">${price}</div>
      )}
      {/* Rating */}
      {hovered ? (
        <div className="mb-4" />
      ) : (
        <div className="flex items-center mb-4">
          {Array.from(Array(5).keys()).map((index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          ))}
        </div>
      )}
      {/* Love Icon */}
      <div className="absolute top-2 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 21l-2-2-2-2H5.5A2.5 2.5 0 013 14.5v-2A2.5 2.5 0 015.5 10H12V7.6l2-1.33L16 6.19V10h6v4.5A2.5 2.5 0 0120.5 17h-8.34l-2 2-.82.82zm5.5-10h-6"
          />
        </svg>
      </div>
      {/* Add to Cart and Eye Icon */}
      {hovered && (
        <div className="flex justify-between">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add to Cart
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Product;
