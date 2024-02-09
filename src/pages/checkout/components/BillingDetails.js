import React, { useEffect } from "react";
import CashImage from "../../../assets/images/other/cash-icon.4d83fcbc.svg";

export default function BillingDetails(props) {
  const { values, errors, touched, handleChange, handleBlur, paymentOptions } =
    props;

  const paymentOptionsArray = paymentOptions.map((item) => item);

  return (
    <div className=" text-gray-800 lg:flex-1">
      <form className="m-3 rounded-md bg-white sm:m-5">
        <p className="px-3 pt-3 sm:px-5 sm:pt-5">
          Fields with " <span className="text-red-700">*</span> " are required!
        </p>
        {/* BILLING DETAILS */}
        <div className="p-3 sm:p-5">
          <h3 className=" py-3 text-base font-medium uppercase text-orange-500 ">
            Billing Details
          </h3>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label htmlFor="firstName">
                First Name <span className="text-red-700">*</span>
              </label>
              {errors.firstName && touched.firstName && (
                <p className="text-right text-sm text-red-700">
                  {errors.firstName}
                </p>
              )}
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                style={
                  errors.firstName &&
                  touched.firstName && { border: "2px solid rgb(185 28 28)" }
                }
                type="text"
                placeholder="e.g. John"
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label htmlFor="lastName">
                Last Name <span className="text-red-700">*</span>
              </label>
              {errors.lastName && touched.lastName && (
                <p className="text-right text-sm text-red-700">
                  {errors.lastName}
                </p>
              )}
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                style={
                  errors.lastName &&
                  touched.lastName && { border: "2px solid rgb(185 28 28)" }
                }
                type="text"
                placeholder="e.g. Doe"
                id="lastName"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label htmlFor="emailAddress">
                Email Address <span className="text-red-700">*</span>
              </label>
              {errors.emailAddress && touched.emailAddress && (
                <p className="text-right text-sm text-red-700">
                  {errors.emailAddress}
                </p>
              )}
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                style={
                  errors.emailAddress &&
                  touched.emailAddress && { border: "2px solid rgb(185 28 28)" }
                }
                type="email"
                placeholder="e.g. johndoe@email.com"
                id="emailAddress"
                name="emailAddress"
                value={values.emailAddress}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label htmlFor="phoneNumber">Phone Number</label>
              {errors.phoneNumber && touched.phoneNumber && (
                <p className="text-right text-sm text-red-700">
                  {errors.phoneNumber}
                </p>
              )}
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                style={
                  errors.phoneNumber &&
                  touched.phoneNumber && { border: "2px solid rgb(185 28 28)" }
                }
                type="tel"
                placeholder="e.g. +40123456789"
                id="phoneNumber"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>

        {/* SHIPPING INFO */}
        <div className="p-3 sm:p-5">
          <h3 className=" py-3 text-base font-medium uppercase text-orange-500 ">
            Shipping Info
          </h3>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-2">
              <label htmlFor="address">
                Address <span className="text-red-700">*</span>
              </label>
              {errors.address && touched.address && (
                <p className="text-right text-sm text-red-700">
                  {errors.address}
                </p>
              )}
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                style={
                  errors.address &&
                  touched.address && { border: "2px solid rgb(185 28 28)" }
                }
                type="text"
                placeholder="e.g. Peaceful Street no. 123"
                id="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label htmlFor="apartment">Apartment</label>
              {errors.apartment && touched.apartment && (
                <p className="text-right text-sm text-red-700">
                  {errors.apartment}
                </p>
              )}
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                style={
                  errors.apartment &&
                  touched.apartment && { border: "2px solid rgb(185 28 28)" }
                }
                type="text"
                placeholder="e.g. Block 5, Staircase B, Apartment 10"
                id="apartment"
                name="apartment"
                value={values.apartment}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label htmlFor="zipCode">
                ZIP Code <span className="text-red-700">*</span>
              </label>
              {errors.zipCode && touched.zipCode && (
                <p className="text-right text-sm text-red-700">
                  {errors.zipCode}
                </p>
              )}
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                style={
                  errors.zipCode &&
                  touched.zipCode && { border: "2px solid rgb(185 28 28)" }
                }
                type="text"
                placeholder="e.g. 234789"
                id="zipCode"
                name="zipCode"
                value={values.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label htmlFor="city">
                City <span className="text-red-700">*</span>
              </label>
              {errors.city && touched.city && (
                <p className="text-right text-sm text-red-700">{errors.city}</p>
              )}
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                style={
                  errors.city &&
                  touched.city && { border: "2px solid rgb(185 28 28)" }
                }
                type="text"
                placeholder="e.g. London"
                id="city"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label htmlFor="country">
                Country <span className="text-red-700">*</span>
              </label>
              {errors.country && touched.country && (
                <p className="text-right text-sm text-red-700">
                  {errors.country}
                </p>
              )}
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                style={
                  errors.country &&
                  touched.country && { border: "2px solid rgb(185 28 28)" }
                }
                type="text"
                placeholder="e.g. United Kingdom"
                id="country"
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <div className="p-3 sm:p-5">
          <h3 className=" py-3 text-base font-medium uppercase text-orange-500 ">
            Payment Method
          </h3>
          {errors.paymentMethod && touched.paymentMethod && (
            <p className="text-right text-sm text-red-700">
              {errors.paymentMethod}
            </p>
          )}
          <div className=" grid grid-cols-2 gap-x-3">
            {paymentOptions.map((item) => (
              <div className="col-span-2 my-2  sm:col-span-1" key={item.value}>
                <label
                  className="block h-full w-full cursor-pointer rounded-md border-2 border-solid p-2 "
                  style={
                    errors.paymentMethod &&
                    touched.paymentMethod && {
                      border: "2px solid rgb(185 28 28)",
                    }
                  }
                  htmlFor={item.value}
                >
                  <input
                    className=" mx-2"
                    type="radio"
                    name="paymentMethod"
                    id={item.value}
                    value={item.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.paymentMethod === item.value}
                  />
                  {item.label}
                </label>
              </div>
            ))}
            {values.paymentMethod === paymentOptionsArray[0].value ? (
              <div className="col-span-2 mt-3 flex flex-row items-center">
                <div className="m-3 sm:m-5">
                  <img className="min-w-10" src={CashImage} alt="cash" />
                </div>
                <div className="text-gray-500">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </div>
              </div>
            ) : values.paymentMethod === paymentOptionsArray[1].value ? (
              <>
                <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
                  <label htmlFor="eMoneyNumber">
                    e-Money Number <span className="text-red-700">*</span>
                  </label>
                  {errors.eMoneyNumber && touched.eMoneyNumber && (
                    <p className="text-right text-sm text-red-700">
                      {errors.eMoneyNumber}
                    </p>
                  )}
                  <input
                    className="col-span-2 rounded-md border-2 border-solid p-2"
                    style={
                      errors.eMoneyNumber &&
                      touched.eMoneyNumber && {
                        border: "2px solid rgb(185 28 28)",
                      }
                    }
                    type="text"
                    placeholder="e.g. 123456789"
                    id="eMoneyNumber"
                    name="eMoneyNumber"
                    value={values.eMoneyNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
                  <label className="text-gray-800" htmlFor="eMoneyPin">
                    e-Money Pin <span className="text-red-700">*</span>
                  </label>
                  {errors.eMoneyPin && touched.eMoneyPin && (
                    <p className="text-right text-sm text-red-700">
                      {errors.eMoneyPin}
                    </p>
                  )}
                  <input
                    className="col-span-2 rounded-md border-2 border-solid p-2"
                    style={
                      errors.eMoneyPin &&
                      touched.eMoneyPin && {
                        border: "2px solid rgb(185 28 28)",
                      }
                    }
                    type="text"
                    placeholder="e.g. 3456"
                    id="eMoneyPin"
                    name="eMoneyPin"
                    value={values.eMoneyPin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>{" "}
              </>
            ) : null}
          </div>
        </div>
        <div className="p-3 sm:p-5">
          {errors.terms && touched.terms && (
            <p className="text-left text-sm text-red-700">{errors.terms}</p>
          )}
          <label
            className="cursor-pointer text-lg"
            style={
              errors.terms &&
              touched.terms && {
                borderBottom: "2px solid rgb(185 28 28)",
              }
            }
          >
            <input
              className="mr-3"
              type="checkbox"
              id="terms"
              name="terms"
              value={values.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.terms}
            />
            I accept the Terms of Service!
          </label>
        </div>
      </form>
    </div>
  );
}
