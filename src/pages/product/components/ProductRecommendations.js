import React from "react";
import data from "../../../data/data.json";

export default function ProductRecommendations({ product }) {
  const products = data.products.map((products) => products);
  const allProducts = [...products];

  const productGender = product[0].gender;
  const productCategory = product[0].category;

  const productRecommendation = allProducts
    .filter(
      (item) =>
        item.gender === productGender && item.category === productCategory,
    )
    .filter((item) => item.id !== product[0].id);

  return <div className="col-span-2 bg-white">ProductRecommendations</div>;
}
