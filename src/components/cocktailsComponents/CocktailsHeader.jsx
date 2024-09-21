import Wrapper from "../Wrapper";
import rightArrow from "/images/rightArrow.svg";
import cocktailsFilter from "/images/cocktailsFillter.svg";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProductsFilter from "../wineComponents/ProductsFilter";
import { FaTimes } from "react-icons/fa";

function CocktailsHeader({ categories, categoryId, setCategoryId, pageUrl }) {
  const [isFillterOpen, setIsFillterOpen] = useState(false);
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="pt-[26px] pl-[16px] relative">
        <div
          className={`text-[12px] md:text-[16px] text-[#848282CC]/80 flex items-center gap-[9px] ${
            darkMode ? "text-color-primary" : ""
          }`}
        >
          <p>{t("cocktails.cocktailsHeader.p1")}</p>
          <img src={rightArrow} alt="right-arrow" />
          <p>{t("cocktails.cocktailsHeader.p2")}</p>
        </div>
        <img
          src={cocktailsFilter}
          alt="cocktails-fillter"
          className="mt-[25px] md:hidden"
          onClick={() => setIsFillterOpen((fillter) => !fillter)}
        />
        <AnimatePresence>
          {isFillterOpen && (
            <motion.div
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  },
                },
                closed: {
                  x: "-150%",
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className={`fixed top-0 w-[100%] h-screen z-[150] ${
                darkMode ? "bg-[#000]" : "bg-[#fff]"
              }   md:hidden rounded-md`}
            >
              <div className="p-[15px]">
                <FaTimes onClick={() => setIsFillterOpen(false)} />
              </div>
              <ProductsFilter
                minValue={10}
                maxValue={1000}
                categories={categories}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                pageUrl={pageUrl}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
}

export default CocktailsHeader;
