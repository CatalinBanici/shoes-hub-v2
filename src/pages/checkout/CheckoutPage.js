import React from "react";
import { useSelector } from "react-redux";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart.cart);
  const totalProductsAmount = useSelector(
    (state) => state.cart.totalProductsAmount,
  );
  const totalProductsPrice = useSelector(
    (state) => state.cart.totalProductsPrice,
  );

  return (
    <div className="relative top-[64px] text-gray-800 sm:top-[80px]">
      <div>
        <h2 className="m-3 text-lg font-medium sm:m-6 sm:text-xl">Summary:</h2>
        <div>
          {totalProductsAmount > 0 ? (
            <ul className="m-2 max-h-[50vh] overflow-auto rounded-md bg-white sm:m-5">
              {cart.map((item, index) => (
                <>
                  <li className="flex flex-row sm:my-2 " key={index}>
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
                                item.discount
                                  ? { color: "RGB(77, 181, 67)" }
                                  : null
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
                  <hr />
                </>
              ))}
            </ul>
          ) : (
            <h3>There are no products in your Shopping Bag!</h3>
          )}
          <div className="flex w-full flex-row justify-between">
            <h3 className="font medium text-md mx-3 sm:mx-6 sm:text-lg">
              Total Products: {totalProductsAmount}
            </h3>
            <h3 className="font medium text-md mx-3 sm:mx-6 sm:text-lg">
              Total Price: ${totalProductsPrice}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
