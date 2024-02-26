export default function PriceSort(props) {
  const { priceType, priceSort } = props;

  return (
    <div
      className="m-2 flex max-w-fit flex-row items-center  justify-center rounded-md bg-gray-200 shadow-md"
      onChange={priceSort}
    >
      <label
        className=" relative z-20 mx-1  rounded-md p-2 text-gray-800 lg:transition lg:delay-75 lg:ease-out lg:hover:bg-gray-100"
        htmlFor="price-asc"
      >
        {"Price (asc)"}
        <input
          className=" peer absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
          name="price-sort"
          id="price-asc"
          type="radio"
          value="price-asc"
          checked={priceType === "price-asc"}
        />
        <span className="absolute left-0 top-0 -z-20 h-full w-full peer-checked:rounded-md peer-checked:border-2 peer-checked:border-solid peer-checked:border-gray-800"></span>
      </label>
      <label
        className=" relative z-20 mx-1  rounded-md p-2 text-gray-800 lg:transition lg:delay-75 lg:ease-out lg:hover:bg-gray-100"
        htmlFor="price-desc"
      >
        {"Price (desc)"}
        <input
          className="  peer absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
          name="price-sort"
          id="price-desc"
          type="radio"
          value="price-desc"
          checked={priceType === "price-desc"}
        />
        <span className="absolute left-0 top-0 -z-20 h-full w-full peer-checked:rounded-md peer-checked:border-2 peer-checked:border-solid peer-checked:border-gray-800"></span>
      </label>
    </div>
  );
}
