// import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import { useGetCartItems } from "../../hooks/useGetCartItems";
import { useAddToCart } from "../../hooks/useAddToCart";
import { motion } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";
import CartHeader from "./CartHeader";
import CheckoutButton from "./CheckoutButton";
import TotalSummary from "./TotalSummary";
import CartItem from "./CartItem";
import {
  handleDecrease,
  handleDelete,
  handleIncrease,
  itemInCache,
} from "./cartUtils";

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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

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
        <CartHeader onClose={onClose} title={title} />

        <div className="flex-1 p-5 overflow-y-scroll">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                handleDecrease={() =>
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
            ))
          )}
        </div>
        {cartItems.length > 0 && <TotalSummary cartItems={cartItems} />}
        {cartItems.length > 0 && <CheckoutButton />}
      </motion.div>
    </div>
  );
};

export default FullCartDisplay;
