// REACT ICONS
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";

export default function FiltersHead(props) {
  const {
    showFilters,
    setShowFilters,
    setFilteredColors,
    setPriceType,
    searchInputRef,
    filterBySearch,
    colors,
    dispatch,
  } = props;

  return (
    <div className="flex flex-col-reverse items-center justify-around sm:flex-row lg:w-[50%] lg:justify-end">
      <button
        className={`m-2 flex h-8 w-full max-w-[200px] flex-row items-center  justify-around rounded-lg border-2 border-solid border-gray-800 px-2 py-px sm:w-[50%] sm:max-w-60 lg:hidden ${
          showFilters ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
        onClick={() => setShowFilters((curr) => !curr)}
      >
        <span>Filter / Sort</span>
        <span className="flex flex-row">
          <IoIosArrowDown className={showFilters && "rotate-180"} />
        </span>
      </button>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="m-2 flex h-8 max-w-[200px] flex-row rounded-lg border-2 border-solid border-gray-800 bg-gray-100 sm:w-[50%] sm:max-w-60 lg:w-full lg:max-w-full "
      >
        <input
          className="  w-full rounded-lg   px-2 py-px outline-none"
          type="search"
          placeholder="Search..."
          ref={searchInputRef}
        />
        <button
          className=" rounded-br-md rounded-tr-md px-2 lg:transition lg:delay-75 lg:ease-out lg:hover:bg-gray-200"
          onClick={() => {
            searchInputRef.current.value &&
              dispatch(filterBySearch(searchInputRef.current.value));
            setFilteredColors(colors);
            setPriceType("none");
          }}
        >
          <IoMdSearch />
        </button>
      </form>
    </div>
  );
}
