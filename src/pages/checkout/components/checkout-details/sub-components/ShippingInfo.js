export default function ShippingInfo(props) {
  const { values, errors, touched, handleChange, handleBlur } = props;

  return (
    <div className="p-3 sm:p-5">
      <h3 className=" py-3 text-base font-medium uppercase text-orange-500 ">
        Shipping Info
      </h3>
      <div className="grid grid-cols-2 gap-x-3">
        {/* address */}
        <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-2">
          <label htmlFor="address">
            Address <span className="text-red-700">*</span>
          </label>
          {errors.address && touched.address && (
            <p className="text-right text-sm text-red-700">{errors.address}</p>
          )}
          <input
            className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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

        {/* apartment */}
        <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
          <label htmlFor="apartment">Apartment</label>
          {errors.apartment && touched.apartment && (
            <p className="text-right text-sm text-red-700">
              {errors.apartment}
            </p>
          )}
          <input
            className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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

        {/* zip code */}
        <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
          <label htmlFor="zipCode">
            ZIP Code <span className="text-red-700">*</span>
          </label>
          {errors.zipCode && touched.zipCode && (
            <p className="text-right text-sm text-red-700">{errors.zipCode}</p>
          )}
          <input
            className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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

        {/* city */}
        <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
          <label htmlFor="city">
            City <span className="text-red-700">*</span>
          </label>
          {errors.city && touched.city && (
            <p className="text-right text-sm text-red-700">{errors.city}</p>
          )}
          <input
            className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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

        {/* country */}
        <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
          <label htmlFor="country">
            Country <span className="text-red-700">*</span>
          </label>
          {errors.country && touched.country && (
            <p className="text-right text-sm text-red-700">{errors.country}</p>
          )}
          <input
            className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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
  );
}
