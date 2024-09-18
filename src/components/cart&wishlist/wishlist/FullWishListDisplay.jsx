import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useGetWishListItems from "../../../hooks/useGetWishListItems";
import MemoizedReusableHeader from "../ReusableHeader";
import WishListItem from "./WishListItem";

const FullWishListDisplay = ({ onClose, title }) => {
  const {
    data: wishListItems,
    isError,
    isLoading,
    error,
  } = useGetWishListItems();
  console.log(wishListItems);
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
        <MemoizedReusableHeader onClose={onClose} title={title} />
        <div className="flex-1 p-5 overflow-y-scroll">
          {wishListItems.length === 0 ? (
            <p className="text-center text-gray-500">Your wishlist is empty.</p>
          ) : (
            wishListItems.map((item) => (
              <div key={item._id}>
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
