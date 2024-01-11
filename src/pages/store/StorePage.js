import React from "react";
import Categories from "./components/Categories";

import { useSelector } from "react-redux";

export default function StorePage() {
  const categoryAndGenderFilteredProducts = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  );

  console.log(categoryAndGenderFilteredProducts);
  return (
    <div className="relative top-[64px] bg-gray-100 sm:top-[80px]">
      <Categories />
    </div>
  );
}
