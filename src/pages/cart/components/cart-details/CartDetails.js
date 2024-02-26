export default function CartDetails(props) {
  const {
    totalProductsAmount,
    totalProductsPrice,
    totalProductsOldPrice,
    discountedProducts,
  } = props;

  return (
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
  );
}
