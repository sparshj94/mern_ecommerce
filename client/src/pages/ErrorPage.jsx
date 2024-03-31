import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, [2000]);
  }, []);
  return (
    <>
      <div>
        <h1>404 Page Not Found</h1>
        <p>Redirecting you</p>
      </div>
    </>
  );
};

export default ErrorPage;
