"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className="container mx-auto mb-section-gap p-small-devices sm:p-0">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log()}
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
        style={{ paddingBottom: "50px" }}
      >
        <SwiperSlide>
          <Testimonial name="Savannah Nguyen" img="/client-1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="Esther Howard" img="/client-4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="Esther Howard" img="/client-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="Howard" img="/client-3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="Esther Howard" img="/client-5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial name="Howard" img="/client-4.png" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
