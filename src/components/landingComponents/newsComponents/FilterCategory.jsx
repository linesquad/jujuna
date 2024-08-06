import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FilterCategory = ({ toggleCategoryVisibility, isCategoryVisible }) => {
  const links = (
    <div
      className={`mt-4 flex ${
        toggleCategoryVisibility === undefined ||
        isCategoryVisible === undefined
          ? "flex-row gap-[40px] lg:gap-[80px] xl:gap-[100px] 2xl:gap-[120px]"
          : "flex-col"
      } gap-3`}
    >
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className="bg-[#EAEAEA] p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-[#613994] font-bold"
      >
        WINE CLUB
      </Link>
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className="bg-[#EAEAEA] p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-[#613994] font-bold"
      >
        WINE COCKTAIL
      </Link>
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className="bg-[#EAEAEA] p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-[#613994] font-bold"
      >
        INSPIRATION
      </Link>
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className="bg-[#EAEAEA] p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-[#613994] font-bold"
      >
        VINEYARD
      </Link>
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className="bg-[#EAEAEA] p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-[#613994] font-bold"
      >
        LATEST NEWS
      </Link>
    </div>
  );

  if (
    toggleCategoryVisibility === undefined ||
    isCategoryVisible === undefined
  ) {
    return links;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isCategoryVisible ? 1 : 0,
        y: isCategoryVisible ? 0 : -20,
      }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        opacity: { duration: 0.5, ease: "easeOut" },
        y: { duration: 0.5, ease: "easeOut" },
      }}
      className="mt-4 flex flex-col gap-3"
    >
      {links}
    </motion.div>
  );
};

export default FilterCategory;
