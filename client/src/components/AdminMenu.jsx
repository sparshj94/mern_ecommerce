import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="flex flex-col m-5 bg-gray-300 rounded-lg p-3">
        <NavLink to={"/dashboard/admin/create-product"}>Create Product</NavLink>
        <NavLink to={"/dashboard/admin/create-category"}>
          Create Category
        </NavLink>
        <NavLink to={"/dashboard/admin/get-product"}>All Products</NavLink>
      </div>
    </>
  );
};

export default AdminMenu;
