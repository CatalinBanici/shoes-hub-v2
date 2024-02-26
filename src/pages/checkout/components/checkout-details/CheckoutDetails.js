// COMPONENTS
import BillingDetails from "./sub-components/BillingDetails";
import PaymentMethod from "./sub-components/PaymentMethod";
import ShippingInfo from "./sub-components/ShippingInfo";
import Terms from "./sub-components/Terms";

export default function CheckoutDetails(props) {
  const { values, errors, touched, handleChange, handleBlur, paymentOptions } =
    props;

  return (
    <div className=" text-gray-800 lg:flex-1">
      <form className="m-3 rounded-md bg-white sm:m-5">
        <p className="px-3 pt-3 sm:px-5 sm:pt-5">
          Fields with " <span className="text-red-700">*</span> " are required!
        </p>

        <BillingDetails
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <ShippingInfo
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <PaymentMethod
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          paymentOptions={paymentOptions}
        />

        <Terms
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          paymentOptions={paymentOptions}
        />
      </form>
    </div>
  );
}
