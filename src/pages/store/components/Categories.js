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
        <div className="my-4 flex w-full flex-col items-start ">
          <button
            className={`my-2 w-full border-b-2 border-solid duration-200 ease-out hover:border-gray-800 ${
              showMaleCategories ? "border-gray-300" : "border-white"
            }`}
            onClick={() => {
              setShowMaleCategories((current) => !current);
              setShowFemaleCategories(false);
              dispatch(filterByGender("male"));
            }}
          >
            <span
              className={`flex w-full flex-row items-center justify-start text-lg duration-200 ease-out hover:translate-x-2 ${
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
          </button>
          {showMaleCategories && (
            <div className="m-2 flex w-full flex-col items-start">
              {newMaleCategories.map((category, index) => (
                <button
                  className={`solid relative my-2 w-full border-b-2 text-left duration-200 ease-out hover:border-gray-800 ${
                    newSelectedCategories.toString() === category
                      ? "border-gray-300"
                      : "border-white"
                  } `}
                  key={index}
                  onClick={() => {
                    dispatch(filterByCategoryMale(category.toLowerCase()));
                    dispatch(resetFilterByColorAndSortByPrice());
                  }}
                >
                  <span
                    className={`text-md font-regular block w-full duration-200 ease-out hover:translate-x-2 ${
                      newSelectedCategories.toString() === category
                        ? "translate-x-2 font-medium italic text-black"
                        : "text-gray-700"
                    } `}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="my-4 flex w-full flex-col items-start ">
          <button
            className={`my-2 w-full border-b-2 border-solid duration-200 ease-out hover:border-gray-800 ${
              showFemaleCategories ? "border-gray-300" : "border-white"
            }`}
            onClick={() => {
              setShowFemaleCategories((current) => !current);
              setShowMaleCategories(false);
              dispatch(filterByGender("female"));
            }}
          >
            <span
              className={`flex w-full flex-row items-center justify-start text-lg duration-200 ease-out hover:translate-x-2 ${
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
          </button>
          {showFemaleCategories && (
            <div className="m-2 flex w-full flex-col items-start">
              {newFemaleCategories.map((category, index) => (
                <button
                  className={`solid relative my-2 w-full border-b-2 text-left duration-200 ease-out hover:border-gray-800 ${
                    newSelectedCategories.toString() === category
                      ? "border-gray-300"
                      : "border-white"
                  } `}
                  key={index}
                  onClick={() => {
                    dispatch(filterByCategoryFemale(category.toLowerCase()));
                    dispatch(resetFilterByColorAndSortByPrice());
                  }}
                >
                  <span
                    className={`text-md font-regular block w-full duration-200 ease-out hover:translate-x-2 ${
                      newSelectedCategories.toString() === category
                        ? "translate-x-2 font-medium italic text-black"
                        : "text-gray-700"
                    } `}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
