import React from "react";
import AdminMenu from "../../components/AdminMenu";
import AdminInfo from "../../components/AdminInfo";
import AdminNavigation from "../../components/AdminNavigation";

const CreateProduct = () => {
  return (
    <>
      <div className="flex  justify-evenly mt-[3rem]">
        <div>
          <AdminNavigation />
        </div>
        <div>
          <AdminInfo />
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
