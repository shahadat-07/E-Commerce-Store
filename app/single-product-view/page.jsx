"use client";

import { Feature, Size, StarReviews } from "@/components";
import { availableSizes, colors, reviews } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";

const SingleProductView = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState("/hero2.jpg");
  const [previousImage, setPreviousImage] = useState("/logo2.png");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleImageSelect = (image) => {
    setPreviousImage(selectedImage);
    setSelectedImage(image);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-6">
      <div>
        <div className="relative">
          <Image
            src={selectedImage}
            alt="Product"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 focus:outline-none">
              Zoom
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          {["/logo2.png", "/logo1.png", "/hero2.jpg"].map((imagePath) => (
            <div
              key={imagePath}
              className={`relative rounded-lg shadow-lg mr-2 cursor-pointer ${
                selectedImage === imagePath ? "" : "cursor-pointer"
              }`}
              onClick={() => handleImageSelect(imagePath)}
            >
              <Image
                src={imagePath}
                alt="Sub Image"
                width={500}
                height={200}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-primary">Product Name</h2>
        <StarReviews reviews={reviews}/>

        <p className="text-xl mb-2">$ 299.99</p>
        <p className="mb-4 flex gap-2">
          Availability:{" "}
          <span className="text-green-500">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              ```jsx
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>{" "}
          <span className="text-green-500"> In stock</span>
        </p>
        <p className="text-[#5D5D5D] mb-4">
          Hurry up! only 34 products left in stock!
        </p>

        <div className="border-b border-tertiary my-4"></div>

        <div className="flex items-center mb-4">
          <span className="mr-2">Color:</span>
          <div className="flex">
            {colors.map((color) => (
              <div
                key={color.value}
                className={`w-5 h-5 rounded-full border border-primary mr-2 cursor-pointer ${
                  selectedColor === color.value ? color.classNames : ""
                }`}
                onClick={() => handleColorChange(color.value)}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <span className="mr-2">Size:</span>
          <div className="flex">
            {availableSizes.map((size) => (
              <Size
                key={size}
                size={size}
                selectedSize={selectedSize}
                handleSizeChange={handleSizeChange}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center my-5">
          <span className="mr-2">Quantity:</span>

          <button
            onClick={decrementQuantity}
            className="border border-gray-400 px-1 py-1 text-center w-8 focus:outline-none"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
            className="border border-gray-400 px-2 py-1 text-center w-16 focus:outline-none"
          />
          <button
            onClick={incrementQuantity}
            className="border border-gray-400 px-1 py-1 text-center w-8 focus:outline-none"
          >
            +
          </button>
        </div>

        <div className="flex items-center mb-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
            Add to Cart
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2">
            Wishlist
          </button>
          <div className="text-gray-700">
            <i className="fas fa-heart"></i>
          </div>
        </div>

        <Feature />

        <div className="border-t border-gray-300 my-8"></div>

        <p className="text-gray-700 mb-2">SKU: ABC123</p>

        <p className="text-gray-700 mb-2">Category: Electronics</p>

        <div>
          <a href="#" className="text-gray-700 mr-2">
            Facebook
          </a>
          <a href="#" className="text-gray-700 mr-2">
            Twitter
          </a>
          <a href="#" className="text-gray-700">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProductView;
