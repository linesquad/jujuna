import { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Wrapper from "./Wrapper";
import { useTranslation } from "react-i18next";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../features/cartSlice";

const ModalCart = ({ isOpen, onClose, title, checkAllProductsText, items }) => {
  const modalRef = useRef(null);
  const { i18n } = useTranslation();
  const dispatch = useDispatch(removeFromCart);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  if (!isOpen) return null;

  return (
    <div className="lg:fixed lg:inset-0 lg:bg-black lg:bg-opacity-50 lg:z-50 lg:pt-[110px]">
      <Wrapper>
        <div className="hidden w-full lg:flex justify-end">
          <div
            ref={modalRef}
            className="bg-white w-[434px] rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center px-5 py-4">
              <h2 className="text-base font-semibold">{title}</h2>
              <div
                className="cursor-pointer bg-[#EAE7E7] rounded-full p-2"
                onClick={onClose}
              >
                <FaTimes size={12} />
              </div>
            </div>
            <hr />
            <div className="px-5 h-[123px] overflow-y-scroll w-full">
              {items.length === 0 ? (
                <p>No items in the cart.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center py-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-16 max-h-24 object-cover mr-4 rounded-md"
                    />
                    <div className="flex flex-col justify-between h-full gap-4">
                      <h3 className="text-base w-[200px] break-words">
                        {i18n.language === "en" ? item.name.en : item.name.ge}
                      </h3>
                      <p className="font-semibold text-[22px]">{`$${item.price}`}</p>
                    </div>
                    <div className="flex flex-col items-end gap-6 w-full  px-2 py-1">
                      <RiDeleteBin7Line
                        size={20}
                        onClick={() => handleRemoveItem(item.id)}
                      />
                      <div className="w-[97px] h-[35px] border rounded-full border-[#8F8F8F] px-5 py-1 flex gap-4">
                        <button
                          className="cursor-pointer"
                          onClick={() =>
                            dispatch(decreaseQuantity({ id: item.id }))
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="cursor-pointer"
                          onClick={() =>
                            dispatch(increaseQuantity({ id: item.id }))
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <hr />
            <div className="flex justify-between items-center px-5 pt-2 pb-7">
              <h2 className="text-lg font-bold">სულ:</h2>
              <h2>100$</h2>
            </div>
            <button
              className="bg-black text-white py-[10px] px-[131px] rounded-full text-base mb-4 mx-5 text-center font-semibold"
              onClick={onClose}
            >
              {checkAllProductsText}
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ModalCart;
