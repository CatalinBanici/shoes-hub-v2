import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {
  modifyCartAmount,
  removeFromCart,
  resetCart,
} from "../../redux/features/slices/cartSlice";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalProductsAmount = useSelector(
    (state) => state.cart.totalProductsAmount,
  );
  const totalProductsPrice = useSelector(
    (state) => state.cart.totalProductsPrice,
  );
  const totalProductsOldPrice = useSelector(
    (state) => state.cart.totalProductsOldPrice,
  );

  const discountedProducts = cart.filter((item) => item.discount);

  return (
    <div className="relative top-[64px] min-h-screen max-w-[1024px] sm:top-[80px] lg:m-auto">
      <div className="m-2 flex flex-row items-center justify-between  text-gray-800">
        <h2 className="m-2 text-lg font-bold sm:text-xl ">Shopping Bag</h2>
        <h3 className="m-2 text-base font-medium sm:text-lg ">
          Total Products: {totalProductsAmount}
        </h3>
        <h3 className="text-md m-2 flex flex-row flex-wrap items-center font-medium sm:text-lg ">
          Total Price:
          <span
            className="ml-2"
            style={
              discountedProducts.length ? { color: "RGB(77, 181, 67)" } : null
            }
          >
            ${totalProductsPrice}
          </span>
          {discountedProducts.length > 0 && (
            <span className="ml-1 text-sm text-gray-500 line-through sm:text-base">
              ${totalProductsOldPrice}
            </span>
          )}
        </h3>
      </div>

      <div className="m-2 rounded-lg bg-white p-2 text-gray-800">
        {totalProductsAmount > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li
                className="flex w-full flex-row items-center border-b-2"
                key={index}
              >
                <div className="flex w-10 flex-col items-center justify-center sm:mx-3 sm:text-xl md:mx-6">
                  <button
                    className="disabled:cursor-not-allowed disabled:text-gray-400 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-125 lg:hover:text-gray-500 lg:disabled:hover:scale-100 lg:disabled:hover:text-gray-400"
                    onClick={() => dispatch(modifyCartAmount([item, "+"]))}
                    disabled={item.amount >= cart[index].numberOfProducts}
                  >
                    <IoIosArrowUp />
                  </button>
                  <div>x{item.amount}</div>
                  <button
                    className="disabled:cursor-not-allowed disabled:text-gray-400 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-125 lg:hover:text-gray-500 lg:disabled:hover:scale-100 lg:disabled:hover:text-gray-400"
                    onClick={() => dispatch(modifyCartAmount([item, "-"]))}
                    disabled={item.amount === 1}
                  >
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
                    {item.discount && (
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
                      </p>
                      {item.amount > 1 && (
                        <p className=" my-2">
                          <strong className="text-gray-500">
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
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex w-10 items-center justify-center sm:mx-3 md:mx-6">
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    title="Remove from Shopping Bag"
                    aria-label="Remove from Shopping Bag"
                  >
                    <TiDelete className=" text-3xl text-red-500 sm:text-4xl lg:transition lg:delay-75 lg:ease-out lg:hover:scale-110  lg:hover:text-red-400" />
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

      {totalProductsAmount > 0 && (
        <div className="flex flex-col">
          <button
            className="m-5 flex flex-row items-center self-center rounded-lg bg-amber-500 px-16 py-3 text-white  lg:px-20 lg:py-4 lg:text-xl lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400"
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
            <span>
              {" "}
              <IoIosArrowRoundForward className="ml-2 text-xl lg:text-3xl" />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
