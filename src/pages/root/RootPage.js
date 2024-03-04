// REACT
import { useState, useEffect } from "react";

// REACT ROUTER
import { Outlet, useLocation } from "react-router-dom";

// COMPONENTS
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function RootPage() {
  // window position logic to change the transparency of the header
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scroll to the top of the page when navigating through routes
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="font-regular relative m-auto flex max-w-[1800px] flex-col font-roboto">
      <header
        className={`${
          scrollPosition > 0 ? "sm:bg-white" : "sm:bg-transparent"
        } fixed z-10 flex w-full  max-w-[1800px] flex-col bg-white transition delay-100 ease-out`}
      >
        <Header />
      </header>
      <main className="mb-[70px]  sm:mb-[90px] ">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
