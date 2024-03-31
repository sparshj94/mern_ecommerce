import React, { useState } from "react";
import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../context/AuthContextProvider";
import axios from "axios";
const AdminDashboard = () => {
  const { auth } = useAuth();

  return (
    <>
      <div className="flex">
        <div>
          <AdminMenu />
        </div>
        <div>
          <h1>Content</h1>
          <div>
            <h2>Admin Name: {auth?.user?.name}</h2>
            <h2>Admin email: {auth?.user?.email}</h2>
            <h2>Admin phone: {auth?.user?.phone}</h2>
          </div>
          {/* <form enctype="multipart/form-data" onSubmit={handleSubmit}>
            <input
              type="text"
              name={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              name={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              name={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              type="text"
              name={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="file"
              name="coverImage"
              onChange={(e) => setCoverImage(e.target.files[0])}
            />
            <input
              type="file"
              name="multipleImage"
              onChange={(e) => setMultipleImage(e.target.files[0])}
            />
            <button type="submit">submiyt</button>
          </form> */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
