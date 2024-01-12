import React, { useState, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByColorAndSortByPrice,
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
    console.log("effect");
  }, [categoryAndGenderFilteredProducts]);

  // values to be dispatched
  const filterAndSortValues = {
    filterByColor: singleColor,
    sortByPrice: price,
  };
  return (
    <div className="p-2 lg:flex lg:flex-row-reverse">
      <div className=" flex flex-row items-center justify-around lg:justify-end">
        <button
          className="mx-2 flex h-8 w-full max-w-[40%] flex-row  items-center justify-around rounded-lg border-2 border-solid border-gray-800 bg-white px-2 py-px sm:w-[50%] sm:max-w-60  lg:hidden"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span>Filters</span>
          <span className="flex flex-row">
            <IoFilterSharp />
            <IoIosArrowDown />
          </span>
        </button>
        <div className="mx-2 flex h-8 max-w-[50%] flex-row rounded-lg border-2 border-solid border-gray-800 sm:w-[50%] sm:max-w-60 lg:w-full lg:max-w-none">
          <input className="  w-full rounded-lg  px-2 py-px" type="search" />
          <button className="px-2">
            <IoMdSearch />
          </button>
        </div>
      </div>
      <div className={`${showFilters ? "flex" : "hidden"} lg:flex `}>
        <div>
          <button ref={colorButtonRef} onClick={() => setColorMenu(!colorMenu)}>
            Filter by Color{" "}
            <span>{colorMenu ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {colorMenu && (
            <ul ref={colorMenuRef}>
              {filteredColors.map((color, index) => (
                <li className="p-2 " key={index}>
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
        <div onChange={priceSort}>
          <label htmlFor="price-asc">
            Price Asc
            <input
              name="price-sort"
              id="price-asc"
              type="radio"
              value="price-asc"
              checked={price === "price-asc"}
            />
          </label>
          <label htmlFor="price-desc">
            Price Desc
            <input
              name="price-sort"
              id="price-desc"
              type="radio"
              value="price-desc"
              checked={price === "price-desc"}
            />
          </label>
        </div>
        <div>
          <button
            onClick={() =>
              dispatch(filterByColorAndSortByPrice(filterAndSortValues))
            }
            className="m-2 rounded-lg bg-gray-100 p-2 disabled:bg-white disabled:text-gray-400"
            disabled={
              !filterAndSortValues.filterByColor.length &&
              filterAndSortValues.sortByPrice === null
            }
          >
            Apply Filters
          </button>
          <button
            onClick={() => {
              dispatch(resetFilterByColorAndSortByPrice());
              setFilteredColors(colors);
              setPrice(null);
            }}
            className="m-2 p-2 disabled:text-gray-400"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
