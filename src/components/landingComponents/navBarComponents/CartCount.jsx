import React from "react";
import { useGetCartItems } from "../../../hooks/useGetCartItems";

const CartCount = () => {
  const { data: cartData } = useGetCartItems();

  const CartCountValue = cartData?.length;

  return (
    <span className="absolute top-[-12px] right-[-11px] bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {CartCountValue}
    </span>
  );
};

export default CartCount;
