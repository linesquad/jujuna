import { useSelector } from "react-redux";
import useCocktails from "../../hooks/useCocktails";
import Wrapper from "../Wrapper";
import CocktailCard from "./CocktailCard";
import CocktailsPegination from "./CocktailsPegination";
import CocktailsSidebar from "./CocktailsSidebar";
import { AnimatePresence, motion } from "framer-motion";
import { getMode } from "../../features/darkModeSlice";

function DisplayCocktails({ isFillterOpen }) {
  const { data: cocktails } = useCocktails();
  const darkMode = useSelector(getMode);
  return (
    <Wrapper>
      <div className="grid gap-[16px] grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] m-auto relative">
        {cocktails?.map((item) => {
          return <CocktailCard key={item.id} item={item} />;
        })}
        <AnimatePresence>
          {isFillterOpen && (
            <motion.div
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.09,
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.09,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className={`absolute top-0 ${
                darkMode ? "bg-[#000]" : "bg-[#fff]"
              }  h-[300px] md:hidden rounded-md`}
            >
              <CocktailsSidebar />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <CocktailsPegination />
    </Wrapper>
  );
}

export default DisplayCocktails;
