export default function ApplyReset(props) {
  const {
    searchInputRef,
    filterAndSortValues,
    colors,
    setFilteredColors,
    setPriceType,
    filterByColorAndSortByPrice,
    resetFilterByColorAndSortByPrice,
    dispatch,
  } = props;

  return (
    <div className="col-span-2 flex flex-row">
      <button
        onClick={() => {
          dispatch(filterByColorAndSortByPrice(filterAndSortValues));
          searchInputRef.current.value = "";
        }}
        className="m-2 rounded-md bg-gray-200 p-2 text-gray-800 shadow-md disabled:cursor-not-allowed disabled:bg-transparent disabled:text-gray-400 disabled:shadow-none lg:transition lg:delay-75 lg:ease-out lg:hover:bg-gray-100 disabled:lg:hover:bg-white"
        disabled={
          !filterAndSortValues.filterByColor.length &&
          filterAndSortValues.sortByPrice === "none"
        }
      >
        Apply
      </button>
      <button
        onClick={() => {
          dispatch(resetFilterByColorAndSortByPrice());
          setFilteredColors(colors);
          setPriceType("none");
          searchInputRef.current.value = "";
        }}
        className="m-2 p-2 text-gray-800 disabled:text-gray-400  lg:hover:underline"
      >
        Reset
      </button>
    </div>
  );
}
