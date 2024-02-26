// REACT ROUTER
import { NavLink } from "react-router-dom";

export default function Navigation({ showNavbar, navRef }) {
  return (
    <nav
      className={`${
        !showNavbar && "hidden"
      }  sm:top0 w-fit self-center sm:absolute sm:right-24 sm:block`}
      ref={navRef}
    >
      <ul className="sm:flex sm:flex-row">
        <li className="m-4 sm:m-6">
          <NavLink
            className={({ isActive }) =>
              `text-lg font-medium sm:text-xl lg:transition lg:delay-75 lg:ease-out ${
                isActive
                  ? " text-amber-500  lg:hover:text-amber-400"
                  : " text-gray-800 lg:hover:text-gray-500"
              } `
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li className="m-4 sm:m-6">
          <NavLink
            className={({ isActive }) =>
              `text-lg font-medium sm:text-xl lg:transition lg:delay-75 lg:ease-out ${
                isActive
                  ? " text-amber-500  lg:hover:text-amber-400"
                  : " text-gray-800 lg:hover:text-gray-500"
              } `
            }
            to="about"
          >
            About
          </NavLink>
        </li>

        <li className="m-4 sm:m-6">
          <NavLink
            className={({ isActive }) =>
              `text-lg font-medium sm:text-xl lg:transition lg:delay-75 lg:ease-out ${
                isActive
                  ? " text-amber-500  lg:hover:text-amber-400"
                  : " text-gray-800 lg:hover:text-gray-500"
              } `
            }
            to="store"
          >
            Store
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
