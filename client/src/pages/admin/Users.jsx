import React from "react";
import AdminMenu from "../../components/AdminMenu";

const Users = () => {
  return (
    <>
      <div className="flex m-3 justify-around">
        <div>
          <AdminMenu />
        </div>
        <div>
          <div>
            <h1>users</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
