import React from "react";
import { useCart } from "../context/CartContextProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  return (
    <>
      <div>
        <div className="">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {product &&
                product.map((p) => (
                  <Link to={`/product/${p.slug}`} key={p._id}>
                    <div className="relative group hover:shadow-md hover:rounded-xl rounded-xl bg-gray-50">
                      <div className="overflow-hidden aspect-w-1 aspect-h-1 shadow-sm hover:shadow-md hover:rounded-xl rounded-xl">
                        <img
                          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 hover:shadow-md hover:rounded-xl rounded-xl "
                          src={p.coverImage}
                          alt=""
                        />
                      </div>
                      <div className="flex items-start justify-between mt-4 space-x-4">
                        <div className="mx-2">
                          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <h3 title="">
                              {p.name}
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              ></span>
                            </h3>
                          </p>
                          <div className="flex items-center mt-2.5 space-x-px">
                            <p className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
                              {`MRP: ₹ ${p.price}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
