import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../features/cartSlice";

const FullCartDisplay = ({ isOpen, onClose, title, items }) => {
  const { i18n } = useTranslation();
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:flex lg:pt-[110px]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Cart Modal */}
      <div
        ref={modalRef}
        className="relative ml-auto w-[350px] h-full bg-white shadow-xl rounded-lg flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-5 overflow-y-scroll">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center py-4 border-b border-gray-200"
              >
                <img
                  src={item.image}
                  alt={i18n.language === "en" ? item.name.en : item.name.ge}
                  className="w-[80px] h-[120px] object-cover mr-3 rounded-md cursor-pointer"
                />
                <div className="flex flex-col flex-grow justify-between gap-2">
                  <h3 className="text-base break-words w-[120px] cursor-pointer">
                    {i18n.language === "en" ? item.name.en : item.name.ge}
                  </h3>
                  <p className="font-semibold text-[22px]">${item.price}</p>
                </div>

                <div className="">
                  <div className="flex flex-col items-end gap-6 w-full px-2 py-1">
                    <RiDeleteBin7Line
                      size={20}
                      // onClick={() => handleRemoveItem(item.id)}
                    />
                    <div className="w-[80px] h-[35px] border rounded-full border-[#8F8F8F] px-2 py-1 flex gap-4">
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
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        {items.length > 0 && (
          <div className="p-5 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-700">Total:</p>
              <p className="text-lg font-bold text-gray-800">
                $
                {items.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullCartDisplay;
