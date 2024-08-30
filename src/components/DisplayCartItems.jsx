import { useTranslation } from "react-i18next";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";

const DisplayCartItems = ({ items, onNavigateToDetails }) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <>
      {items.length === 0 ? (
        <p className="py-10 text-center">No items in the cart</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="flex items-center py-4">
            <img
              src={item.image}
              alt={i18n.language === "en" ? item.name.en : item.name.ge}
              className="max-w-16 max-h-24 object-cover mr-4 rounded-md cursor-pointer"
              onClick={() => onNavigateToDetails(item)}
            />
            <div className="flex flex-col justify-between h-full gap-4">
              <h3
                className="text-base w-[200px] break-words cursor-pointer"
                onClick={() => onNavigateToDetails(item)}
              >
                {i18n.language === "en" ? item.name.en : item.name.ge}
              </h3>
              <p className="font-semibold text-[22px]">{`$${item.price}`}</p>
            </div>
            <div className="flex flex-col items-end gap-6 w-full px-2 py-1">
              <RiDeleteBin7Line
                size={20}
                onClick={() => handleRemoveItem(item.id)}
              />
              <div className="w-[97px] h-[35px] border rounded-full border-[#8F8F8F] px-5 py-1 flex gap-4">
                <button
                  className="cursor-pointer"
                  onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="cursor-pointer"
                  onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default DisplayCartItems;
