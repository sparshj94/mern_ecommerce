import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import AdminNavigation from "../../components/AdminNavigation";
const CreateCategory = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/category/create-category", {
        name,
      });

      if (res && res.status) {
        toast.success("category created");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [name, setName] = useState();
  return (
    <>
      <div className="flex justify-evenly mt-[8rem]">
        <div>
          <AdminNavigation />
        </div>
        <div>
          <div>
            <h1>Create category</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
