import Wrapper from "../Wrapper";
import rightArrow from "/images/rightArrow.svg";
import cocktailsFilter from "/images/cocktailsFillter.svg";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CocktailsSidebar from "./CocktailsSidebar";

function CocktailsHeader() {
  const [isFillterOpen, setIsFillterOpen] = useState(false);
  const darkMode = useSelector(getMode);
  return (
    <Wrapper>
      <div className="pt-[26px] pl-[16px] relative">
        <div
          className={`text-[12px] md:text-[16px] text-[#848282CC]/80 flex items-center gap-[9px] ${
            darkMode ? "text-color-primary" : ""
          }`}
        >
          <p>საწყისი გვერდი</p>
          <img src={rightArrow} alt="right-arrow" />
          <p>კოქტეილები</p>
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
              className={`absolute top-[120px] z-10 ${
                darkMode ? "bg-[#000]" : "bg-[#fff]"
              }  h-[300px] md:hidden rounded-md`}
            >
              <CocktailsSidebar />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
}

export default CocktailsHeader;
