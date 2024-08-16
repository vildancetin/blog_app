import React from 'react'

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
    <form className="w-2/3 mx-auto ">
      <h3 className="text-3xl tracking-wider font-bold mb-6 text-center">Welcome to <span className='brand'>lifelog.</span></h3>
      <div className="grid gap-6 mb-6 md:grid-cols-1 items-center w-2/3 mx-auto justify-center">
      <div>
      <div className='mb-6'>
            <label for="first_name" className="block mb-2 font-medium text-gray-900 dark:text-white text-base tracking-wide">First Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-base font-medium text-gray-900 dark:text-white tracking-wide">Last Name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required />
        </div>
      </div>
        <div className="">
          <label
            for="email"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white tracking-wide"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white tracking-wide"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
      <button
        type="submit"
        className="text-white bg-black font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center w-5 hover:scale-105 "
      >
        Submit
      </button>
      </div>

    </form>
  </div>
  )
}

export default Register