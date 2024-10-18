// import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import { useGetCartItems } from "../../../hooks/useGetCartItems";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { motion } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";
import TotalSummary from "./TotalSummary";
import CartItem from "./CartItem";
import {
  handleDecrease,
  handleDelete,
  handleIncrease,
  itemInCache,
} from "../../../features/cartUtils";
import MemoizedCheckoutButton from "./CheckoutButton";
import MemoizedReusableHeader from "../ReusableHeader";
import ReusableLoading from "../../../ui/ReusableLoading";

const FullCartDisplay = ({ onClose, title }) => {
  const modalRef = useRef(null);
  const { data: cartItems, isError, isLoading, error } = useGetCartItems();
  const { mutate: updateCart, isPending } = useAddToCart();
  const queryClient = useQueryClient();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

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
        tiny:w-full smaller:w-full w-[350px]"
      >
        <MemoizedReusableHeader onClose={onClose} title={title} />

        <div className="flex-1 p-5 overflow-y-scroll">
          {isLoading ? (
            <div className="h-full flex  justify-center">
              <ReusableLoading width="300px" height="300px" />
            </div>
          ) : isError ? (
            <p className="text-center text-red-500">{error.message}</p>
          ) : cartItems?.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id}>
                <CartItem
                  item={item}
                  handleDecrease={(item) =>
                    handleDecrease(
                      item,
                      updateCart,
                      itemInCache,
                      queryClient,
                      isError
                    )
                  }
                  handleIncrease={() =>
                    handleIncrease(item, updateCart, itemInCache, queryClient)
                  }
                  handleDelete={() =>
                    handleDelete(item, updateCart, itemInCache, queryClient)
                  }
                  isPending={isPending}
                />
              </div>
            ))
          )}
        </div>
        {cartItems && cartItems.length > 0 && (
          <>
            <TotalSummary cartItems={cartItems} />
            <MemoizedCheckoutButton onClose={onClose} />
          </>
        )}
      </motion.div>
    </div>
  );
};

export default FullCartDisplay;
