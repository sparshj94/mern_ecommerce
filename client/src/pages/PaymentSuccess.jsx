import React from "react";
import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const refNum = searchQuery.get("reference");
  return (
    <div>
      <h2>Reference No.</h2>
      <h3>{refNum}</h3>
    </div>
  );
};

export default PaymentSuccess;
