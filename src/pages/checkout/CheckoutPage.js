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

  const discountedProducts = cart.filter((item) => item.discount);

  useEffect(() => {
    if (totalProductsPrice >= minCostFreeShipping) {
      setFreeShipping(true);
    } else {
      setFreeShipping(false);
    }
  }, [totalProductsPrice]);

  const paymentOptions = [
    { label: "Cash on Delivery", value: "Cash-on-Delivery" },
    { label: "e-Money", value: "e-Money" },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    apartment: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPin: "",
    terms: false,
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Can't be blank!"),
    lastName: yup.string().required("Can't be blank!"),
    emailAddress: yup
      .string()
      .email("Invalid email format!")
      .required("Can't be blank!"),
    phoneNumber: yup.number().typeError("Must be numbers!"),
    address: yup.string().required("Can't be blank!"),
    apartment: yup.string(),
    zipCode: yup.string().required("Can't be blank!"),
    city: yup.string().required("Can't be blank!"),
    country: yup.string().required("Can't be blank!"),
    paymentMethod: yup
      .string()
      .oneOf(["Cash-on-Delivery", "e-Money"])
      .required("You must pick an option!"),
    eMoneyNumber: yup.number().when("paymentMethod", {
      is: (val) => val === "e-Money",
      then: () =>
        yup.number().typeError("Must be numbers!").required("Can't be blank!"),
      otherwise: () => yup.number().notRequired(),
    }),
    eMoneyPin: yup.number().when("paymentMethod", {
      is: (val) => val === "e-Money",
      then: () =>
        yup.number().typeError("Must be numbers!").required("Can't be blank!"),
      otherwise: () => yup.number().notRequired(),
    }),
    terms: yup
      .boolean()
      .oneOf([true], "Please accept the terms of service!")
      .required("Please accept the terms of service!"),
  });

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

  console.log("values", values);

  return (
    <div className="relative top-[64px] m-auto flex max-w-[1400px] flex-col text-gray-800 sm:top-[80px] ">
      <h2 className="m-3 mt-7 text-xl font-medium sm:m-5 sm:mt-10 sm:text-2xl ">
        CHECKOUT
      </h2>
      <div className="flex w-full flex-col lg:flex-row">
        <BillingDetails
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          paymentOptions={paymentOptions}
        />
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
