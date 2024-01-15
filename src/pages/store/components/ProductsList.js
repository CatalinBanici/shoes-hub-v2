// REDUX
import { useDispatch, useSelector } from "react-redux";
import { filterById } from "../../../redux/features/slices/productsSlice";

// REACT ROUTER
import { Link } from "react-router-dom";

// COMPONENTS
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const categoryAndGenderFilteredProducts = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  );
  const colorFilteredAndPriceSortedProducts = useSelector(
    (state) => state.products.colorFilteredAndPriceSortedProducts,
  );
  const dispatch = useDispatch();

  return (
    <div className="m-10 flex flex-col lg:col-span-3 lg:m-5 2xl:col-span-4">
      <ul className="items-top  flex flex-1 flex-wrap justify-around gap-10">
        {colorFilteredAndPriceSortedProducts.length
          ? colorFilteredAndPriceSortedProducts.map((product) => (
              <li key={product.id}>
                <Link
                  to={product.id}
                  onClick={() => dispatch(filterById(product.id))}
                >
                  <ProductCard product={product} />
                </Link>
              </li>
            ))
          : categoryAndGenderFilteredProducts.map((product) => (
              <li key={product.id}>
                <Link
                  to={product.id}
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
