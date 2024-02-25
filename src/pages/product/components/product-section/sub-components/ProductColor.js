// REACT
import React from "react";

export default function ProductColor(props) {
  const {
    selectedProductStock,
    colorName,
    setColorName,
    setColorValue,
    setColorImage,
    setNumberOfProducts,
    setProductCount,
  } = props;

  return (
    <div className="relative mt-5 px-2 ">
      <h2 className="my-3 text-xl">Select a color:</h2>
      <div className="flex   flex-row flex-wrap gap-4">
        {selectedProductStock.colors.map((element, index) => (
          <div className="h-[125px]" key={index}>
            <div className="flex w-full items-center justify-center">
              <label className="" htmlFor={index}>
                {element.colorName.charAt(0).toUpperCase() +
                  element.colorName.slice(1)}
              </label>
            </div>

            <div className="relative h-20 w-20">
              <input
                className="peer relative z-10 h-full w-full  cursor-pointer opacity-0 disabled:cursor-not-allowed "
                id={index}
                name="color"
                type="radio"
                disabled={element.numberOfItems <= 0}
                onChange={() => {
                  setColorName(element.colorName);
                  setColorValue(element.colorValue);
                  setColorImage(element.colorImage);
                  setNumberOfProducts(element.numberOfItems);
                  setProductCount(1);
                }}
                checked={element.colorName === colorName}
              />
              <img
                className={`${
                  element.numberOfItems <= 0 && " opacity-50"
                } border-gray absolute left-0 top-0 h-full w-full border-2 peer-checked:border-gray-800  peer-disabled:border-red-500 lg:transition lg:delay-75 lg:ease-out lg:peer-hover:border-gray-400`}
                src={`${element.colorImage}`}
                alt={`${element.colorName}`}
              />
            </div>
            <div className="text-center text-sm text-red-500">
              {(element.numberOfItems <= 0 && "Out of stock!") ||
                (element.numberOfItems <= 3 &&
                  `Only ${element.numberOfItems} left`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
