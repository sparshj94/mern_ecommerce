import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HeroSection = () => {
  // const [categories, setCategories] = useState();
  // const getCategory = async () => {
  //   const data = await axios.get(
  //     "http://localhost:3000/api/v1/category/allCategories"
  //   );
  //   // console.log(data.data.data.categories);
  //   setCategories(data.data.data.categories);
  // };
  // useEffect(() => {
  //   getCategory();
  // }, []);
  return (
    <>
      <div>
        <section>
          <div className="relative pt-12 bg-gray-50 sm:pt-16 lg:py-36 xl:py-48">
            <div className="absolute inset-0 hidden lg:block">
              <img
                className="object-cover object-right w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/background.png"
                alt=""
              />
            </div>

            <div className="absolute inset-x-0 top-0 hidden lg:block">
              <div className="py-5">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"></div>
              </div>
            </div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
                <p className="text-base font-bold text-gray-600">
                  Use “FIT40” coupon to get 40% flat discount
                </p>
                <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:mt-8 sm:text-5xl xl:text-7xl">
                  Fitness kits that help you keep fit.
                </h1>

                <div className="mt-8 sm:mt-12"></div>
              </div>

              <div className="mt-8 lg:hidden">
                <img
                  className="w-full mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/bg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
