import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import CategoryNavigation from "../components/CategoryNavigation";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <CategoryNavigation /> */}
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default Layout;
