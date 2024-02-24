// REACT
import React from "react";

export default function ProductCard({ product }) {
  // get each individual color from the products to be renderd in the product card
  const stock = product.stock.map((e) => e);
  const colorValues = stock[1].colors.map((e) => e.colorValue);

  //get the discount % if there is any
  const substract = product.price.current - product.price.old;
  const discount = (substract / product.price.old) * 100;

  return (
    <div className=" flex h-[350px] w-60 flex-col rounded-lg bg-white shadow-xl duration-150 ease-out lg:hover:scale-105">
      <div className="relative overflow-hidden border-b-2">
        {product.price.discount && (
          <span className="absolute -left-7 top-5 w-32 rotate-[320deg] bg-black text-center text-sm text-white">
            {Math.abs(Math.trunc(discount))}% off
          </span>
        )}
        <img
          className=" h-60 w-60 rounded-t-lg"
          src={product.gallery.main}
          alt={product.name}
        />
      </div>
      <div className="flex h-max flex-col">
        <div className="my-2">
          <h3 className=" text-md mx-2 text-center font-semibold">
            {product.name}
          </h3>
        </div>
        <div className="m-2 flex  flex-row items-center justify-between">
          <div className="flex  flex-row">
            {colorValues.map((color, index) => (
              <div
                key={index}
                className="ml-1 h-4 w-4 rounded-full border-2 border-gray-300"
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
          <div className="flex flex-row items-center">
            <div
              className="mx-2 text-xl font-medium"
              style={
                product.price.discount ? { color: "RGB(77, 181, 67)" } : null
              }
            >
              {"$" + product.price.current}
            </div>
            {product.price.discount && (
              <div className=" mx-2 text-sm text-gray-600 line-through">
                ${product.price.old}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
