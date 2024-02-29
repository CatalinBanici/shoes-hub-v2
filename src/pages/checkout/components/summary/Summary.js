// REACT
import { useState, useEffect } from "react";

// JSON DATA
import data from "../../../../data/data.json";

// COMPONENTS
import CartProducts from "./sub-components/CartProducts";
import TotalSummary from "./sub-components/TotalSummary";

export default function Summary({
  cart,
  totalProductsAmount,
  totalProductsOldPrice,
  discountedProducts,
  totalProductsPrice,
  handleSubmit,
  isSubmitting,
}) {
  // shipping logic
  const [freeShipping, setFreeShipping] = useState(false);
  const shippingCost = data.misc.shippingCost;
  const freeShippingThreshold = data.misc.freeShippingThreshold;
  const totalPrice = freeShipping
    ? totalProductsPrice
    : totalProductsPrice + shippingCost;
  useEffect(() => {
    if (totalProductsPrice >= freeShippingThreshold) {
      setFreeShipping(true);
    } else {
      setFreeShipping(false);
    }
  }, [totalProductsPrice]);

  return (
    <div className="lg:w-[35%]">
      <h2 className="m-3 text-lg font-medium sm:m-6 sm:text-xl">Summary:</h2>

      <CartProducts cart={cart} totalProductsAmount={totalProductsAmount} />

      <TotalSummary
        totalProductsAmount={totalProductsAmount}
        totalProductsPrice={totalProductsPrice}
        totalProductsOldPrice={totalProductsOldPrice}
        totalPrice={totalPrice}
        discountedProducts={discountedProducts}
        freeShipping={freeShipping}
        shippingCost={shippingCost}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
