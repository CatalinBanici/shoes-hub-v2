import React from "react";
import { Link } from "react-router-dom";

import menCategory from "../../../assets/images/home-page/men.jpg";
import womenCategory from "../../../assets/images/home-page/women.jpg";
import { useDispatch } from "react-redux";
import { filterByGender } from "../../../redux/features/slices/productsSlice";

export default function Categories() {
  const dispatch = useDispatch();

  return (
    <div className="  mb-5 h-[40vh]  sm:m-5 sm:h-[50vh]">
      <div className="flex h-[40vh]  flex-col gap-2 sm:h-[50vh] sm:flex-row sm:justify-evenly">
        <div className="group relative h-[20vh] sm:h-full lg:overflow-hidden">
          <div className="absolute top-3 flex w-full items-center justify-center text-white sm:top-10 ">
            <p className=" rounded-sm bg-black bg-opacity-50 px-4 py-2 uppercase sm:px-8 sm:py-4">
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
              className="rounded-md bg-amber-500 px-4 py-2 text-white sm:px-8 sm:py-4 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400"
              to="store"
              onClick={() => dispatch(filterByGender("male"))}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="group relative h-[20vh] sm:h-full lg:overflow-hidden">
          <div className="absolute top-3 flex w-full items-center justify-center text-white sm:top-10 ">
            <p className=" rounded-sm bg-black bg-opacity-50 px-4 py-2 uppercase sm:px-8 sm:py-4">
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
              className="rounded-md bg-amber-500 px-4 py-2 text-white sm:px-8 sm:py-4 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400"
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
