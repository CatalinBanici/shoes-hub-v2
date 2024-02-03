import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Summary from "./components/Summary";
import BillingDetails from "./components/BillingDetails";
import * as yup from "yup";
import { useFormik } from "formik";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart.cart);
  const totalProductsAmount = useSelector(
    (state) => state.cart.totalProductsAmount,
  );
  const totalProductsPrice = useSelector(
    (state) => state.cart.totalProductsPrice,
  );
  const totalProductsOldPrice = useSelector(
    (state) => state.cart.totalProductsOldPrice,
  );

  const [freeShipping, setFreeShipping] = useState(false);
  const shippingCost = 20;
  const minCostFreeShipping = 200;
  const totalPrice = freeShipping
    ? totalProductsPrice
    : totalProductsPrice + shippingCost;

  console.log("totalPrice", totalPrice);

  const discountedProducts = cart.filter((item) => item.discount);

  useEffect(() => {
    if (totalProductsPrice >= minCostFreeShipping) {
      setFreeShipping(true);
    } else {
      setFreeShipping(false);
    }

    console.log("shipping effect");
  }, [totalProductsPrice]);

  const initialValues = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  };

  const validationSchema = yup.object().shape({});

  async function onSubmit(values, actions) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);

    actions.resetForm();
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="relative top-[64px] m-auto flex max-w-[1400px] flex-col text-gray-800 sm:top-[80px] ">
      <h2 className="m-3 mt-7 text-xl font-medium sm:m-5 sm:mt-10 sm:text-2xl ">
        Checkout
      </h2>
      <div className="flex w-full flex-col lg:flex-row">
        <BillingDetails />
        <Summary
          cart={cart}
          totalProductsAmount={totalProductsAmount}
          totalProductsPrice={totalProductsPrice}
          totalProductsOldPrice={totalProductsOldPrice}
          discountedProducts={discountedProducts}
          freeShipping={freeShipping}
          shippingCost={shippingCost}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}
