import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import menCategory from "../../../assets/images/home-page/men.jpg";
import womenCategory from "../../../assets/images/home-page/women.jpg";
import { useDispatch } from "react-redux";
import { filterByGender } from "../../../redux/features/slices/productsSlice";

import aos from "aos";
import "aos/dist/aos.css";

export default function Categories() {
  useEffect(() => {
    aos.init();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="  my-5   sm:m-5 ">
      <h1 className=" text-md flex  h-[10vh] items-center justify-center px-3 text-center font-josefin text-gray-600 sm:h-[20vh]">
        The only shoe website that will get you addicted {"(in a good way)"}.
      </h1>
      <div className="flex   flex-col gap-2  sm:flex-row sm:justify-evenly">
        <div
          className="group relative h-[20vh] sm:h-full lg:overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <div className="absolute top-3 flex w-full items-center justify-center text-white sm:top-10 ">
            <p className=" rounded-sm bg-black bg-opacity-50 px-4 py-2 uppercase sm:px-8 sm:py-3">
              Men's Collection
            </p>
          </div>
          <img
            className="h-full w-full object-cover"
            src={menCategory}
            alt="Men Shoe Category"
          />
          <div className="absolute bottom-3 flex w-full items-center justify-center text-lg sm:bottom-10 lg:bottom-[-230px] lg:h-[50%] lg:bg-black lg:bg-opacity-50 lg:text-xl lg:transition lg:delay-100 lg:ease-out lg:group-hover:translate-y-[-230px]">
            <Link
              className="rounded-md bg-amber-500 px-4 py-2 text-white sm:px-8 sm:py-3 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400"
              to="store"
              onClick={() => dispatch(filterByGender("male"))}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div
          className="group relative h-[20vh] sm:h-full lg:overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <div className="absolute top-3 flex w-full items-center justify-center text-white sm:top-10 ">
            <p className=" rounded-sm bg-black bg-opacity-50 px-4 py-2 uppercase sm:px-8 sm:py-3">
              Women's Collection
            </p>
          </div>
          <img
            className="h-full w-full object-cover"
            src={womenCategory}
            alt="Women Shoe Category"
          />
          <div className="absolute bottom-3 flex w-full items-center justify-center text-lg sm:bottom-10 lg:bottom-[-230px] lg:h-[50%] lg:bg-black lg:bg-opacity-50 lg:text-xl lg:transition lg:delay-100 lg:ease-out lg:group-hover:translate-y-[-230px]">
            <Link
              className="rounded-md bg-amber-500 px-4 py-2 text-white sm:px-8 sm:py-3 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400"
              to="store"
              onClick={() => dispatch(filterByGender("female"))}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
