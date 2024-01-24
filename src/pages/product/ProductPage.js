import React from "react";
import ProductGallery from "./components/ProductGallery";
import ProductSection from "./components/ProductSection";
import { useSelector } from "react-redux";
import ProductRecommendations from "./components/ProductRecommendations";

export default function ProductPage() {
  const singleProduct = useSelector((state) => state.products.singleProduct);

  return (
    <div className="relative top-[64px] flex flex-col pb-10 sm:top-[80px] lg:m-5  lg:grid lg:grid-cols-2  lg:gap-5">
      <ProductGallery product={singleProduct} />
      <ProductSection product={singleProduct} />
      <ProductRecommendations product={singleProduct} />
    </div>
  );
}
