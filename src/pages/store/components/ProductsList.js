// REDUX
import { useDispatch, useSelector } from "react-redux";
import { filterById } from "../../../redux/features/slices/productsSlice";

// REACT ROUTER
import { Link } from "react-router-dom";

// COMPONENTS
import ProductCard from "./ProductCard";

import aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa";

import data from "../../../data/data.json";

export default function ProductsList() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const categoryAndGenderFilteredProducts = useSelector(
    (state) => state.products.categoryAndGenderFilteredProducts,
  );
  const colorFilteredAndPriceSortedProducts = useSelector(
    (state) => state.products.colorFilteredAndPriceSortedProducts,
  );

  // const currentItems = categoryAndGenderFilteredProducts.slice(
  //   indexOfFirstItem,
  //   indexOfLastItem,
  // );

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

  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div className="m-10 flex flex-col lg:col-span-3 lg:m-5 2xl:col-span-4">
      <ul className="items-top flex  min-h-screen flex-1 flex-wrap justify-around gap-x-20 gap-y-10">
        {displayProducts.slice(indexOfFirstItem, indexOfLastItem)}
        {!colorFilteredAndPriceSortedProducts.length && (
          <div>
            <h2 className="m-2 p-2 text-lg text-gray-800 lg:m-5 lg:p-5 lg:text-2xl">
              No results that match your keywords!
            </h2>
          </div>
        )}
      </ul>
      <div className="my-16 flex w-full flex-row items-center justify-between sm:my-20">
        <button
          className={`${
            currentPage === 1
              ? "bg-gray-300"
              : "bg-amber-500 lg:hover:scale-105 lg:hover:bg-amber-400"
          } flex flex-row items-center rounded-md  px-4 py-2 text-base text-white lg:text-lg lg:transition lg:delay-75 lg:ease-out `}
          // className="rounded-md bg-amber-500 px-2 py-1 text-base text-white disabled:bg-gray-300 lg:px-4 lg:py-2 lg:text-lg lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400 lg:disabled:hover:scale-100 lg:disabled:hover:bg-gray-300"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FaArrowRight
            className="mx-2 rotate-180"
            aria-label="Previous Page"
          />
          <span className="hidden sm:block">Previous</span>
        </button>
        <div className="hidden sm:block">
          Page {currentPage} of {totalPages}
        </div>
        <div className="sm:hidden">
          {currentPage} / {totalPages}
        </div>
        <button
          className={`${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-amber-500 lg:hover:scale-105 lg:hover:bg-amber-400"
          } flex flex-row items-center rounded-md  px-4 py-2 text-base text-white lg:text-lg lg:transition lg:delay-75 lg:ease-out `}
          // className="rounded-md bg-amber-500 px-2 py-1 text-base text-white disabled:bg-gray-300 lg:px-4 lg:py-2 lg:text-lg lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400 lg:disabled:hover:scale-100 lg:disabled:hover:bg-gray-300"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <span className="hidden sm:block">Next</span>

          <FaArrowRight className="mx-2" aria-label="Next Page" />
        </button>
      </div>
    </div>
  );
}
