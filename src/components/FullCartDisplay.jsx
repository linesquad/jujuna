// import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useGetCartItems } from "../hooks/useGetCartItems";
import { useAddToCart } from "../hooks/useAddToCart";

const FullCartDisplay = ({ isOpen, onClose, title }) => {
  // const { i18n } = useTranslation();
  const modalRef = useRef(null);
  const { data: cartItems, isError, isLoading, error } = useGetCartItems();
  const { mutate: updateCart, isPending } = useAddToCart();

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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const handleDecrease = (item) => {
    updateCart({
      ...item,
      unit: item.unit - 1,
    });
  };

  const handleIncrease = (item) => {
    updateCart({
      ...item,
      unit: item.unit + 1,
    });
  };

  const handleDelete = (item) => {
    updateCart({
      ...item,
      unit: 0,
    });
  };

  return (
    <div className="fixed inset-0 z-50 lg:flex ">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div
        ref={modalRef}
        className="relative ml-auto h-full bg-white shadow-xl rounded-lg flex flex-col
        tiny:w-[200px] smaller:w-[250px] w-[350px]"
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 tiny:text-base smaller:text-lg">
            {title}
          </h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <FaTimes className="tiny:text-[18px] smaller:text-[19px] text-[20px]" />
          </button>
        </div>

        <div className="flex-1 p-5 overflow-y-scroll">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center py-4 border-b border-gray-200 tiny:flex-col smaller:flex-col"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    // alt={i18n.language === "en" ? item.name.en : item.name.ge}
                    className="w-[80px] h-[120px] object-cover mr-3 rounded-md cursor-pointer
                  tiny:w-[40px] tiny:h-[80px] smaller:w-[60ox] smaller:h-auto"
                  />
                  <div className="flex flex-col flex-grow justify-between gap-2">
                    <h3
                      className="text-base break-words w-[120px] cursor-pointer
                  tiny:text-xs smaller:text-sm"
                    >
                      {/* {i18n.language === "en" ? item.name.en : item.name.ge} */}
                      {item.title}
                    </h3>
                    <p className="font-semibold text-[22px] tiny:text-lg smaller:text-xl">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="w-full">
                  <div
                    className="flex flex-col items-end gap-6 w-full px-2 py-1 
                    tiny:flex-row-reverse tiny:items-center tiny:pt-3
                  tiny:justify-around
                  smaller:flex-row-reverse smaller:items-center smaller:pt-4 smaller:justify-around"
                  >
                    <RiDeleteBin7Line
                      size={20}
                      onClick={() => handleDelete(item)}
                    />
                    <div className="w-[80px] h-[35px] border rounded-full border-[#8F8F8F] px-2 py-1 flex gap-4">
                      <button
                        className="cursor-pointer"
                        onClick={() => handleDecrease(item)}
                        disabled={isPending}
                      >
                        {isPending ? "X" : "-"}
                      </button>
                      <span>{item.unit}</span>
                      <button
                        className="cursor-pointer"
                        onClick={() => handleIncrease(item)}
                        disabled={isPending}
                      >
                        {isPending ? "X" : "+"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-700">Total:</p>
              <p className="text-lg font-bold text-gray-800">
                $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.unit,
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
