// REACT
import React from "react";

// COMPONENTS
import NewArrivals from "./sub-components/NewArrivals";
import SaleSneakers from "./sub-components/SaleSneakers";
import SaleBoots from "./sub-components/SaleBoots";

export default function HomeProductSection({ homePageData }) {
  return (
    <div className="max-w-[1280px] xl:m-auto">
      <NewArrivals homePageData={homePageData} />
      <SaleSneakers homePageData={homePageData} />
      <SaleBoots homePageData={homePageData} />
    </div>
  );
}
