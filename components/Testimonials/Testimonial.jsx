import Image from "next/image";
import React from "react";

const Testimonial = ({ name, img }) => {
  return (
    <div class="border border-tertiary rounded-xl p-3 hover:cursor-grab	">
      <div class="flex flex-col md:flex-row gap-6">
        <div class="md:w-1/4">
          <Image
            width={100}
            height={100}
            src={img}
            alt="Next Image"
            class="w-full h-auto md:mr-4 rounded-full object-contain"
          />
        </div>
        <div class="md:w-3/4 flex items-center">
          <h2 class="text-base font-semibold">{name}gfgf</h2>
        </div>
      </div>
      <div class="mt-5">
        <p class="text-sm bg-primary-light text-primary rounded-xl px-6 py-3">
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
