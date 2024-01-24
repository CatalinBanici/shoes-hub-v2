import React from "react";
import data from "../../../data/data.json";

export default function HomeProductSection() {
  // getting all the products from the local json file
  const products = data.products.map((products) => products);
  const allProducts = [...products];

  // get latest products added to the json file as 'newArrivals'
  const newArrivals = allProducts.slice(-10);

  // get discounted sneakers over a certain percentage
  const discountedSneakers = allProducts.filter(
    (product) => product.category === "sneakers" && product.price.discount,
  );
  const discountedSneakersOverCertainPercentage = discountedSneakers.filter(
    (item) => {
      const discount = Math.abs(
        Math.trunc(
          ((item.price.current - item.price.old) / item.price.old) * 100,
        ),
      );
      // the number in the return statement represents the minimum discount percentage of the filtered products
      return discount >= 30;
    },
  );

  // get discounted boots over a certain percentage
  const discountedBoots = allProducts.filter(
    (product) => product.category === "boots" && product.price.discount,
  );
  const discountedBootsOverCertainPercentage = discountedBoots.filter(
    (item) => {
      const discount = Math.abs(
        Math.trunc(
          ((item.price.current - item.price.old) / item.price.old) * 100,
        ),
      );
      // the number in the return statement represents the minimum discount percentage of the filtered products
      return discount >= 40;
    },
  );

  return <div>HomeProductSection</div>;
}
