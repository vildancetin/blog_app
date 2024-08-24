import React from "react";
import { object, string } from "yup";
import { Formik, ErrorMessage } from "formik";
const Register = () => {
  let registerSchema = object({
    firstName: string().required("Name is required"),
    lastName: string().required("Lastname is required"),
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
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={(valules, actions) =>
          // ? Register request with axios
          {
            console.log(valules);
            actions.resetForm();
            actions.setSubmitting(false);
          }
        }
      >
        {({ handleChange, values, handleBlur, handleSubmit }) => (
          <form className="w-2/3 mx-auto" method="post" onSubmit={handleSubmit}>
            <h3 className="text-3xl tracking-wider font-bold mb-6 text-center">
              Welcome to <span className="brand">lifelog.</span>
            </h3>
            <div className="grid gap-6 mb-6 md:grid-cols-1 items-center w-2/3 mx-auto justify-center">
              <div>
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 font-medium text-gray-900 dark:text-white text-base tracking-wide"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  <ErrorMessage
                    component="div"
                    name="firstName"
                    className="text-red-600 text-sm  mt-2 ml-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-base font-medium text-gray-900 dark:text-white tracking-wide"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  <ErrorMessage
                    component="div"
                    name="lastName"
                    className="text-red-600 text-sm  mt-2 ml-2"
                  />
                </div>
              </div>
              <div className="">
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@example.com"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="text-red-600 text-sm  mt-2 ml-2"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="text-red-600 text-sm  mt-2 ml-2"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-black font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center w-5 hover:scale-105 duration-300 "
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
