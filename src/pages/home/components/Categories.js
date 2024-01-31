import React from "react";
import { Link } from "react-router-dom";

import menCategory from "../../../assets/images/home-page/men.jpg";
import womenCategory from "../../../assets/images/home-page/women.jpg";
import { useDispatch } from "react-redux";
import { filterByGender } from "../../../redux/features/slices/productsSlice";

export default function Categories() {
  const dispatch = useDispatch();

  return (
    <div className=" mb-14  h-[50vh] sm:h-[70vh]">
      <h1 className=" text-md flex  h-[10vh] items-center justify-center px-3 text-center font-josefin text-gray-600 sm:h-[20vh]">
        The only shoe website that will get you addicted {"(in a good way)"}.
      </h1>
      <div className="flex h-[40vh] flex-col gap-2 sm:h-[50vh] sm:flex-row sm:justify-evenly">
        <div className="relative h-[20vh] sm:h-full">
          <div className="absolute top-5 flex w-full items-center justify-center text-white ">
            <p className=" rounded-sm bg-black bg-opacity-50 px-3 py-1 uppercase">
              Men's Collection
            </p>
          </div>
          <img
            className="h-full w-full object-cover"
            src={menCategory}
            alt="Men Shoe Category"
          />
          <div className="absolute bottom-5 flex w-full items-center justify-center">
            <Link
              className="rounded-md bg-orange-600 px-4 py-2 text-white"
              to="store"
              onClick={() => dispatch(filterByGender("male"))}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative h-[20vh] sm:h-full">
          <div className="absolute top-5 flex w-full items-center justify-center text-white ">
            <p className=" rounded-sm bg-black bg-opacity-50 px-3 py-1 uppercase">
              Women's Collection
            </p>
          </div>
          <img
            className="h-full w-full object-cover"
            src={womenCategory}
            alt="Women Shoe Category"
          />
          <div className="absolute bottom-5 flex w-full items-center justify-center">
            <Link
              className="rounded-md bg-orange-600 px-4 py-2 text-white"
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
