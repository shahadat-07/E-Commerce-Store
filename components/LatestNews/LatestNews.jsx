"use client";
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import NewsCard from "./NewsCard";
import { LatestNewsData } from "@/utilis";
import Link from "next/link";

const LatestNews = () => {
  return (
    <section className="container mx-auto lg:p-0 mb-section-gap">
      <div className="flex justify-between mb-2 md:mb-4 lg:mb-6">
        <p className="text-primary text-lg font-semibold">Latest News</p>
        <Link href="#" className="text-primary">
          {" "}
          view all{" "}
        </Link>
      </div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log("")}
        onSlideChange={() => console.log("slide change")}
        style={{ paddingBottom: "50px" }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {LatestNewsData.map((item, index) => (
          <SwiperSlide key={index}>
            <NewsCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestNews;
