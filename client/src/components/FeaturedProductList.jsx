import React, { useEffect, useState } from "react";
import axios from "axios";
const FeaturedProductList = () => {
  const [product, setProduct] = useState();
  const getAllProduct = async () => {
    const data = await axios.get("/api/v1/products/get-all-product");
    setProduct(data.data.data.products);
    // console.log(data.data.data.products);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div className="border-2 border-black mt-2">
        <section className="py-12 bg-white sm:py-16 lg:py-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Our featured items
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
              {product &&
                product.map((p) => (
                  <div className="relative group  hover:shadow-md hover:rounded-xl rounded-xl">
                    <div className="overflow-hidden aspect-w-1 aspect-h-1">
                      <img
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 rounded-xl hover:rounded-xl"
                        src={p.coverImage}
                        alt=""
                      />
                    </div>
                    <div className="absolute left-3 top-3">
                      <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                        New
                      </p>
                    </div>
                    <div className="flex items-start justify-between mt-4 space-x-4">
                      <div className="px-2">
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                          <a href="#" title="">
                            {p.name}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </h3>
                        <div className="flex items-center mt-2.5 space-x-px">
                          <p className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base py-2 px-1">
                            {`MRP: ₹ ${p.price}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturedProductList;
