"use client";
import Image from "next/image";

import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const items = [
  {
    title: "Laptop & Desktop",
    image: "/hero-img.png",
    quantity: "6",
  },
  {
    title: "Speaker",
    image: "/hero-img.png",
    quantity: "6",
  },
  {
    title: "DSLR Camera",
    image: "/hero-img.png",
    quantity: "6",
  },
  {
    title: "Headphone",
    image: "/hero-img.png",
    quantity: "6",
  },
];

const CategoryCarousel = () => {
  return (
    <section className="container mx-auto mb-section-gap">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log("")}
        onSlideChange={() => console.log("")}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center py-4 gap-8 border border-tertiary rounded-xl hover:cursor-grab">
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
              />
              <div>
                <h3 className="text-lg text-primary">{item.title}</h3>
                <p className="text-primary text-sm">{`(${item.quantity} items)`}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategoryCarousel;
