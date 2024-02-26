// REACT
import { useState, useEffect, useRef } from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  filterByColorAndSortByPrice,
  filterBySearch,
  resetFilterByColorAndSortByPrice,
} from "../../../../redux/features/slices/productsSlice";

// COMPONENTS
import FiltersHead from "./sub-components/FiltersHead";
import ColorFilter from "./sub-components/ColorFilter";
import PriceSort from "./sub-components/PriceSort";
import ApplyReset from "./sub-components/ApplyReset";

export default function Filters() {
  const dispatch = useDispatch();
  let searchInputRef = useRef();

  //  open / close filter and sort menu on mobile scneen
  const [showFilters, setShowFilters] = useState(false);

  // open / close color menu drop down
  const [colorMenu, setColorMenu] = useState(false);

  // get products from redux state
  const categoryAndGenderFilteredProducts = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  );
  const products = [...categoryAndGenderFilteredProducts];

  // get and put all the color types from category and gender filtered products in one single array
  const productColors = products.map((product) => {
    const stock = product.stock.map((e) => e);
    const colorsStock = stock[1].colors;
    const colorValues = colorsStock.map((e) => e.colorValue);
    return colorValues;
  });
  const colorTypes = [...new Set(productColors.flat())];

  // getting the selected / checked color and toggling it
  const colors = colorTypes.map((color) => {
    return { name: color, selected: false };
  });
  const [filteredColors, setFilteredColors] = useState(colors);
  const updatedColors = [...filteredColors];
  const checkedColor = filteredColors
    .filter((e) => e.selected === true)
    .map((e) => e.name);
  function toggleColor(index) {
    updatedColors[index].selected = !updatedColors[index].selected;
    setFilteredColors(updatedColors);
  }

  // price sorting
  const [priceType, setPriceType] = useState("none");
  function priceSort(event) {
    setPriceType(event.target.value);
  }

  // values to be dispatched to redux store (selected color and price sort type)
  const filterAndSortValues = {
    filterByColor: checkedColor,
    sortByPrice: priceType,
  };

  // close the color menu dropdown when user clicks outside of it
  const colorMenuRef = useRef();
  const colorButtonRef = useRef();
  useEffect(() => {
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
    setPriceType("none");
  }, [categoryAndGenderFilteredProducts]);

  return (
    <div className="p-2 lg:col-span-3 lg:m-5 lg:flex lg:flex-row-reverse lg:justify-around lg:bg-white 2xl:col-span-4">
      <FiltersHead
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        setFilteredColors={setFilteredColors}
        setPriceType={setPriceType}
        searchInputRef={searchInputRef}
        filterBySearch={filterBySearch}
        colors={colors}
        dispatch={dispatch}
      />
      {/* when 'show filters' is active, render the filter components on mobile display */}
      <div
        className={`${
          showFilters
            ? "mt-5 grid grid-cols-2 grid-rows-2 place-items-center bg-white py-2 sm:flex sm:flex-row sm:justify-evenly  "
            : "hidden"
        } lg:mt-0 lg:flex lg:w-full lg:flex-row lg:justify-around  lg:py-2  `}
      >
        <ColorFilter
          colorMenu={colorMenu}
          setColorMenu={setColorMenu}
          colorMenuRef={colorMenuRef}
          colorButtonRef={colorButtonRef}
          filteredColors={filteredColors}
          toggleColor={toggleColor}
        />

        <PriceSort priceType={priceType} priceSort={priceSort} />

        <ApplyReset
          searchInputRef={searchInputRef}
          filterAndSortValues={filterAndSortValues}
          colors={colors}
          setFilteredColors={setFilteredColors}
          setPriceType={setPriceType}
          filterByColorAndSortByPrice={filterByColorAndSortByPrice}
          resetFilterByColorAndSortByPrice={resetFilterByColorAndSortByPrice}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}
