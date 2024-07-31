import { useSelector } from "react-redux";
import BurgerCloseX from "./BurgerCloseX";
import { getIsOpen } from "../../../features/burgerMenuSlice";
import BurgerMenu from "./BurgerMenu";
import { motion, AnimatePresence } from "framer-motion";

const BurgerNav = () => {
  const open = useSelector(getIsOpen);

  const menuVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  return (
    <div className={`w-full bg-black text-white sticky top-0 z-40`}>
      <nav className="flex justify-between items-center px-5 py-2">
        <div></div>
        <div className="flex md:hidden">
          <AnimatePresence>
            {open ? (
              <motion.div
                key="close"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={menuVariants}
                transition={{ duration: 0.5 }}
              >
                <BurgerCloseX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={menuVariants}
                transition={{ duration: 0.5 }}
              >
                <BurgerMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default BurgerNav;
