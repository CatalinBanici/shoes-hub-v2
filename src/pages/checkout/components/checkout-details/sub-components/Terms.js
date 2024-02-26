export default function Terms(props) {
  const { values, errors, touched, handleChange, handleBlur } = props;

  return (
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
  );
}
