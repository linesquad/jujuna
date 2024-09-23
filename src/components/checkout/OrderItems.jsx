import { IoIosArrowRoundBack } from "react-icons/io";
import { useGetCartItems } from "../../hooks/useGetCartItems";
import CartItemsCheckOut from "./CartItemsCheckOut";
import { useNavigate } from "react-router-dom";

const OrderItems = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetCartItems();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  console.log(data);

  const totalPrice = data.reduce(
    (total, item) => total + item.unit * item.price,
    0
  );

  const handleBackToPage = () => {
    navigate(-1);
  };

  return (
    <div className="pl-5 h-full flex flex-col">
      <div className="">
        <h1 className="text-lg font-bold pl-5 py-6">Shopping cart</h1>
        <hr />
      </div>
      <p className="py-10 text-sm">You have {data.length} item in your cart</p>
      <div className="overflow-y-scroll">
        {data?.map((item) => {
          return <CartItemsCheckOut key={item.productId} item={item} />;
        })}
      </div>
      <div className="flex justify-between items-center">
        <div
          className="flex gap-2 py-10 pl-5 cursor-pointer"
          onClick={handleBackToPage}
        >
          <IoIosArrowRoundBack size={30} />
          <p>back to page</p>
        </div>
        <div className="pr-5">
          <p className="font-semibold">{`Total: $${totalPrice}`}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
