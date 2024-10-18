import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useGetWishListItems from "../../../hooks/useGetWishListItems";
import MemoizedReusableHeader from "../ReusableHeader";
import WishListItem from "./WishListItem";
import ReusableLoading from "../../../ui/ReusableLoading";

const FullWishListDisplay = ({ onClose, title }) => {
  const {
    data: wishListItems,
    isError,
    isLoading,
    error,
  } = useGetWishListItems();
  const modalRef = useRef(null);

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
        tiny:w-full 
        smaller:w-full w-[350px]"
      >
        <MemoizedReusableHeader onClose={onClose} title={title} />
        <div className="flex-1 p-5 overflow-y-scroll">
          {isLoading ? (
            <div className="h-full flex  justify-center">
              <ReusableLoading width="300px" height="300px" />
            </div>
          ) : isError ? (
            <p className="text-center text-red-500">{error.message}</p>
          ) : wishListItems?.length === 0 ? (
            <p className="text-center text-gray-500">
              Your wish list is empty.
            </p>
          ) : (
            wishListItems.map((item) => (
              <div key={item.productId}>
                <WishListItem item={item} />
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FullWishListDisplay;
