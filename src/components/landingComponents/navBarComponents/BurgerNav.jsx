import { useDispatch, useSelector } from "react-redux";
import { getIsOpen, toggleBurgerMenu } from "../../../features/burgerMenuSlice";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const BurgerNav = () => {
  const open = useSelector(getIsOpen);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleBurgerMenu());
  };

  const menuVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  return (
    <div className={`w-full  text-white sticky top-0 z-40`}>
      <nav className="flex justify-between items-center">
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
                <IoClose
                  size="25"
                  onClick={handleToggle}
                  className=" cursor-pointer"
                />
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
                <GiHamburgerMenu
                  size="25"
                  onClick={handleToggle}
                  className=" cursor-pointer"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default BurgerNav;
