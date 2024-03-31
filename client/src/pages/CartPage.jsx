import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useCart } from "../context/CartContextProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate = useNavigate();
  const shippingCharge = 50;
  const [quantity, setQuantity] = useState(1);
  const { auth, setAuth } = useAuth();
  const { cart, setCart } = useCart();

  //for adding total amount
  const totalPrice = () => {
    try {
      let total = 0;
      cart.map((item) => {
        total = total + item.price;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };
  const am = totalPrice() * quantity;
  // console.log(am);
  // console.log(auth);
  const itemTotal = am;
  const totalCartValue = itemTotal + itemTotal * 0.18 + shippingCharge;

  //for removing cart item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    totalPrice();
  }, [quantity]);
  return (
    <>
      {/* <h1>Cart Items</h1> */}
      {/* {auth && auth.isLogin ? <div>user Login</div> : <>Not Login</>} */}

      <div className="mt-3">
        <div className="font-[sans-serif]">
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 p-10 bg-white overflow-x-auto">
              <div className="flex border-b pb-4">
                <h2 className="text-2xl font-extrabold text-[#333] flex-1">
                  Shopping Cart
                </h2>
                <h3 className="text-xl font-extrabold text-[#333]">
                  {cart?.length}Items
                </h3>
              </div>
              <div>
                <table className="mt-6 w-full border-collapse divide-y">
                  <thead className="whitespace-nowrap text-left">
                    <tr>
                      <th className="text-base text-[#333] p-4">Description</th>
                      <th className="text-base text-[#333] p-4">Quantity</th>
                      <th className="text-base text-[#333] p-4">Price</th>
                    </tr>
                  </thead>
                  <tbody className="whitespace-nowrap divide-y">
                    {cart &&
                      cart.map((p) => (
                        <tr>
                          <td className="py-6 px-4">
                            <div className="flex items-center gap-6 w-max">
                              <div className="h-36 shrink-0">
                                <img
                                  src={p.coverImage}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div>
                                <p className="text-md font-bold text-[#333]">
                                  {p.name}
                                </p>
                                <button
                                  type="button"
                                  className="mt-4 font-semibold text-red-400 text-sm"
                                  onClick={() => removeCartItem(p._id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="py-6 px-4">
                            <div className="flex divide-x border w-max">
                              <button
                                type="button"
                                className="bg-gray-100 px-4 py-2 font-semibold"
                                onClick={(e) => {
                                  setQuantity((prev) => {
                                    if (prev > 1) {
                                      return (prev -= 1);
                                    } else return (prev = 1);
                                  });
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-3 fill-current"
                                  viewBox="0 0 124 124"
                                >
                                  <path
                                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                    data-original="#000000"
                                  />
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md"
                              >
                                {quantity}
                              </button>
                              <button
                                type="button"
                                className="bg-gray-800 text-white px-4 py-2 font-semibold"
                                onClick={(e) => {
                                  setQuantity((prev) => (prev += 1));
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-3 fill-current"
                                  viewBox="0 0 42 42"
                                >
                                  <path
                                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                    data-original="#000000"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                          <td className="py-6 px-4">
                            <h4 className="text-md font-bold text-[#333]">
                              {p.price}
                            </h4>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            {auth && auth.user ? (
              <>
                <div className="bg-gray-50 p-10">
                  <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
                    Order Summary
                  </h3>
                  <ul className="text-[#333] divide-y mt-6">
                    <li className="flex flex-wrap gap-4 text-md py-4">
                      Subtotal{" "}
                      <span className="ml-auto font-bold">
                        {"₹" + itemTotal}
                      </span>
                    </li>
                    <li className="flex flex-wrap gap-4 text-md py-4">
                      Shipping{" "}
                      <span className="ml-auto font-bold">
                        {cart?.length > 0 ? `"₹" + ${shippingCharge}` : "0"}
                      </span>
                    </li>
                    <li className="flex flex-wrap gap-4 text-md py-4">
                      Tax{" "}
                      <span className="ml-auto font-bold">
                        {"₹" + Math.round(itemTotal * 0.18)}
                      </span>
                    </li>
                    <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                      Total{" "}
                      <span className="ml-auto">{"₹" + totalCartValue}</span>
                    </li>
                  </ul>
                  <Link to={"/checkout"}>
                    <button
                      type="button"
                      className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
                    >
                      Check out
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gray-50 p-10">
                  <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
                    Order Summary
                  </h3>
                  <ul className="text-[#333] divide-y mt-6">
                    <li className="flex flex-wrap gap-4 text-md py-4">
                      Subtotal{" "}
                      <span className="ml-auto font-bold">
                        {"₹" + itemTotal}
                      </span>
                    </li>
                    <li className="flex flex-wrap gap-4 text-md py-4">
                      Shipping{" "}
                      <span className="ml-auto font-bold">
                        {"₹" + shippingCharge}
                      </span>
                    </li>
                    <li className="flex flex-wrap gap-4 text-md py-4">
                      Tax{" "}
                      <span className="ml-auto font-bold">
                        {"₹" + itemTotal * 0.18}
                      </span>
                    </li>
                    <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                      Total{" "}
                      <span className="ml-auto">{"₹" + totalCartValue}</span>
                    </li>
                  </ul>
                  <Link to={"/login"}>
                    <button
                      type="button"
                      className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
                    >
                      Check out
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
