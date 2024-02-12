import React from "react";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import HomeProductSection from "./components/HomeProductSection";
import About from "./components/About";

export default function HomePage() {
  return (
    <>
      <div>
        <Carousel />
        <About />
        <Categories />
        <HomeProductSection />
      </div>
    </>
  );
}
