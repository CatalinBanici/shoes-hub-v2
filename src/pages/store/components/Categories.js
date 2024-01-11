import React, { useEffect, useState } from "react";
import data from "../../../data/data.json";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategoryFemale,
  filterByCategoryMale,
  filterByGender,
} from "../../../redux/features/slices/productsSlice";
import { createSelector } from "@reduxjs/toolkit";

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
    <div className="flex flex-col items-center p-2">
      <h2 className="m-2 text-lg font-bold text-gray-800">Categories</h2>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-row justify-around">
          <button
            className={`${
              (showMaleCategories && " bg-gray-800 text-white") ||
              " text-gray-800"
            } m-2 rounded-full border-2 border-solid border-gray-800 px-6 py-px`}
            onClick={() => {
              dispatch(filterByGender("male"));
              setShowMaleCategories(!showMaleCategories);
              setShowFemaleCategories(false);
            }}
          >
            Men
          </button>
          <button
            className={`${
              (showFemaleCategories && " bg-gray-800 text-white") ||
              " text-gray-800"
            } m-2 rounded-full border-2 border-solid border-gray-800 px-6 py-px`}
            onClick={() => {
              dispatch(filterByGender("female"));
              setShowFemaleCategories(!showFemaleCategories);
              setShowMaleCategories(false);
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
                      : " text-gray-800"
                  }`}
                  key={index}
                  onClick={() => {
                    dispatch(filterByCategoryMale(category.toLowerCase()));
                  }}
                >
                  {category}
                </button>
              ))) ||
              (showFemaleCategories &&
                newFemaleCategories.map((category, index) => (
                  <button
                    className={`m-2 min-w-fit rounded-full border-2 border-solid border-gray-800 px-6 py-px ${
                      newSelectedCategories.toString() === category
                        ? " bg-gray-800 text-white"
                        : " text-gray-800"
                    }`}
                    key={index}
                    onClick={() => {
                      dispatch(filterByCategoryFemale(category.toLowerCase()));
                    }}
                  >
                    {category}
                  </button>
                )))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
