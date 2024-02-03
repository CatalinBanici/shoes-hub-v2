import React from "react";

export default function BillingDetails() {
  return (
    <div className=" lg:flex-1">
      <form className="m-3 rounded-md bg-white sm:m-5">
        <div className="p-3 sm:p-5">
          <h3 className=" py-3 text-base font-medium uppercase text-orange-500 ">
            Billing Details
          </h3>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label className="text-gray-800" htmlFor="first-name">
                First Name <span className="text-red-700">*</span>
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="text"
                placeholder="e.g. John"
                id="first-name"
                name="first-name"
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label className="text-gray-800" htmlFor="last-name">
                Last Name <span className="text-red-700">*</span>
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="text"
                placeholder="e.g. Doe"
                id="last-name"
                name="last-name"
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label className="text-gray-800" htmlFor="email-address">
                Email Address <span className="text-red-700">*</span>
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="email"
                placeholder="e.g. johndoe@email.com"
                id="email-address"
                name="email-address"
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label className="text-gray-800" htmlFor="phone-number">
                Phone Number
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="tel"
                placeholder="e.g. +40123456789"
                id="phone-number"
                name="phone-number"
              />
            </div>
          </div>
        </div>
        <div className="p-3 sm:p-5">
          <h3 className=" py-3 text-base font-medium uppercase text-orange-500 ">
            Shipping Info
          </h3>
          <div className="grid grid-cols-2 gap-x-3">
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-2">
              <label className="text-gray-800" htmlFor="address">
                Address <span className="text-red-700">*</span>
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="text"
                placeholder="e.g. Peaceful Street no. 123"
                id="address"
                name="address"
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label className="text-gray-800" htmlFor="city">
                City <span className="text-red-700">*</span>
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="text"
                placeholder="e.g. London"
                id="city"
                name="city"
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label className="text-gray-800" htmlFor="country">
                Country <span className="text-red-700">*</span>
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="text"
                placeholder="e.g. United Kingdom"
                id="country"
                name="country"
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label className="text-gray-800" htmlFor="zip-code">
                ZIP Code <span className="text-red-700">*</span>
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="text"
                placeholder="e.g. 234789"
                id="zip-code"
                name="zip-code"
              />
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-5">
          <h3 className=" py-3 text-base font-medium uppercase text-orange-500 ">
            Payment Method
          </h3>
          <div className=" grid grid-cols-2 gap-x-3">
            <div className="col-span-2 my-2 rounded-md border-2 border-solid p-2 sm:col-span-1">
              <label className=" text-gray-800">
                <input
                  className="mx-2"
                  type="radio"
                  name="cash-on-delivery"
                  id="cash-on-delivery"
                />
                Cash on Delivery
              </label>
            </div>
            <div className="col-span-2 my-2 rounded-md border-2 border-solid p-2 sm:col-span-1">
              <label className=" text-gray-800">
                <input
                  className="mx-2"
                  type="radio"
                  name="e-money"
                  id="e-money"
                />
                e-Money
              </label>
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label className="text-gray-800" htmlFor="e-money-number">
                e-Money Number <span className="text-red-700">*</span>
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="text"
                placeholder="e.g. 123456789"
                id="e-money-number"
                name="e-money-number"
              />
            </div>
            <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
              <label className="text-gray-800" htmlFor="e-money-pin">
                e-Money Pin <span className="text-red-700">*</span>
              </label>
              <p className="text-right text-red-700">Error</p>
              <input
                className="col-span-2 rounded-md border-2 border-solid p-2"
                type="text"
                placeholder="e.g. 3456"
                id="e-money-pin"
                name="e-money-pin"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
