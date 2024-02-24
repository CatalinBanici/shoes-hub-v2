// REACT
import React from "react";

// COMPONENTS
import Categories from "./components/categories/Categories";
import Filters from "./components/filters/Filters";
import ProductsList from "./components/products-list/ProductsList";

export default function StorePage() {
  return (
    <div className="relative  top-[64px] bg-gray-100 sm:top-[80px] lg:grid lg:grid-cols-4 2xl:grid-cols-5 ">
      <Categories />
      <Filters />
      <ProductsList />
    </div>
  );
}
