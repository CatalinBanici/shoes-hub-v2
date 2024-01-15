import React, { useEffect, useState } from "react";
import data from "../../../data/data.json";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategoryFemale,
  filterByCategoryMale,
  filterByGender,
  resetFilterByColorAndSortByPrice,
} from "../../../redux/features/slices/productsSlice";
import { createSelector } from "@reduxjs/toolkit";
import { IoIosArrowDown } from "react-icons/io";

export default function Categories() {
  const dispatch = useDispatch();
  const [showMaleCategories, setShowMaleCategories] = useState(false);
  const [showFemaleCategories, setShowFemaleCategories] = useState(false);

  // extract the selected category to change the 'category button' style of active/inactive based on the selected category
  const selectedProducts = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  );
  const selectedCategories = selectedProducts.map((e) => e.category);
  const newSelectedCategories = [...new Set(selectedCategories)];

  // extract the product categories type to be rendered in the male/female categories section
  const maleProducts = data.products.filter(
    (product) => product.gender === "male",
  );
  const maleCategories = maleProducts.map((product) => product.category);
  const newMaleCategories = [...new Set(maleCategories)];

  const femaleProducts = data.products.filter(
    (product) => product.gender === "female",
  );
  const femaleCategories = femaleProducts.map((product) => product.category);
  const newFemaleCategories = [...new Set(femaleCategories)];

  return (
    <div className=" p-2 lg:row-span-2 lg:m-5 lg:flex lg:justify-center lg:bg-white">
      {/* MOBILE CATEGORIES */}
      <div className="sticky top-[150px] flex w-full flex-col items-center lg:hidden">
        <h2 className="m-2 text-lg font-bold text-gray-800">Categories</h2>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-row justify-around">
            <button
              className={`${
                (showMaleCategories && " bg-gray-800 text-white") ||
                " bg-white text-gray-800"
              } m-2 rounded-full border-2 border-solid border-gray-800 px-6 py-px`}
              onClick={() => {
                dispatch(filterByGender("male"));
                setShowMaleCategories((current) => !current);
                setShowFemaleCategories(false);
                dispatch(resetFilterByColorAndSortByPrice());
              }}
            >
              Men
            </button>
            <button
              className={`${
                (showFemaleCategories && " bg-gray-800 text-white") ||
                " bg-white text-gray-800"
              } m-2 rounded-full border-2 border-solid border-gray-800 px-6 py-px`}
              onClick={() => {
                dispatch(filterByGender("female"));
                setShowFemaleCategories((current) => !current);
                setShowMaleCategories(false);
                dispatch(resetFilterByColorAndSortByPrice());
              }}
            >
              Women
            </button>
          </div>

          {showMaleCategories || showFemaleCategories ? (
            <div className="flex w-full flex-row overflow-x-auto">
              {(showMaleCategories &&
                newMaleCategories.map((category, index) => (
                  <button
                    className={`m-2 min-w-fit rounded-full border-2 border-solid border-gray-800 px-6 py-px ${
                      newSelectedCategories.toString() === category
                        ? " bg-gray-800 text-white"
                        : " bg-white text-gray-800"
                    }`}
                    key={index}
                    onClick={() => {
                      dispatch(filterByCategoryMale(category.toLowerCase()));
                      dispatch(resetFilterByColorAndSortByPrice());
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))) ||
                (showFemaleCategories &&
                  newFemaleCategories.map((category, index) => (
                    <button
                      className={`m-2 min-w-fit rounded-full border-2 border-solid border-gray-800 px-6 py-px ${
                        newSelectedCategories.toString() === category
                          ? " bg-gray-800 text-white"
                          : " bg-white text-gray-800"
                      }`}
                      key={index}
                      onClick={() => {
                        dispatch(
                          filterByCategoryFemale(category.toLowerCase()),
                        );
                        dispatch(resetFilterByColorAndSortByPrice());
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  )))}
            </div>
          ) : null}
        </div>
      </div>

      {/* DESKTOP CATEGORIES */}
      <div className="hidden lg:sticky lg:top-28 lg:flex  lg:h-max lg:flex-col ">
        <div className=" my-14">
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
        </div>

        {/* men */}
        <div className="my-4 flex w-full flex-col items-start ">
          <button
            className="group relative my-2 w-full"
            onClick={() => {
              setShowMaleCategories((current) => !current);
              setShowFemaleCategories(false);
              dispatch(filterByGender("male"));
            }}
          >
            <span
              className={`flex w-full flex-row items-center justify-start text-lg duration-300 ease-out hover:translate-x-2 ${
                showMaleCategories
                  ? "translate-x-2 font-medium italic text-black "
                  : "font-regular text-gray-700"
              }`}
            >
              Men{" "}
              <span className="ml-2">
                <IoIosArrowDown
                  className={showMaleCategories && "rotate-180"}
                />
              </span>
            </span>
            <div
              className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
                showMaleCategories && "scale-x-100 bg-gray-300"
              }`}
            />
          </button>
          {showMaleCategories && (
            <div className="m-2 flex w-full flex-col items-start">
              {newMaleCategories.map((category, index) => (
                <button
                  className="group relative my-2 w-full text-left"
                  key={index}
                  onClick={() => {
                    dispatch(filterByCategoryMale(category.toLowerCase()));
                    dispatch(resetFilterByColorAndSortByPrice());
                  }}
                >
                  <span
                    className={`text-md font-regular block w-full duration-300 ease-out hover:translate-x-2 ${
                      newSelectedCategories.toString() === category
                        ? "translate-x-2 font-medium italic text-black"
                        : "text-gray-700"
                    } `}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                  <div
                    className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
                      newSelectedCategories.toString() === category &&
                      "scale-x-100 bg-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* women */}
        <div className="my-4 flex w-full flex-col items-start ">
          <button
            className="group relative my-2 w-full"
            onClick={() => {
              setShowFemaleCategories((current) => !current);
              setShowMaleCategories(false);
              dispatch(filterByGender("female"));
            }}
          >
            <span
              className={`flex w-full flex-row items-center justify-start text-lg duration-300 ease-out hover:translate-x-2 ${
                showFemaleCategories
                  ? "translate-x-2 font-medium italic text-black "
                  : "font-regular text-gray-700"
              }`}
            >
              Women{" "}
              <span className="ml-2">
                <IoIosArrowDown
                  className={showFemaleCategories && "rotate-180"}
                />
              </span>
            </span>
            <div
              className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
                showFemaleCategories && "scale-x-100 bg-gray-300"
              }`}
            />
          </button>
          {showFemaleCategories && (
            <div className="m-2 flex w-full flex-col items-start">
              {newFemaleCategories.map((category, index) => (
                <button
                  className="group relative my-2 w-full text-left"
                  key={index}
                  onClick={() => {
                    dispatch(filterByCategoryFemale(category.toLowerCase()));
                    dispatch(resetFilterByColorAndSortByPrice());
                  }}
                >
                  <span
                    className={`text-md font-regular block w-full duration-300 ease-out hover:translate-x-2 ${
                      newSelectedCategories.toString() === category
                        ? "translate-x-2 font-medium italic text-black"
                        : "text-gray-700"
                    } `}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                  <div
                    className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
                      newSelectedCategories.toString() === category &&
                      "scale-x-100 bg-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
