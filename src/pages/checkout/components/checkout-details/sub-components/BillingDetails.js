export default function BillingDetails(props) {
  const { values, errors, touched, handleChange, handleBlur } = props;

  return (
    <div className="p-3 sm:p-5">
      <h3 className=" py-3 text-base font-medium uppercase text-orange-500 ">
        Billing Details
      </h3>
      <div className="grid grid-cols-2 gap-x-3">
        {/* first name */}
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
            className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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

        {/* last name */}
        <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
          <label htmlFor="lastName">
            Last Name <span className="text-red-700">*</span>
          </label>
          {errors.lastName && touched.lastName && (
            <p className="text-right text-sm text-red-700">{errors.lastName}</p>
          )}
          <input
            className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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

        {/* email address */}
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
            className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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

        {/* phone number */}
        <div className="col-span-2 my-2 grid grid-cols-2 sm:col-span-1">
          <label htmlFor="phoneNumber">Phone Number</label>
          {errors.phoneNumber && touched.phoneNumber && (
            <p className="text-right text-sm text-red-700">
              {errors.phoneNumber}
            </p>
          )}
          <input
            className="col-span-2 rounded-md border-2 border-solid p-2 lg:transition lg:delay-75 lg:ease-out lg:hover:border-gray-400"
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
  );
}
