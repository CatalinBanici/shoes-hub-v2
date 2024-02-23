//REACT
import React from "react";

//COMPONENTS
import MaleCategoryCard from "./sub-components/MaleCategoryCard";
import FemaleCategoryCard from "./sub-components/FemaleCategoryCard";

export default function Categories() {
  return (
    <div className="  my-5   sm:m-5 ">
      <h1 className=" text-md flex  h-[10vh] items-center justify-center px-3 text-center font-josefin text-gray-600 sm:h-[20vh]">
        The only shoe website that will get you addicted {"(in a good way)"}.
      </h1>
      <div className="flex   flex-col gap-2  sm:flex-row sm:justify-evenly">
        <MaleCategoryCard />
        <FemaleCategoryCard />
      </div>
    </div>
  );
}
