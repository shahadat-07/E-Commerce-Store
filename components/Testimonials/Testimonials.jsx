"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className="container mx-auto mb-section-gap">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
        <SwiperSlide>
          <Testimonial name="Savannah Nguyen" img="/c-3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="Esther Howard" img="/c-2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="Esther Howard" img="/c-3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="Howard" img="/c-3.png" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
