// REACT
import React from "react";

// REACT ICONS
import { FaArrowRight } from "react-icons/fa";

export default function PaginationButtons(props) {
  const { currentPage, totalPages, nextPage, prevPage } = props;

  return (
    <div className="my-16 flex w-full flex-row items-center justify-between sm:my-20">
      <button
        className={`${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-300"
            : "bg-amber-500 lg:hover:scale-105 lg:hover:bg-amber-400"
        } flex flex-row items-center rounded-md  px-4 py-2 text-base text-white lg:text-lg lg:transition lg:delay-75 lg:ease-out `}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        <FaArrowRight className="mx-2 rotate-180" aria-label="Previous Page" />
        <span className="hidden sm:block">Previous</span>
      </button>

      {/* above 640 px */}
      <div className="hidden sm:block">
        Page {currentPage} of {totalPages}
      </div>
      {/* below 640 px */}
      <div className="sm:hidden">
        {currentPage} / {totalPages}
      </div>

      <button
        className={`${
          currentPage === totalPages
            ? "bg-gray-300"
            : "bg-amber-500 lg:hover:scale-105 lg:hover:bg-amber-400"
        } flex flex-row items-center rounded-md  px-4 py-2 text-base text-white lg:text-lg lg:transition lg:delay-75 lg:ease-out `}
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        <span className="hidden sm:block">Next</span>
        <FaArrowRight className="mx-2" aria-label="Next Page" />
      </button>
    </div>
  );
}
