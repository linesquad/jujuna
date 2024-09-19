import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useEffect, useRef } from "react";
import ProductsFilter from "./ProductsFilter";

export default function MobileFilterContainer({
  setShowFilter,
  minValue,
  maxValue,
  categories,
  setCategoryId,
  categoryId,
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
    <div
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
      />
    </div>
  );
}
