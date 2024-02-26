// REACT SPINNERS
import { ClipLoader } from "react-spinners";

export default function TotalSummary(props) {
  const {
    totalProductsAmount,
    totalProductsPrice,
    totalProductsOldPrice,
    totalPrice,
    discountedProducts,
    freeShipping,
    shippingCost,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <>
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
    </>
  );
}
