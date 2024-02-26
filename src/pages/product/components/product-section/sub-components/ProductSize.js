export default function ProductSize(props) {
  const {
    stock,
    selectedProductStock,
    setSelectedProductStock,
    setSizeNumber,
    setNumberOfProducts,
    setColorName,
    setColorValue,
    setProductCount,
    setErrorMessage,
  } = props;

  return (
    <div className="relative my-5 px-2">
      <h2 className="my-3 text-xl">Select a size:</h2>
      <div className="flex flex-row flex-wrap">
        {stock.map((stockItem, index) => (
          <div className="relative m-2 h-10 w-10 " key={index}>
            <input
              className="peer peer relative left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0 "
              type="radio"
              id={index}
              name="size"
              onChange={() => {
                setSelectedProductStock(stock[index]);
                setSizeNumber(stockItem.size);
                setNumberOfProducts(0);
                setColorName("");
                setColorValue("");
                setProductCount(1);
                setErrorMessage("");
              }}
              checked={stockItem.size === selectedProductStock.size}
            />
            <label className="absolute left-0 top-0  flex h-full  w-full items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-gray-600 lg:transition lg:delay-75 lg:ease-out lg:peer-hover:bg-gray-200">
              {stockItem.size}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
