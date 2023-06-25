import React from "react";
import Button from "./Button";

const Promotion = () => {
  return (
    <div className="container mx-auto bg-cover bg-center bg-no-repeat h-96 mb-section-gap">
      <div
        className="bg-opacity-75 h-full w-full rounded-2xl flex"
        style={{ backgroundImage: `url('/promotion.png')` }}
      >
        <div className="py-8 px-6 lg:order-last flex lg:flex-1 flex-col justify-center items-center text-center">
          <Button
            className="bg-secondary text-white font-semibold px-2 md:px-4 lg:px-8 py-[7px] lg:py-[10px] rounded-xl mb-8"
            text="New laptop"
          />
          <p className="text-3xl font-bold mb-4 text-[#2E8FC5]">
            Sale up to 50% off
          </p>
          <p className="text-white"> 12 inch hd display </p>
          <Button
            className="bg-secondary text-white font-semibold px-2 md:px-4 lg:px-8 py-[7px] lg:py-[10px] rounded-xl mt-8"
            text="Shop Now"
          />
        </div>
        <div className="lg:flex-1"></div>
      </div>
    </div>
  );
};

export default Promotion;
