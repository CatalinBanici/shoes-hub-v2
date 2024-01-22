import React from "react";
import ProductGallery from "./components/ProductGallery";
import ProductSection from "./components/ProductSection";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const singleProduct = useSelector((state) => state.products.singleProduct);

  return (
    <div className="relative top-[64px] flex flex-col pb-10 sm:top-[80px]  lg:w-full lg:flex-row lg:items-center lg:justify-center">
      <ProductGallery product={singleProduct} />
      <ProductSection product={singleProduct} />
    </div>
  );
}
