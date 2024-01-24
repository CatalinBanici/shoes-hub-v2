import React, { useState, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByColorAndSortByPrice,
  filterBySearch,
  resetFilterByColorAndSortByPrice,
} from "../../../redux/features/slices/productsSlice";

export default function Filters() {
  const [showFilters, setShowFilters] = useState(false);

  const categoryAndGenderFilteredProducts = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  );
  const products = [...categoryAndGenderFilteredProducts];

  const colorMenuRef = useRef();
  const colorButtonRef = useRef();
  let searchInputRef = useRef();
  const dispatch = useDispatch();

  const productColors = products.map((product) => {
    const stock = product.stock.map((e) => e);
    const colorsStock = stock[1].colors;
    const colorValues = colorsStock.map((e) => e.colorValue);
    return colorValues;
  });

  // flattening the productColors array and getting only one color type
  const colorsArray = [...new Set(productColors.flat())];

  // getting the selected color and toggling it
  const colors = colorsArray.map((color) => {
    return { name: color, selected: false };
  });
  const [filteredColors, setFilteredColors] = useState(colors);
  const updatedColors = [...filteredColors];
  const checkedColor = filteredColors.filter((e) => e.selected === true);
  const singleColor = checkedColor.map((e) => e.name);

  function toggleColor(index) {
    updatedColors[index].selected = !updatedColors[index].selected;
    setFilteredColors(updatedColors);
  }

  // price sorting type
  const [price, setPrice] = useState("none");

  function priceSort(event) {
    setPrice(event.target.value);
  }

  // color dropdown menu
  const [colorMenu, setColorMenu] = useState(false);

  useEffect(() => {
    // close the color menu dropdown when user clicks outside of it
    function closeNavOnOutsideClick(e) {
      if (
        colorMenu === true &&
        colorMenuRef.current &&
        !colorMenuRef.current.contains(e.target) &&
        !colorButtonRef.current.contains(e.target)
      ) {
        setColorMenu(false);
      }
    }
    document.addEventListener("mousedown", closeNavOnOutsideClick);
    return () => {
      document.removeEventListener("mousedown", closeNavOnOutsideClick);
    };
  }, [colorMenu]);

  // when products (categoryAndGenderFilteredProducts) change, reset all filters
  useEffect(() => {
    setFilteredColors(colors);
    setPrice("none");
  }, [categoryAndGenderFilteredProducts]);

  // values to be dispatched
  const filterAndSortValues = {
    filterByColor: singleColor,
    sortByPrice: price,
  };

  return (
    <div className="p-2 lg:col-span-3 lg:m-5 lg:flex lg:flex-row-reverse lg:justify-around lg:bg-white 2xl:col-span-4">
      <div className="flex flex-col-reverse items-center justify-around sm:flex-row lg:w-[50%] lg:justify-end">
        <button
          className={`m-2 flex h-8 w-full max-w-[200px] flex-row items-center  justify-around rounded-lg border-2 border-solid border-gray-800 px-2 py-px sm:w-[50%] sm:max-w-60 lg:hidden ${
            showFilters ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
          onClick={() => setShowFilters((curr) => !curr)}
        >
          <span>Filter / Sort</span>
          <span className="flex flex-row">
            <IoIosArrowDown className={showFilters && "rotate-180"} />
          </span>
        </button>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="m-2 flex h-8 max-w-[200px] flex-row rounded-lg border-2 border-solid border-gray-800 sm:w-[50%] sm:max-w-60 lg:w-full lg:max-w-full "
        >
          <input
            className="  w-full rounded-lg  px-2 py-px"
            type="search"
            placeholder="Search..."
            ref={searchInputRef}
          />
          <button
            className="px-2"
            onClick={() => {
              searchInputRef.current.value &&
                dispatch(filterBySearch(searchInputRef.current.value));
              setFilteredColors(colors);
              setPrice("none");
            }}
          >
            <IoMdSearch />
          </button>
        </form>
      </div>
      <div
        className={`${
          showFilters
            ? "mt-5 grid grid-cols-2 grid-rows-2 place-items-center bg-white py-2 sm:flex sm:flex-row sm:justify-evenly  "
            : "hidden"
        } lg:mt-0 lg:flex lg:w-full lg:flex-row lg:justify-around  lg:py-2  `}
      >
        {/* COLOR FILTER */}
        <div className="relative m-2 flex min-w-fit flex-col items-center justify-center ">
          <button
            className={`${
              colorMenu
                ? "  border-gray-200 bg-white "
                : "border-gray-200 bg-gray-200"
            } flex flex-row items-center justify-center rounded-md border-2 border-solid p-2 text-gray-800 shadow-md`}
            ref={colorButtonRef}
            onClick={() => setColorMenu((cur) => !cur)}
          >
            Filter by Color{" "}
            <IoIosArrowDown className={`${colorMenu && "rotate-180"} ml-1`} />
          </button>
          {colorMenu && (
            <ul
              className="absolute top-12 z-50 max-h-48 w-full overflow-y-auto rounded-md bg-white  shadow-md"
              ref={colorMenuRef}
            >
              {filteredColors.map((color, index) => (
                <li className="p-2 text-gray-800 " key={index}>
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="color-filter"
                    id={color.name}
                    value={color.name}
                    checked={color.selected}
                    onChange={() => toggleColor(index)}
                  />
                  <label className="cursor-pointer px-2" htmlFor={color.name}>
                    {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* PRICE SORT */}
        <div
          className="m-2 flex max-w-fit flex-row items-center  justify-center rounded-md bg-gray-200 shadow-md"
          onChange={priceSort}
        >
          <label
            className=" relative z-20 p-2  text-gray-800 "
            htmlFor="price-asc"
          >
            {"Price (asc)"}
            <input
              className=" peer absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
              name="price-sort"
              id="price-asc"
              type="radio"
              value="price-asc"
              checked={price === "price-asc"}
            />
            <span className="absolute left-0 top-0 -z-20 h-full w-full peer-checked:rounded-md peer-checked:border-2 peer-checked:border-solid peer-checked:border-gray-800"></span>
          </label>
          <label
            className=" relative z-20 p-2  text-gray-800 "
            htmlFor="price-desc"
          >
            {"Price (desc)"}
            <input
              className="  peer absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
              name="price-sort"
              id="price-desc"
              type="radio"
              value="price-desc"
              checked={price === "price-desc"}
            />
            <span className="absolute left-0 top-0 -z-20 h-full w-full peer-checked:rounded-md peer-checked:border-2 peer-checked:border-solid peer-checked:border-gray-800"></span>
          </label>
        </div>

        {/* APPLY AND RESET FILTERS */}
        <div className="col-span-2 flex flex-row">
          <button
            onClick={() => {
              dispatch(filterByColorAndSortByPrice(filterAndSortValues));
              searchInputRef.current.value = "";
            }}
            className="m-2 rounded-md bg-gray-200 p-2 text-gray-800 shadow-md disabled:bg-transparent disabled:text-gray-400 disabled:shadow-none"
            disabled={
              !filterAndSortValues.filterByColor.length &&
              filterAndSortValues.sortByPrice === "none"
            }
          >
            Apply
          </button>
          <button
            onClick={() => {
              dispatch(resetFilterByColorAndSortByPrice());
              setFilteredColors(colors);
              setPrice("none");
              searchInputRef.current.value = "";
            }}
            className="m-2 p-2 text-gray-800 disabled:text-gray-400"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
