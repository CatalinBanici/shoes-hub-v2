// REACT
import React from "react";

// REACT ROUTER
import { useNavigate } from "react-router-dom";

// REDUX
import { addToCart } from "../../../../../redux/features/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function BuyButtons(props) {
  const {
    product,
    numberOfProducts,
    sizeNumber,
    colorName,
    colorValue,
    colorImage,
    productCount,
    errorMessage,
    setErrorMessage,
  } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex h-20 w-full items-center justify-around">
        <button
          className="rounded-xl border-2 border-solid border-amber-500 bg-amber-500 px-5 py-2 text-lg text-white lg:px-14 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:border-amber-400 lg:hover:bg-amber-400 "
          onClick={() => {
            numberOfProducts &&
              dispatch(
                addToCart({
                  id: product[0].id,
                  name: product[0].name,
                  img: product[0].gallery.main,
                  sizeNumber: sizeNumber,
                  colorName: colorName,
                  colorValue: colorValue,
                  colorImage: colorImage,
                  price: product[0].price.current,
                  oldPrice: product[0].price.old,
                  totalPrice: product[0].price.current,
                  totalOldPrice:
                    product[0].price.discount && product[0].price.old,
                  discount: product[0].price.discount,
                  numberOfProducts: numberOfProducts,
                  amount: productCount,
                }),
              );
            !numberOfProducts && setErrorMessage("You must pick a color!");
            numberOfProducts && navigate("/checkout");
          }}
        >
          Buy Now
        </button>
        <button
          className="rounded-lg border-2 border-gray-400 px-5 py-2 text-lg text-gray-800 lg:px-14 lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:border-gray-300"
          onClick={() => {
            numberOfProducts &&
              dispatch(
                addToCart({
                  id: product[0].id,
                  name: product[0].name,
                  img: product[0].gallery.main,
                  sizeNumber: sizeNumber,
                  colorName: colorName,
                  colorValue: colorValue,
                  colorImage: colorImage,
                  price: product[0].price.current,
                  oldPrice: product[0].price.old,
                  totalPrice: product[0].price.current,
                  totalOldPrice: product[0].price.old,
                  discount: product[0].price.discount,
                  numberOfProducts: numberOfProducts,
                  amount: productCount,
                }),
              );
            !numberOfProducts && setErrorMessage("You must pick a color!");
          }}
        >
          Add to Cart
        </button>
      </div>
      {!numberOfProducts && <p className="mx-4 text-red-500">{errorMessage}</p>}
    </div>
  );
}
