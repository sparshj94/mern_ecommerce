import { Fragment, useEffect, useState } from "react";

import axios from "axios";

const CategoryMenu = () => {
  const [people, setPeople] = useState();

  const getCategory = async () => {
    try {
      const res = await axios.get("/api/v1/category/allCategories");
      const people = res.data.data.categories;
      setPeople(people);
    } catch (error) {
      console.log(error);
    }

    console.log(people);
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Category
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {people?.map((c) => (
          <option value="DE">{c.name}</option>
        ))}
      </select>
    </form>
  );
};

export default CategoryMenu;
