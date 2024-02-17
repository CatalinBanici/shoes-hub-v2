import React from "react";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import HomeProductSection from "./components/HomeProductSection";

export default function HomePage() {
  return (
    <>
      <div>
        <Carousel />
        <Categories />
        <HomeProductSection />
      </div>
    </>
  );
}
