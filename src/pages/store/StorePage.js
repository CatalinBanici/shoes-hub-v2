import React from "react";
import Categories from "./components/Categories";

import { useSelector } from "react-redux";
import Filters from "./components/Filters";
import ProductsList from "./components/ProductsList";
import Footer from "../root/components/Footer";

export default function StorePage() {
  const categoryAndGenderFilteredProducts = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  );
  const colorFilteredAndPriceSortedProducts = useSelector(
    (state) => state.products.colorFilteredAndPriceSortedProducts,
  );

  console.log(
    "categoryAndGenderFilteredProducts",
    categoryAndGenderFilteredProducts,
  );
  console.log(
    "colorFilteredAndPriceSortedProducts",
    colorFilteredAndPriceSortedProducts,
  );
  return (
    <div className="relative  top-[64px] bg-gray-100 sm:top-[80px] lg:grid lg:grid-cols-4 2xl:grid-cols-5 ">
      <Categories />
      <Filters />
      <ProductsList />
      <Footer />
    </div>
  );
}
