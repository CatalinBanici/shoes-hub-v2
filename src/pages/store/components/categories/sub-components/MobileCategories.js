import {
  filterByCategory,
  resetCategoryAndGenderFilteredProducts,
} from "../../../../../redux/features/slices/productsSlice";

export default function MobileCategories(props) {
  const {
    showAllCategories,
    setShowAllCategories,
    showMaleCategories,
    setShowMaleCategories,
    showFemaleCategories,
    setShowFemaleCategories,
    allCategoriesType,
    maleCategoriesType,
    femaleCategoriesType,
    selectedCategoryType,
    filterByGender,
    filterByCategoryMale,
    filterByCategoryFemale,
    resetFilterByColorAndSortByPrice,
    dispatch,
  } = props;

  return (
    // 'MobileCategories' will render only when window width is UNDER 1024px
    <div className="sticky top-[150px] flex w-full flex-col items-center lg:hidden">
      <h2 className="m-2 text-lg font-bold text-gray-800">Categories</h2>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-row flex-wrap justify-around">
          <button
            className={`${
              (showAllCategories && " bg-gray-800 text-white") ||
              " bg-white text-gray-800"
            } m-2 rounded-full border-2 border-solid border-gray-800 px-6 py-px`}
            onClick={() => {
              dispatch(resetCategoryAndGenderFilteredProducts());
              setShowAllCategories((current) => !current);
              setShowFemaleCategories(false);
              setShowMaleCategories(false);
              dispatch(resetFilterByColorAndSortByPrice());
            }}
          >
            All
          </button>

          <button
            className={`${
              (showMaleCategories && " bg-gray-800 text-white") ||
              " bg-white text-gray-800"
            } m-2 rounded-full border-2 border-solid border-gray-800 px-6 py-px`}
            onClick={() => {
              dispatch(filterByGender("male"));
              setShowMaleCategories((current) => !current);
              setShowFemaleCategories(false);
              setShowAllCategories(false);
              dispatch(resetFilterByColorAndSortByPrice());
            }}
          >
            Men
          </button>

          <button
            className={`${
              (showFemaleCategories && " bg-gray-800 text-white") ||
              " bg-white text-gray-800"
            } m-2 rounded-full border-2 border-solid border-gray-800 px-6 py-px`}
            onClick={() => {
              dispatch(filterByGender("female"));
              setShowFemaleCategories((current) => !current);
              setShowMaleCategories(false);
              setShowAllCategories(false);
              dispatch(resetFilterByColorAndSortByPrice());
            }}
          >
            Women
          </button>
        </div>

        {showMaleCategories || showFemaleCategories || showAllCategories ? (
          <div className="flex w-full flex-row overflow-x-auto">
            {(showAllCategories &&
              allCategoriesType.map((category, index) => (
                <button
                  className={`m-2 min-w-fit rounded-full border-2 border-solid border-gray-800 px-6 py-px ${
                    selectedCategoryType.toString() === category
                      ? " bg-gray-800 text-white"
                      : " bg-white text-gray-800"
                  }`}
                  key={index}
                  onClick={() => {
                    dispatch(filterByCategory(category.toLowerCase()));
                    dispatch(resetFilterByColorAndSortByPrice());
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))) ||
              (showMaleCategories &&
                maleCategoriesType.map((category, index) => (
                  <button
                    className={`m-2 min-w-fit rounded-full border-2 border-solid border-gray-800 px-6 py-px ${
                      selectedCategoryType.toString() === category
                        ? " bg-gray-800 text-white"
                        : " bg-white text-gray-800"
                    }`}
                    key={index}
                    onClick={() => {
                      dispatch(filterByCategoryMale(category.toLowerCase()));
                      dispatch(resetFilterByColorAndSortByPrice());
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))) ||
              (showFemaleCategories &&
                femaleCategoriesType.map((category, index) => (
                  <button
                    className={`m-2 min-w-fit rounded-full border-2 border-solid border-gray-800 px-6 py-px ${
                      selectedCategoryType.toString() === category
                        ? " bg-gray-800 text-white"
                        : " bg-white text-gray-800"
                    }`}
                    key={index}
                    onClick={() => {
                      dispatch(filterByCategoryFemale(category.toLowerCase()));
                      dispatch(resetFilterByColorAndSortByPrice());
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                )))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
