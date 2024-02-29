// REACT
import { useState } from "react";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategoryFemale,
  filterByCategoryMale,
  filterByGender,
  resetFilterByColorAndSortByPrice,
} from "../../../../redux/features/slices/productsSlice";

// JSON DATA
import data from "../../../../data/data.json";

// COMPONENTS
import MobileCategories from "./sub-components/MobileCategories";
import DesktopCategories from "./sub-components/DesktopCategories";

export default function Categories() {
  // category menu open / close logic
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showMaleCategories, setShowMaleCategories] = useState(false);
  const [showFemaleCategories, setShowFemaleCategories] = useState(false);

  const dispatch = useDispatch();

  // extract the selected category to change the 'category button' style of active/inactive based on the selected category
  const selectedCategories = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  ).map((e) => e.category);
  const selectedCategoryType = [...new Set(selectedCategories)];

  // extract the product categories type to be rendered in the male/female categories section
  const allCategories = data.products.map((e) => e.category);
  const allCategoriesType = [...new Set(allCategories)];

  const maleCategories = data.products
    .filter((product) => product.gender === "male")
    .map((e) => e.category);
  const maleCategoriesType = [...new Set(maleCategories)];

  const femaleCategories = data.products
    .filter((product) => product.gender === "female")
    .map((e) => e.category);
  const femaleCategoriesType = [...new Set(femaleCategories)];

  return (
    <div className=" p-2 lg:row-span-2 lg:m-5 lg:flex lg:justify-center lg:bg-white">
      <MobileCategories
        showAllCategories={showAllCategories}
        setShowAllCategories={setShowAllCategories}
        showMaleCategories={showMaleCategories}
        setShowMaleCategories={setShowMaleCategories}
        showFemaleCategories={showFemaleCategories}
        setShowFemaleCategories={setShowFemaleCategories}
        allCategoriesType={allCategoriesType}
        maleCategoriesType={maleCategoriesType}
        femaleCategoriesType={femaleCategoriesType}
        selectedCategoryType={selectedCategoryType}
        filterByGender={filterByGender}
        filterByCategoryMale={filterByCategoryMale}
        filterByCategoryFemale={filterByCategoryFemale}
        resetFilterByColorAndSortByPrice={resetFilterByColorAndSortByPrice}
        dispatch={dispatch}
      />

      <DesktopCategories
        showAllCategories={showAllCategories}
        setShowAllCategories={setShowAllCategories}
        showMaleCategories={showMaleCategories}
        setShowMaleCategories={setShowMaleCategories}
        showFemaleCategories={showFemaleCategories}
        setShowFemaleCategories={setShowFemaleCategories}
        allCategoriesType={allCategoriesType}
        maleCategoriesType={maleCategoriesType}
        femaleCategoriesType={femaleCategoriesType}
        selectedCategoryType={selectedCategoryType}
        filterByGender={filterByGender}
        filterByCategoryMale={filterByCategoryMale}
        filterByCategoryFemale={filterByCategoryFemale}
        resetFilterByColorAndSortByPrice={resetFilterByColorAndSortByPrice}
        dispatch={dispatch}
      />
    </div>
  );
}
