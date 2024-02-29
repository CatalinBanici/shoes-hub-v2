// REACT ICONS
import { IoIosArrowDown } from "react-icons/io";
import {
  filterByCategory,
  resetCategoryAndGenderFilteredProducts,
} from "../../../../../redux/features/slices/productsSlice";

export default function DesktopCategories(props) {
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
    // 'DesktopCategories' will render only when window width is OVER 1024px
    <div className="hidden lg:sticky lg:top-28 lg:flex  lg:h-max lg:flex-col ">
      <div className=" my-14">
        <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
      </div>

      {/* all */}
      <div className="my-4 flex w-full flex-col items-start ">
        <button
          className="group relative my-2 w-full"
          onClick={() => {
            setShowAllCategories((current) => !current);
            setShowFemaleCategories(false);
            setShowMaleCategories(false);
            dispatch(resetCategoryAndGenderFilteredProducts());
            dispatch(resetFilterByColorAndSortByPrice());
          }}
        >
          <span
            className={`flex w-full flex-row items-center justify-start text-lg duration-300 ease-out hover:translate-x-2 ${
              showAllCategories
                ? "translate-x-2 font-medium italic text-black "
                : "font-regular text-gray-700"
            }`}
          >
            All{" "}
            <span className="ml-2">
              <IoIosArrowDown className={showAllCategories && "rotate-180"} />
            </span>
          </span>
          <div
            className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
              showAllCategories && "scale-x-100 bg-gray-300"
            }`}
          />
        </button>
        {showAllCategories && (
          <div className="m-2 flex w-full flex-col items-start">
            {allCategoriesType.map((category, index) => (
              <button
                className="group relative my-2 w-full text-left"
                key={index}
                onClick={() => {
                  dispatch(filterByCategory(category.toLowerCase()));
                  dispatch(resetFilterByColorAndSortByPrice());
                }}
              >
                <span
                  className={`text-md font-regular block w-full duration-300 ease-out hover:translate-x-2 ${
                    selectedCategoryType.toString() === category
                      ? "translate-x-2 font-medium italic text-black"
                      : "text-gray-700"
                  } `}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <div
                  className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
                    selectedCategoryType.toString() === category &&
                    "scale-x-100 bg-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* men */}
      <div className="my-4 flex w-full flex-col items-start ">
        <button
          className="group relative my-2 w-full"
          onClick={() => {
            setShowMaleCategories((current) => !current);
            setShowFemaleCategories(false);
            setShowAllCategories(false);
            dispatch(filterByGender("male"));
            dispatch(resetFilterByColorAndSortByPrice());
          }}
        >
          <span
            className={`flex w-full flex-row items-center justify-start text-lg duration-300 ease-out hover:translate-x-2 ${
              showMaleCategories
                ? "translate-x-2 font-medium italic text-black "
                : "font-regular text-gray-700"
            }`}
          >
            Men{" "}
            <span className="ml-2">
              <IoIosArrowDown className={showMaleCategories && "rotate-180"} />
            </span>
          </span>
          <div
            className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
              showMaleCategories && "scale-x-100 bg-gray-300"
            }`}
          />
        </button>
        {showMaleCategories && (
          <div className="m-2 flex w-full flex-col items-start">
            {maleCategoriesType.map((category, index) => (
              <button
                className="group relative my-2 w-full text-left"
                key={index}
                onClick={() => {
                  dispatch(filterByCategoryMale(category.toLowerCase()));
                  dispatch(resetFilterByColorAndSortByPrice());
                }}
              >
                <span
                  className={`text-md font-regular block w-full duration-300 ease-out hover:translate-x-2 ${
                    selectedCategoryType.toString() === category
                      ? "translate-x-2 font-medium italic text-black"
                      : "text-gray-700"
                  } `}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <div
                  className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
                    selectedCategoryType.toString() === category &&
                    "scale-x-100 bg-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* women */}
      <div className="my-4 flex w-full flex-col items-start ">
        <button
          className="group relative my-2 w-full"
          onClick={() => {
            setShowFemaleCategories((current) => !current);
            setShowMaleCategories(false);
            setShowAllCategories(false);
            dispatch(filterByGender("female"));
            dispatch(resetFilterByColorAndSortByPrice());
          }}
        >
          <span
            className={`flex w-full flex-row items-center justify-start text-lg duration-300 ease-out hover:translate-x-2 ${
              showFemaleCategories
                ? "translate-x-2 font-medium italic text-black "
                : "font-regular text-gray-700"
            }`}
          >
            Women{" "}
            <span className="ml-2">
              <IoIosArrowDown
                className={showFemaleCategories && "rotate-180"}
              />
            </span>
          </span>
          <div
            className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
              showFemaleCategories && "scale-x-100 bg-gray-300"
            }`}
          />
        </button>
        {showFemaleCategories && (
          <div className="m-2 flex w-full flex-col items-start">
            {femaleCategoriesType.map((category, index) => (
              <button
                className="group relative my-2 w-full text-left"
                key={index}
                onClick={() => {
                  dispatch(filterByCategoryFemale(category.toLowerCase()));
                  dispatch(resetFilterByColorAndSortByPrice());
                }}
              >
                <span
                  className={`text-md font-regular block w-full duration-300 ease-out hover:translate-x-2 ${
                    selectedCategoryType.toString() === category
                      ? "translate-x-2 font-medium italic text-black"
                      : "text-gray-700"
                  } `}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <div
                  className={`absolute bottom-0 h-0.5 w-full origin-left scale-x-0 duration-300 ease-out group-hover:scale-x-100 group-hover:bg-gray-800 ${
                    selectedCategoryType.toString() === category &&
                    "scale-x-100 bg-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
