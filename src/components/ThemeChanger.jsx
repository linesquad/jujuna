import { useDispatch, useSelector } from "react-redux";
import { getMode, toggleDarkMode } from "../features/darkModeSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { getIsOpen } from "../features/burgerMenuSlice";
import { motion } from "framer-motion";

const ThemeChanger = () => {
  const mode = useSelector(getMode);
  const open = useSelector(getIsOpen);
  const dispatch = useDispatch();

  const size = open ? 50 : 25;

  const variants = {
    initial: { opacity: 0, scale: 0.5, rotate: 0 },
    animate: { opacity: 1, scale: 1, rotate: 360 },
    exit: { opacity: 0, scale: 0.5, rotate: -360 },
  };

  return (
    <motion.div
      className=""
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <button onClick={() => dispatch(toggleDarkMode())}>
        {mode ? (
          <motion.div
            key="light"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <MdLightMode size={`${size}`} />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <MdDarkMode size={size} />
          </motion.div>
        )}
      </button>
    </motion.div>
  );
};

export default ThemeChanger;
