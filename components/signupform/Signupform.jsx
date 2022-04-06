import { Formik } from "formik";

function Signupform(){
  <Formik
    initialValues={{
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      referrerCode: "",
    }}
    validate={(data) => {
      const errors = {};
      if (!data.email) {
        errors.email = "Required field";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(data, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      data,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /**And other goodies */
    }) => (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={data.email}
        />
        {errors.email && touched.email && errors.email}

        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={data.password}
        />
        {errors.password && touched.password && errors.password}

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>

        {/** Other inputs. */}
      </form>
    )}
  </Formik>
}

export default Signupform;
