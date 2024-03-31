import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContextProvider";
import axios from "axios";
import { Link } from "react-router-dom";
const CheckOutPage = () => {
  const { cart } = useCart();
  const totalPrice = () => {
    try {
      let total = 0;
      cart &&
        cart.map((item) => {
          total = total + item.price;
        });

      return total;
    } catch (error) {
      console.log(error);
    }
  };

  async function checkoutHandler() {
    try {
      // const keyData = await axios.get(
      //   "http://localhost:3000/api/v1/payment/getkey"
      // );
      const data = await axios.post("/api/v1/payment/checkout", {
        amount: totalPrice(),
      });
      // const key = keyData.data.key;

      const order = data.data.data.order;
      // console.log(data.data.data.order);
      // console.log(key);

      const options = {
        key: "rzp_test_f3pOhdGCXfpgvk", // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Sparsh Jain",
        description: "Test Transaction",

        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the   response of Step 1
        callback_url: "/api/v1/payment/paymentVerification",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },

        theme: {
          color: "#3399cc",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <div>
          <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
            <a href="#" className="text-2xl font-bold text-gray-800">
              Checkout
            </a>
            <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
              <div className="relative">
                <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </a>
                    <span className="font-semibold text-gray-900">Shop</span>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                      href="#"
                    >
                      2
                    </a>
                    <span className="font-semibold text-gray-900">
                      Shipping
                    </span>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                      href="#"
                    >
                      3
                    </a>
                    <span className="font-semibold text-gray-500">Payment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
            <div className="px-4 pt-8">
              <p className="text-xl font-medium">Order Summary</p>
              <p className="text-gray-400">
                Check your items. And select a suitable shipping method.
              </p>
              <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                {cart &&
                  cart.map((p) => (
                    <>
                      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                        <img
                          className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                          src={p.coverImage}
                          alt
                        />
                        <div className="flex w-full flex-col px-4 py-4">
                          <span className="font-semibold">{p.name}</span>
                          <span className="float-right text-gray-400"> </span>
                          <p className="text-lg font-bold">{p.price}</p>
                        </div>
                      </div>
                    </>
                  ))}

                {/* <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">
                      Nike Air Max Pro 8888 - Super Light
                    </span>
                    <span className="float-right text-gray-400">
                      42EU - 8.5US
                    </span>
                    <p className="mt-auto text-lg font-bold">$238.99</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
              <p className="text-xl font-medium">Payment Details</p>
              <p className="text-gray-400">
                Complete your order by providing your payment details.
              </p>
              <div className>
                <label
                  htmlFor="email"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@gmail.com"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="card-holder"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="card-holder"
                    name="card-holder"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your full name here"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                </div>

                <label
                  htmlFor="billing-address"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Billing Address
                </label>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      type="text"
                      id="billing-address"
                      name="billing-address"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Street Address"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <img
                        className="h-4 w-4 object-contain"
                        src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png"
                        alt
                      />
                    </div>
                  </div>
                  <select
                    type="text"
                    name="billing-state"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="State">State</option>
                  </select>
                  <input
                    type="text"
                    name="billing-zip"
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="ZIP"
                  />
                </div>
                {/* Total */}

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    {`₹ ${totalPrice()}`}
                  </p>
                </div>
              </div>
              <button
                className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                onClick={checkoutHandler}
              >
                Place Order
              </button>
              {/* <form onSubmit={checkoutHandler}>
                <button
                  className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                  type="submit"
                >
                  Place Order
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
