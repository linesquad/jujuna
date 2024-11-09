import { useSelector } from "react-redux";
// import { useGetCartItems } from "../../../hooks/useGetCartItems";

const CartCount = () => {
  // const { data: cartData } = useGetCartItems();

  // const CartCountValue = cartData?.length;

  const count = useSelector((state) => state.count.cartCount);
  console.log(count);
  return (
    <span className="absolute top-[-12px] right-[-11px] bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {/* {CartCountValue} */}
      {count}
    </span>
  );
};

export default CartCount;
