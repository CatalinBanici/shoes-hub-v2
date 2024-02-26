// REDUX
import { useSelector } from "react-redux";

// COMPONENTS
import ProductGallery from "./components/product-gallery/ProductGallery";
import ProductSection from "./components/product-section/ProductSection";
import ProductRecommendations from "./components/product-recommendations/ProductRecommendations";

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
