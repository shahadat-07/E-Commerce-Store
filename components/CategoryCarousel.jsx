"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Transition } from "@headlessui/react";

const CategoryCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [moving, setMoving] = useState("right");

  const handlePrevSlide = () => {
    setMoving("left");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 3 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setMoving("right");
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 3 ? 0 : prevIndex + 1
    );
  };

  const getVisibleItems = () => {
    const firstIndex = activeIndex;
    const lastIndex = activeIndex + 2;
    return items.slice(firstIndex, lastIndex + 1);
  };

  return (
    <div className="relative mb-section-gap">
      <button
        className="text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 left-2"
        onClick={handlePrevSlide}
      >
        <FaChevronLeft className="w-4 h-4" />
      </button>
      <button
        className="text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-full p-2 absolute top-1/2 transform -translate-y-1/2 right-2"
        onClick={handleNextSlide}
      >
        <FaChevronRight className="w-4 h-4" />
      </button>
      <div className="flex justify-center mt-4">
        {getVisibleItems().map((item, index) => (
          <Transition
            unmount={false}
            key={index}
            show={true}
            appear={false}
            enter="transform transition ease-in-out duration-500"
            enterFrom={
              moving === "right"
                ? "-translate-x-[300px] opacity-0"
                : "translate-x-[300px] opacity-0"
            }
            enterTo="translate-x-0 opacity-100"
            leave="transform transition ease-in-out duration-500"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo={
              moving === "right"
                ? "translate-x-[300px] opacity-0"
                : "-translate-x-[300px] opacity-0"
            }
          >
            {(ref) => (
              <div ref={ref} className="w-full px-4">
                <div className="bg-white flex border border-tertiary rounded-lg">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={150}
                      height={75}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-primary text-base font-bold">
                      {item.description}
                    </p>
                    <p className="text-primary text-sm">(6 items)</p>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  const items = [
    {
      title: "Item 1",
      image: "/hero-img.png",
      description: "Laptop & Desktop",
    },
    {
      title: "Item 8",
      image: "/hero-img.png",
      description: "Head Phone",
    },
    {
      title: "Item 9",
      image: "/hero-img.png",
      description: "Head Phone",
    },
    {
      title: "Item 2",
      image: "/hero-img.png",
      description: "Laptop & Desktop",
    },
    {
      title: "Item 6",
      image: "/hero-img.png",
      description: "Smart Phone",
    },
    {
      title: "Item 7",
      image: "/hero-img.png",
      description: "Head Phone",
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <CategoryCarousel items={items} />
    </div>
  );
};

export default HomePage;
