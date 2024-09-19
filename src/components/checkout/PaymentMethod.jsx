import { FaCreditCard, FaRegCreditCard } from "react-icons/fa";

const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-bold">Payment Method</h1>
      <div className="rounded-lg bg-[#EAEAEA] flex items-center justify-between pl-4 pr-2 py-6 shadow-md">
        <div className="flex flex-col gap-1">
          <h1 className="text-base text-[#908F8F]">Credit Card</h1>
          <p className="text-xs text-[#908F8F]">Secure and encrypted</p>
        </div>
        <div className="flex gap-3">
          <FaRegCreditCard size={30} className="cursor-pointer" />
          <FaCreditCard size={30} className="cursor-pointer" />
          <FaRegCreditCard size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
