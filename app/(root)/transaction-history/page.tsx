import HeaderBox from "@/components/HeaderBox";
import React from "react";

const TransactionHistory = () => {
  return (
    <div className="flex max-h-screen w-full flex-col gap-8 overflow-y-scroll bg-gray-25 px-5 lg:px-8 py-7 no-scrollbar">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>
    </div>
  );
};

export default TransactionHistory;
