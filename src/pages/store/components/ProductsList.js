// REDUX
import { useDispatch, useSelector } from "react-redux";
import { filterById } from "../../../redux/features/slices/productsSlice";

// REACT ROUTER
import { Link } from "react-router-dom";

// COMPONENTS
import ProductCard from "./ProductCard";

import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ProductsList() {
  const categoryAndGenderFilteredProducts = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  );
  const colorFilteredAndPriceSortedProducts = useSelector(
    (state) => state.products.colorFilteredAndPriceSortedProducts,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div className="m-10 flex flex-col lg:col-span-3 lg:m-5 2xl:col-span-4">
      <ul className="items-top flex  min-h-screen flex-1 flex-wrap justify-around gap-10">
        {Array.isArray(colorFilteredAndPriceSortedProducts)
          ? colorFilteredAndPriceSortedProducts.map((product) => (
              <li
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-offset="200"
                key={product.id}
              >
                <Link
                  to={product.id}
                  onClick={() => dispatch(filterById(product.id))}
                >
                  <ProductCard product={product} />
                </Link>
              </li>
            ))
          : categoryAndGenderFilteredProducts.map((product) => (
              <li
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-offset="200"
                key={product.id}
              >
                <Link
                  to={product.id}
                  onClick={() => dispatch(filterById(product.id))}
                >
                  <ProductCard product={product} />
                </Link>
              </li>
            ))}
        {!colorFilteredAndPriceSortedProducts.length && (
          <div>
            <h2 className="m-2 p-2 text-lg text-gray-800 lg:m-5 lg:p-5 lg:text-2xl">
              No results that match your keywords!
            </h2>
          </div>
        )}
      </ul>
    </div>
  );
}
