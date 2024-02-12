import React from "react";
import { Link } from "react-router-dom";

import menCategory from "../../../assets/images/home-page/men.jpg";
import womenCategory from "../../../assets/images/home-page/women.jpg";
import { useDispatch } from "react-redux";
import { filterByGender } from "../../../redux/features/slices/productsSlice";

export default function Categories() {
  const dispatch = useDispatch();

  return (
    <div className=" m-3 mb-14 h-[50vh]  sm:m-5 sm:h-[60vh]">
      <div className="flex h-[40vh]  flex-col gap-2 sm:h-[50vh] sm:flex-row sm:justify-evenly">
        <div className="group relative h-[20vh] sm:h-full lg:overflow-hidden">
          <div className="absolute top-10 flex w-full items-center justify-center text-white ">
            <p className=" rounded-sm bg-black bg-opacity-50 px-8 py-4 uppercase">
              Men's Collection
            </p>
          </div>
          <img
            className="h-full w-full object-cover"
            src={menCategory}
            alt="Men Shoe Category"
          />
          <div className="absolute bottom-10 flex w-full items-center justify-center text-lg lg:bottom-[-230px] lg:h-[50%] lg:bg-black lg:bg-opacity-50 lg:text-xl lg:transition lg:delay-100 lg:ease-out lg:group-hover:translate-y-[-230px]">
            <Link
              className="rounded-md bg-amber-500 px-8 py-4 text-white lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400"
              to="store"
              onClick={() => dispatch(filterByGender("male"))}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="group relative h-[20vh] sm:h-full lg:overflow-hidden">
          <div className="absolute top-10 flex w-full items-center justify-center text-white ">
            <p className=" rounded-sm bg-black bg-opacity-50 px-8 py-4 uppercase">
              Women's Collection
            </p>
          </div>
          <img
            className="h-full w-full object-cover"
            src={womenCategory}
            alt="Women Shoe Category"
          />
          <div className="absolute bottom-10 flex w-full items-center justify-center text-lg lg:bottom-[-230px] lg:h-[50%] lg:bg-black lg:bg-opacity-50 lg:text-xl lg:transition lg:delay-100 lg:ease-out lg:group-hover:translate-y-[-230px]">
            <Link
              className="rounded-md bg-amber-500 px-8 py-4 text-white lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400"
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
