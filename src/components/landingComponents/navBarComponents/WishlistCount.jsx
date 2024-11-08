import React from "react";
import useGetWishListItems from "../../../hooks/useGetWishListItems";

const WishlistCount = () => {
  const { data } = useGetWishListItems();
  const wishlistCount = data?.length;
  return (
    <span className="absolute top-[-12px] right-[-11px] bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {wishlistCount}
    </span>
  );
};

export default WishlistCount;
