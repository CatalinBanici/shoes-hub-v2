// REACT
import React from "react";

export default function ProductQuantity(props) {
  const { productCount, setProductCount, colorName, numberOfProducts } = props;

  return (
    <div className="m-4 flex flex-row">
      <h3 className="text-lg ">Choose Quantity:</h3>
      <div className="mx-4 flex flex-row items-center">
        <button
          disabled={productCount === 1 || !colorName}
          onClick={() => setProductCount((count) => count - 1)}
          className="h-7 w-7 rounded-full bg-gray-200 text-lg shadow-md disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-110 lg:hover:bg-gray-100 lg:disabled:hover:scale-100"
        >
          -
        </button>
        <span className="mx-2">{productCount}</span>
        <button
          onClick={() => setProductCount((count) => count + 1)}
          className="h-7 w-7 rounded-full bg-gray-200 text-lg shadow-md disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-110 lg:hover:bg-gray-100 lg:disabled:hover:scale-100"
          disabled={productCount === numberOfProducts || !colorName}
        >
          +
        </button>
      </div>
    </div>
  );
}
