// REACT ICONS
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CartButtons(props) {
  const { totalProductsAmount, resetCart, navigate, dispatch } = props;

  return (
    <>
      {totalProductsAmount > 0 && (
        <div className="relative flex flex-col">
          <button
            className="absolute right-0 m-2 p-2 text-base lg:text-xl lg:transition lg:delay-75 lg:ease-out lg:hover:text-gray-600 lg:hover:underline"
            onClick={() => dispatch(resetCart())}
          >
            Clear All
          </button>
          <button
            className="m-5 mt-14 flex flex-row items-center self-center rounded-lg bg-amber-500 px-16 py-3 text-white sm:mt-5  lg:px-20 lg:py-4 lg:text-xl lg:transition lg:delay-75 lg:ease-out lg:hover:scale-105 lg:hover:bg-amber-400"
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
    </>
  );
}
