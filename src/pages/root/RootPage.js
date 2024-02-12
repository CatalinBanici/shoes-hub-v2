import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function RootPage() {
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
