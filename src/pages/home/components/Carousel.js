import React from "react";
import data from "../../../data/data.json";
import { IoIosArrowRoundForward } from "react-icons/io";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiperStyles.css";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div className="h-[50vh] sm:h-[100vh]">
      <Swiper
        className="h-full"
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        onSlideChange={() => null}
        onSwiper={(swiper) => null}
      >
        {data.carousel.map((element) => (
          <SwiperSlide key={element.id}>
            <div className="relative flex h-full w-full flex-col items-center justify-center ">
              <div className="absolute flex w-full flex-col items-center justify-center bg-black bg-opacity-40 px-10 py-2 text-center text-white sm:py-5">
                <h2 className="text-md font-medium sm:my-2 sm:text-lg">
                  {element.title}
                </h2>
                <h3 className="font-regular sm:text-md text-sm text-gray-200 sm:my-1">
                  {element.text}
                </h3>
                <Link
                  className="m-2 flex flex-row items-center justify-center rounded-md  bg-orange-600 px-5 py-2 text-white sm:my-5"
                  to="store"
                >
                  Store
                  <IoIosArrowRoundForward className="ml-2 text-xl" />
                </Link>
              </div>
              <img
                className="h-full w-full object-cover"
                src={element.image}
                alt={element.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
