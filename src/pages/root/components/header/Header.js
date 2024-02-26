// REACT
import { useEffect, useRef, useState } from "react";

// REDUX
import { useSelector } from "react-redux";

// COMPONENTS
import Logo from "./sub-components/Logo";
import NavCartButtons from "./sub-components/NavCartButtons";
import Navigation from "./sub-components/Navigation";

export default function Header() {
  // total products amount to be rendered next to the shopping bag button
  const totalProductsAmount = useSelector(
    (state) => state.cart.totalProductsAmount,
  );

  const navRef = useRef();

  const [showNavbar, setShowNavbar] = useState(false);

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
        <Logo />

        <NavCartButtons
          totalProductsAmount={totalProductsAmount}
          showNavbar={showNavbar}
          setShowNavbar={setShowNavbar}
        />
      </div>

      <Navigation showNavbar={showNavbar} navRef={navRef} />
    </>
  );
}
