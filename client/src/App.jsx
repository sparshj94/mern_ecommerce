import React from "react";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MensCategoryPage from "./pages/MensCategoryPage";
import WomensCategoryPage from "./pages/WomensCategoryPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import ProductDetail from "./pages/ProductDetail";
import ProfilePage from "./pages/user/ProfilePage";
import AdminProfilePage from "./pages/admin/AdminProfilePage";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import Products from "./pages/admin/Products";
import { useAuth } from "./context/AuthContextProvider";
import ErrorPage from "./pages/ErrorPage";
function App() {
  const { auth } = useAuth();
  const role = auth?.user?.role;
  const isLogin = auth?.token;
  // console.log(auth);
  // console.log(auth?.token);
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/category/mens/:pid" element={<MensCategoryPage />} />
          <Route
            path="/category/womens/:pid"
            element={<WomensCategoryPage />}
          />

          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/user/profile"
            element={
              (role === 0) | (!isLogin === "") ? <ProfilePage /> : <HomePage />
            }
          />

          <Route
            path="/admin/profile"
            element={
              (role === 1) | (!isLogin === "") ? (
                <AdminProfilePage />
              ) : (
                <HomePage />
              )
            }
          />
          <Route
            path="/admin/create-category"
            element={
              (role === 1) | (!isLogin === "") ? (
                <CreateCategory />
              ) : (
                <HomePage />
              )
            }
          />
          <Route
            path="/admin/create-product"
            element={
              (role === 1) | (!isLogin === "") ? (
                <CreateProduct />
              ) : (
                <HomePage />
              )
            }
          />
          <Route
            path="/admin/products"
            element={
              (role === 1) | (!isLogin === "") ? <Products /> : <HomePage />
            }
          />

          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Route>
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
