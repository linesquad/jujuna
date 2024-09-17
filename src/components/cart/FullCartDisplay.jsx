// import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useGetCartItems } from "../../hooks/useGetCartItems";
import { useAddToCart } from "../../hooks/useAddToCart";
import { motion } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";

const FullCartDisplay = ({ onClose, title }) => {
  const modalRef = useRef(null);
  const { data: cartItems, isError, isLoading, error } = useGetCartItems();
  const { mutate: updateCart, isPending } = useAddToCart();
  const queryClient = useQueryClient();

  const itemInCache = (itemId, unit, method) => {
    const data = queryClient.getQueryData(["cartItems"]);

    if (data) {
      const updatedData = data
        .map((item) => {
          return item.productId.toString() === itemId.toString()
            ? {
                ...item,
                unit:
                  method === "plus"
                    ? unit + 1
                    : method === "minus"
                    ? unit - 1
                    : 0,
              }
            : item;
        })
        .filter((item) => item.unit > 0);
      console.log(updatedData);
      queryClient.setQueryData(["cartItems"], updatedData);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const handleDecrease = (item) => {
    const newUnit = item.unit - 1;

    if (newUnit === 0) {
      handleDelete(item);
    } else {
      updateCart({
        ...item,
        unit: item.unit - 1,
      });
      if (isError) return;

      itemInCache(item.productId, item.unit, "minus");
    }
  };

  const handleIncrease = (item) => {
    updateCart({
      ...item,
      unit: item.unit + 1,
    });
    itemInCache(item.productId, item.unit, "plus");
  };

  const handleDelete = (item) => {
    updateCart({
      ...item,
      unit: 0,
    });
    itemInCache(item.productId, item.unit, "delete");
  };

  const variants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <div className="fixed inset-0 z-50 lg:flex ">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <motion.div
        ref={modalRef}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ type: "tween", duration: 0.5 }}
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
                    src={item?.image}
                    alt={item?.title}
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
            <div className="flex justify-around items-center">
              <p className="text-lg font-semibold text-gray-700 max-w-[44px]">
                Total:
              </p>
              <p className="text-lg font-bold text-gray-800 max-w-[300px]">
                $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.unit,
                  0
                )}
              </p>
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="p-5 border-gray-200 bg-gray-50">
            <div className="flex justify-center items-center">
              <button className="bg-black text-white px-20 py-2 rounded cursor-pointer">
                Check Out
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FullCartDisplay;
