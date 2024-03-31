import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <>
      <div className="flex flex-col">
        <NavLink to={"/dashboard/user/profile"}>Profile</NavLink>
        <NavLink to={"/dashboard/users/orders"}>Orders</NavLink>
      </div>
    </>
  );
};

export default UserMenu;
