import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useEffect, useRef } from "react";
import ProductsFilter from "./ProductsFilter";
import { motion } from "framer-motion";

export default function MobileFilterContainer({
  setShowFilter,
  minValue,
  maxValue,
  categories,
  setCategoryId,
  categoryId,
  pageUrl,
}) {
  const darkMode = useSelector(getMode);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowFilter]);

  return (
    <motion.div
      variants={{
        open: {
          x: "0%",
          transition: {
            type: "spring",
          },
        },
        closed: {
          x: "-150%",
          transition: {
            type: "spring",
          },
        },
      }}
      initial="closed"
      animate="open"
      exit="closed"
      ref={containerRef}
      className={`${
        darkMode
          ? "bg-[#12151C] text-white border border-white"
          : "bg-white text-black "
      } z-10  absolute top-10 left-0 w-full max-w-[400px] shadow-[2px_5px_15px_2px_rgba(0,0,0,0.1)] rounded-xl lg:hidden`}
    >
      <ProductsFilter
        minValue={minValue}
        maxValue={maxValue}
        categories={categories}
        setCategoryId={setCategoryId}
        categoryId={categoryId}
        pageUrl={pageUrl}
      />
    </motion.div>
  );
}
