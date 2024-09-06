import React from "react";
import { object, string } from "yup";
import { ErrorMessage, Formik } from "formik";

const LeaveComment = () => {
  let loginSchema = object({
    email: string()
      .required("Email is required.")
      .email("Please enter a valid email address."),
    name: string().required("Name is required."),
    message: string().required("Your message is required."),
  });
  return (
    <Formik
      initialValues={{ email: "", name: "", message: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        // login with axios

        actions.resetForm();
        actions.setSubmitting();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form className=" mt-16" method="post" onSubmit={handleSubmit}>
          <h3 className="text-lg tracking-wider font-bold mb-2">
            Leave Your Comment
          </h3>
          <div className="w-2/3">
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-2 ml-2"
                />
              </div>
              <div>
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
            </div>
            <div className="mb-6 ">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white tracking-wide"
              >
                Your Message
              </label>
              <textarea id="message"
                name="message"
                value={values.message}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                rows="5"/>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-2 ml-2"
              />
            </div>
            <button
                type="submit"
                className="text-white bg-black font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 mb-4 text-center hover:scale-105 duration-300"
              >
                Send Comment
              </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LeaveComment;
