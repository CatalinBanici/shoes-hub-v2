// IMAGES
import CashImage from "../../../../../assets/images/other/cash-icon.4d83fcbc.svg";

export default function PaymentMethod(props) {
  const { values, errors, touched, handleChange, handleBlur, paymentOptions } =
    props;

  return (
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
          // payment options
          <div className="col-span-2 my-2  sm:col-span-1" key={item.value}>
            <label
              className="block h-full w-full cursor-pointer rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400 "
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
        {values.paymentMethod === paymentOptions[0].value ? (
          <div className="col-span-2 mt-3 flex flex-row items-center">
            <div className="m-3 sm:m-5">
              <img className="min-w-10" src={CashImage} alt="cash" />
            </div>
            <div className="text-gray-500">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </div>
          </div>
        ) : values.paymentMethod === paymentOptions[1].value ? (
          <>
            {/* e-money number */}
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
                className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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
            {/* e-money pin */}
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
                className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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
  );
}
