import { RiDeleteBin7Line } from "react-icons/ri";
import { useAddToCart, useGetCartItems } from "../hooks/useAddToCart";

const DisplayCartItems = () => {
  const { data: cartItems, isError, isLoading, error } = useGetCartItems();
  const { mutate: updateCart } = useAddToCart();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  cartItems.map((items) => {
    console.log(items.productId);
  });

  const handleDecrease = (cartItem) => {
    updateCart({
      ...cartItem,
      unit: cartItem.unit - 1,
    });
  };

  const handleIncrease = (cartItem) => {
    updateCart({
      ...cartItem,
      unit: cartItem.unit + 1,
    });
  };

  return (
    <>
      {cartItems.map((cartItem) => (
        <div key={cartItem.productId} className="flex items-center py-4">
          <img
            src={cartItem.image}
            className="max-w-16 max-h-24 object-cover mr-4 rounded-md cursor-pointer"
            alt={cartItem.title}
          />
          <div className="flex flex-col justify-between h-full gap-4">
            <h3
              className="text-base w-[200px] break-words cursor-pointer"
              // onClick={() => onNavigateToDetails(item)}
            >
              {cartItem.title}
            </h3>
            <p className="font-semibold text-[22px]">{`$${cartItem.price}`}</p>
          </div>
          <div className="flex flex-col items-end gap-6 w-full px-2 py-1">
            <RiDeleteBin7Line
              size={20}
              // onClick={() => handleRemoveItem(item.id)}
            />
            <div className="w-[97px] h-[35px] border rounded-full border-[#8F8F8F] px-5 py-1 flex gap-4">
              <button
                className="cursor-pointer"
                onClick={() => handleDecrease(cartItem)}
              >
                -
              </button>
              <span>{cartItem.unit}</span>
              <button
                className="cursor-pointer"
                onClick={() => handleIncrease(cartItem)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DisplayCartItems;
