import { useSelector } from "react-redux";

const WishlistCount = () => {
  const count = useSelector((state) => state.count.wishListCount);
  return (
    <span className="absolute top-[-12px] right-[-11px] bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {count}
    </span>
  );
};

export default WishlistCount;
