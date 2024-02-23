import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import data from "../../../data/data.json";

export default function Summary({
  cart,
  totalProductsAmount,
  totalProductsOldPrice,
  discountedProducts,
  totalProductsPrice,
  handleSubmit,
  isSubmitting,
}) {
  const [freeShipping, setFreeShipping] = useState(false);

  const shippingCost = data.misc.shippingCost;
  const minCostFreeShipping = data.misc.minimumPriceFreeShipping;
  const totalPrice = freeShipping
    ? totalProductsPrice
    : totalProductsPrice + shippingCost;

  useEffect(() => {
    if (totalProductsPrice >= minCostFreeShipping) {
      setFreeShipping(true);
    } else {
      setFreeShipping(false);
    }
  }, [totalProductsPrice]);

  return (
    <div className="lg:w-[35%]">
      <h2 className="m-3 text-lg font-medium sm:m-6 sm:text-xl">Summary:</h2>
      <div>
        {totalProductsAmount > 0 ? (
          <ul className="m-3 max-h-[50vh] overflow-auto rounded-md bg-white sm:m-5">
            {cart.map((item, index) => (
              <li
                className=" flex flex-row border-b-2 border-solid sm:my-2"
                key={index}
              >
                <div className="flex items-center justify-center">
                  <div className=" m-1 sm:m-3">x{item.amount}</div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="mr-3">
                    <img
                      className="max-h-10 min-h-10 min-w-10 max-w-10"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="flex flex-row items-center">
                      <strong className="mr-1">Color:</strong>{" "}
                      <span
                        className="mx-1 block h-4 w-4 rounded-full border-2 border-solid"
                        style={{ backgroundColor: `${item.colorValue}` }}
                      ></span>{" "}
                      {item.colorName.charAt(0).toUpperCase() +
                        item.colorName.slice(1)}
                    </p>
                    <p className="flex flex-row flex-wrap">
                      <span className="mr-2">
                        <strong className="text-gray-800">Price: </strong>
                        <span
                          className="mx-1 font-medium"
                          style={
                            item.discount ? { color: "RGB(77, 181, 67)" } : null
                          }
                        >
                          ${item.price}
                        </span>
                        {item.discount && (
                          <span className=" text-sm text-gray-500 line-through">
                            ${item.oldPrice}
                          </span>
                        )}
                      </span>

                      {item.amount > 1 && (
                        <span>
                          <strong className="text-gray-800">
                            Total Price:{" "}
                          </strong>
                          <span
                            className="mx-1 font-medium"
                            style={
                              item.discount
                                ? { color: "RGB(77, 181, 67)" }
                                : null
                            }
                          >
                            ${item.totalPrice}
                          </span>
                          {item.discount && (
                            <span className="text-sm text-gray-500 line-through">
                              ${item.totalOldPrice}
                            </span>
                          )}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h3 className="m-3 sm:m-5">
            There are no products in your Shopping Bag!
          </h3>
        )}
      </div>
      {totalProductsAmount > 0 && (
        <section className="my-5 w-full ">
          <ul className="m-3 sm:m-5">
            <li className="my-2 flex w-full flex-row items-center">
              <strong className="flex-1">Amount:</strong>{" "}
              <span className="flex-1 font-medium">{totalProductsAmount}</span>
            </li>
            <li className="my-2 flex w-full flex-row items-center">
              <strong className="flex-1">Products:</strong>{" "}
              <div className="flex flex-1 flex-col">
                <span
                  className=" text-base font-medium sm:text-lg"
                  style={
                    discountedProducts.length
                      ? { color: "RGB(77, 181, 67)" }
                      : null
                  }
                >
                  ${totalProductsPrice}
                  {discountedProducts.length > 0 ? (
                    <span className="ml-1 text-sm text-gray-500 line-through sm:text-base">
                      ${totalProductsOldPrice}
                    </span>
                  ) : null}
                </span>
                {discountedProducts.length > 0 && (
                  <span>
                    You save:{" "}
                    <strong>
                      ${totalProductsOldPrice - totalProductsPrice}
                    </strong>
                  </span>
                )}
              </div>
            </li>
            <li className="my-2 flex w-full flex-row items-center">
              <strong className="flex-1">Shipping:</strong>
              {freeShipping ? (
                <span
                  className=" flex-1 text-base font-medium sm:text-lg"
                  style={{ color: "RGB(77, 181, 67)" }}
                >
                  FREE{" "}
                  <span className="text-base text-gray-500 line-through sm:text-lg">
                    ${shippingCost}
                  </span>
                </span>
              ) : (
                <span className=" flex-1 text-base font-medium sm:text-lg">
                  ${shippingCost}
                </span>
              )}
            </li>
            <hr />
            <li className="my-2 flex w-full flex-row items-center">
              <strong className="flex-1">Total Cost:</strong>
              <span className="flex-1 text-xl font-medium">${totalPrice}</span>
            </li>
          </ul>
          <div className="m-3 flex items-center justify-center sm:m-5">
            <button
              className=" flex w-full items-center justify-center rounded-md bg-amber-500 p-3 text-xl text-white disabled:bg-gray-300 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400 lg:disabled:hover:bg-gray-300"
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ClipLoader color="#ffffff" size={28} />
              ) : (
                "Place Order"
              )}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
