import React from "react";
import HeaderBox from "@/components/HeaderBox";
import  PaymentTransferForm from "@/components/PaymentTransferForm";

const Transfer = () => {
  return (
    <div className="flex max-h-screen w-full flex-col gap-8 overflow-y-scroll bg-gray-25 px-5 lg:px-8 py-7 no-scrollbar ">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={[]}  />
      </section>
    </div>
  );
};

export default Transfer;
