import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

const FilterCategory = ({ toggleCategoryVisibility, isCategoryVisible }) => {
  const { t } = useTranslation();

  const mode = useSelector(getMode);
  const links = (
    <div
      className={` flex ${
        toggleCategoryVisibility === undefined ||
        isCategoryVisible === undefined
          ? "flex-row gap-[40px] lg:gap-[80px] xl:gap-[100px] 2xl:gap-[120px]"
          : "flex-col"
      } gap-3`}
    >
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className={`${
          mode ? "bg-[#664293] text-white" : "bg-[#EAEAEA] text-[#613994]"
        } p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)]  font-bold md:text-sm lg:text-base`}
      >
        {t("news.filterCategory.wineClub")}
      </Link>
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className={`${
          mode ? "bg-[#664293] text-white" : "bg-[#EAEAEA] text-[#613994]"
        } p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)]  font-bold md:text-sm lg:text-base`}
      >
        {t("news.filterCategory.wineCocktail")}
      </Link>
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className={`${
          mode ? "bg-[#664293] text-white" : "bg-[#EAEAEA] text-[#613994]"
        } p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)]  font-bold md:text-sm lg:text-base`}
      >
        {t("news.filterCategory.inspiration")}
      </Link>
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className={`${
          mode ? "bg-[#664293] text-white" : "bg-[#EAEAEA] text-[#613994]"
        } p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)]  font-bold md:text-sm lg:text-base`}
      >
        {t("news.filterCategory.vineYard")}
      </Link>
      <Link
        to="/news"
        onClick={toggleCategoryVisibility}
        className={`${
          mode ? "bg-[#664293] text-white" : "bg-[#EAEAEA] text-[#613994]"
        } p-3 md:shadow-[4px_4px_10px_rgba(0,0,0,0.2)]  font-bold md:text-sm lg:text-base`}
      >
        {t("news.filterCategory.latestNews")}
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
      exit={{
        opacity: 0,
        y: -20,
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      transition={{
        opacity: { duration: 0.8, ease: "easeInOut" },
        y: { duration: 0.8, ease: "easeInOut" },
      }}
      className="mt-4 flex flex-col gap-3"
    >
      {links}
    </motion.div>
  );
};

export default FilterCategory;
