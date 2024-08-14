import React from "react";

const Search = () => {
  return (
    <div>
      <form class="max-w-md mx-auto">
        <label
          for="default-search"
          class="mb-2 text-md font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <input
            type="search"
            id="default-search"
            class="block  py-3  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:placeholder-gray-400 dark:text-white"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            class="text-black absolute end-1 bottom-1.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
