import React from "react";
import { NavLink } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { object, string } from "yup";
const Login = () => {
  // ? Validation Schema 
  let loginSchema = object({
    email: string()
      .required("Email is required.")
      .email("Please enter a valid email address."),
    password: string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters long.")
      .max(16, "Password must be no more than 16 characters long.")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .matches(/\d+/, "Password must contain at least one number.")
      .matches(
        /[@$!%*?&]+/,
        "Password must contain at least one special character (@$!%*?&)."
      ),
  });
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      {/* Form Control With Formik and shows Error Message */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          // login with axios

          actions.resetForm();
          actions.setSubmitting();
        }}
      >
        {({ values, handleChange, handleBlur,handleSubmit }) => (
          <form className="w-2/3 mx-auto " method="post" onSubmit={handleSubmit}>
            <h3 className="text-3xl tracking-wider font-bold mb-6 text-center">
              Welcome back to <span className="brand">lifelog.</span>
            </h3>
            <div className="grid gap-6 mb-6 md:grid-cols-1 items-center w-2/3 mx-auto justify-center">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white tracking-wide"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@example.com"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-2 ml-2" 
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white tracking-wide"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="text-red-600 text-sm  mt-2 ml-2"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-black font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center hover:scale-105 duration-300"
              >
                Submit
              </button>
              <NavLink
                to="/register"
                className="font-semibold tracking-wider hover:scale-105 duration-300"
              >
                Don't you have an account ?{" "}
              </NavLink>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
