// REACT
import React from "react";

// REACT ROUTER
import { Link } from "react-router-dom";

// REDUX
import { useDispatch } from "react-redux";
import { filterById } from "../../../../redux/features/slices/productsSlice";

// OTHER
import data from "../../../../data/data.json";

// COMPONENTS
import ProductCard from "../../../store/components/product-card/ProductCard";

export default function ProductRecommendations({ product }) {
  const dispatch = useDispatch();

  const products = data.products.map((products) => products);
  const allProducts = [...products];

  const productGender = product[0].gender;
  const productCategory = product[0].category;

  const productRecommendation = allProducts
    .filter(
      (item) =>
        item.gender === productGender && item.category === productCategory,
    )
    .filter((item) => item.id !== product[0].id);

  return (
    <div className="col-span-2 ">
      <h3 className=" p-5 text-xl font-medium text-gray-800 sm:ml-5 ">
        You may also like:
      </h3>
      <ul className="flex flex-row flex-wrap justify-around gap-10">
        {productRecommendation.map((product) => (
          <li key={product.id}>
            <Link
              to={`/store/${product.id}`}
              onClick={() => dispatch(filterById(product.id))}
            >
              <ProductCard product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
