import React, { useEffect, useRef, useState } from "react";
import { TbShoppingBag } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navRef = useRef();
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  // close navigation when user clicks outside of it on mobile display
  useEffect(() => {
    function closeNavOnOutsideClick(e) {
      if (showNavbar && navRef.current && !navRef.current.contains(e.target)) {
        setShowNavbar(false);
      }
    }
    document.addEventListener("mousedown", closeNavOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeNavOnOutsideClick);
    };
  }, [showNavbar]);

  return (
    <>
      <div className="relative flex flex-row justify-between border-b-2">
        <div className="m-4  sm:m-6">
          <span className=" text-xl font-bold text-gray-800">Shoes</span>
          <span className="ml-1 rounded-md bg-orange-600 p-2 text-xl font-bold text-white">
            HUB
          </span>
        </div>
        <div className="m-4 flex flex-row items-center justify-center sm:m-6 ">
          <div className=" mx-3 text-2xl text-gray-800">
            <button className="relative" onClick={() => navigate("cart")}>
              <TbShoppingBag aria-label="Shopping Cart" title="Shopping Cart" />
              <span className=" absolute bottom-[-7px] right-[-7px]  h-[1.15rem] w-[1.15rem] rounded-full bg-orange-600  text-sm text-white">
                2
              </span>
            </button>
          </div>
          <div className=" mx-3 text-2xl text-gray-800 sm:hidden">
            <button onClick={() => setShowNavbar(!showNavbar)}>
              {showNavbar ? (
                <AiOutlineClose aria-label="Close Menu" title="Close Menu" />
              ) : (
                <AiOutlineMenu aria-label="Open Menu" title="Open Menu" />
              )}
            </button>
          </div>
        </div>
      </div>
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
                `font-medium sm:text-xl  ${
                  isActive ? " text-orange-600" : " text-gray-800"
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
                `font-medium sm:text-xl  ${
                  isActive ? " text-orange-600" : " text-gray-800"
                } `
              }
              to="/"
            >
              About
            </NavLink>
          </li>
          <li className="m-4 sm:m-6">
            <NavLink
              className={({ isActive }) =>
                ` font-medium sm:text-xl ${
                  isActive ? " text-orange-600" : " text-gray-800"
                } `
              }
              to="store"
            >
              Store
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
