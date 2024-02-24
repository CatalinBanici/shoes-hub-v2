// REACT
import { useEffect, useState } from "react";

// REACT ROUTER
import { Link } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { filterById } from "../../../../redux/features/slices/productsSlice";

// AOS
import aos from "aos";
import "aos/dist/aos.css";

// COMPONENTS
import ProductCard from "../product-card/ProductCard";
import PaginationButtons from "./sub-components/PaginationButtons";

export default function ProductsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    aos.init();
  }, []);

  // get filtered and sorted products from redux state
  const categoryAndGenderFilteredProducts = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  );
  const colorFilteredAndPriceSortedProducts = useSelector(
    (state) => state.products.colorFilteredAndPriceSortedProducts,
  );

  // this will render the products
  // initially, in the redux state, 'colorFilteredAndPriceSortedProducts'is a string of 'no-filters'
  // if a color filter or price sort is applied, it will turn into an array with those products corresponding to the filters that have been applied
  const displayProducts = Array.isArray(colorFilteredAndPriceSortedProducts)
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
      ));

  // pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
  function nextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }
  function prevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  return (
    // if 'colorFilteredAndPriceSortedProducts' is an empty array, there are no keywords that match in the search filter
    <div className="m-10 flex min-h-screen flex-col lg:col-span-3 lg:m-5 2xl:col-span-4">
      {!colorFilteredAndPriceSortedProducts.length ? (
        <h2 className="m-2 p-2 text-center text-lg text-gray-800 lg:m-5 lg:p-5 lg:text-2xl">
          No results!
        </h2>
      ) : (
        <ul className="items-top flex  min-h-screen flex-1 flex-wrap justify-around gap-x-20 gap-y-10">
          {displayProducts.slice(indexOfFirstItem, indexOfLastItem)}
        </ul>
      )}

      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}
