// REACT
import React from "react";

// REACT ICONS
import { IoIosArrowDown } from "react-icons/io";

export default function ColorFilter(props) {
  const {
    colorMenu,
    setColorMenu,
    colorMenuRef,
    colorButtonRef,
    filteredColors,
    toggleColor,
  } = props;

  return (
    <div className="relative m-2 flex min-w-fit flex-col items-center justify-center ">
      <button
        className={`${
          colorMenu
            ? "  border-gray-800 bg-gray-200 lg:hover:border-gray-600 lg:hover:bg-gray-100"
            : "border-gray-200 bg-gray-200 lg:hover:border-gray-100 lg:hover:bg-gray-100"
        } flex flex-row items-center justify-center rounded-md border-2 border-solid p-2 text-gray-800 shadow-md lg:transition lg:delay-75 lg:ease-out`}
        ref={colorButtonRef}
        onClick={() => setColorMenu((cur) => !cur)}
      >
        Filter by Color{" "}
        <IoIosArrowDown className={`${colorMenu && "rotate-180"} ml-1`} />
      </button>
      {colorMenu && (
        <ul
          className="absolute top-12 z-50 max-h-48 w-full overflow-y-auto rounded-md bg-white  shadow-md"
          ref={colorMenuRef}
        >
          {filteredColors.map((color, index) => (
            <li
              className="flex flex-row  text-gray-800 lg:transition lg:delay-75 lg:ease-out lg:hover:bg-gray-100 "
              key={index}
            >
              <input
                className="ml-2 cursor-pointer"
                type="checkbox"
                name="color-filter"
                id={color.name}
                value={color.name}
                checked={color.selected}
                onChange={() => toggleColor(index)}
              />
              <label
                className="block h-full w-full cursor-pointer p-2"
                htmlFor={color.name}
              >
                {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
