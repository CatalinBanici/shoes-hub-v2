import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalProductsAmount = useSelector(
    (state) => state.cart.totalProductsAmount,
  );
  const totalProductsPrice = useSelector(
    (state) => state.cart.totalProductsPrice,
  );

  console.log("cart", cart);
  console.log("totalProductsAmount", totalProductsAmount);
  console.log("totalProductsPrice", totalProductsPrice);

  return (
    <div className="relative top-[64px] min-h-screen sm:top-[80px]">
      <div className="m-2 flex flex-row items-center justify-between  text-gray-800">
        <h2 className="m-2 text-lg font-bold sm:text-xl ">Shopping Bag</h2>
        <h3 className="text-md m-2 font-medium sm:text-lg ">
          Total Products: {totalProductsAmount}
        </h3>
        <h3 className="text-md m-2 font-medium sm:text-lg ">
          Total Price: ${totalProductsPrice}
        </h3>
      </div>

      <div className="m-2 rounded-lg bg-white p-2 text-gray-800">
        {totalProductsAmount > 0 ? (
          <ul>
            {cart.map((item) => (
              <li
                className="flex w-full flex-row items-center border-b-2"
                key={item.id}
              >
                <div className="flex w-10 flex-col items-center justify-center sm:mx-3 sm:text-xl md:mx-6">
                  <button>
                    <IoIosArrowUp />
                  </button>
                  <div>x{item.amount}</div>
                  <button>
                    <IoIosArrowDown />
                  </button>
                </div>
                <div>
                  <div className="relative overflow-hidden">
                    <img
                      className=" h-20 w-20 sm:h-32 sm:w-32"
                      src={item.img}
                      alt={item.name}
                    />
                    {item.oldPrice && (
                      <div className="absolute left-[-20px] top-[-3px] w-[60px] -rotate-45 bg-black text-center text-white">
                        %
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-1 sm:mx-5">
                  <h3 className=" my-2 text-lg font-medium">{item.name}</h3>
                  <div>
                    <div className="my-2 flex flex-row flex-wrap items-center">
                      <strong className="text-gray-500">Color:</strong>
                      <img
                        className="ml-1 h-10 w-10 sm:h-14 sm:w-14"
                        src={item.colorImage}
                        alt={`Product Color: ${item.colorName}`}
                      />
                      <span className="ml-1">
                        {item.colorName.charAt(0).toUpperCase() +
                          item.colorName.slice(1)}
                      </span>{" "}
                    </div>
                    <p className="my-2">
                      <strong className="text-gray-500">Size:</strong>{" "}
                      {item.sizeNumber}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <p className="my-2">
                        <strong className="text-gray-500">Price: </strong>
                        <span
                          className="mx-1 font-medium"
                          style={
                            item.oldPrice ? { color: "RGB(77, 181, 67)" } : null
                          }
                        >
                          ${item.price}
                        </span>
                        {item.oldPrice && (
                          <span className=" text-sm text-gray-500 line-through">
                            ${item.oldPrice}
                          </span>
                        )}
                      </p>
                      {item.amount > 1 && (
                        <p className=" my-2">
                          <strong className="text-gray-500">
                            Total Price:{" "}
                          </strong>
                          <span
                            className="mx-1 font-medium"
                            style={
                              item.oldPrice
                                ? { color: "RGB(77, 181, 67)" }
                                : null
                            }
                          >
                            ${item.totalPrice}
                          </span>
                          {item.totalOldPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ${item.totalOldPrice}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex w-10 items-center justify-center sm:mx-3 md:mx-6">
                  <button title="Remove from Shopping Bag">
                    <TiDelete className=" text-3xl text-red-500  sm:text-4xl" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h3 className="mx-5 my-20 text-center text-lg text-gray-800 sm:text-2xl">
            Your Shopping Bag is Empty!
          </h3>
        )}
      </div>
    </div>
  );
}
