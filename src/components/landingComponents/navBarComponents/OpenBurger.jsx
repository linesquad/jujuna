import { motion } from "framer-motion";

import NavLinks from "./NavLinks";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "../../ThemeChanger";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useRef } from "react";
import { getIsOpen, close } from "../../../features/burgerMenuSlice";

const OpenBurger = memo(() => {
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const open = useSelector(getIsOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (open) {
          dispatch(close());
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, dispatch]);

  return (
    <motion.div
      ref={menuRef}
      className="bg-black w-4/5 h-dvh fixed  text-white flex flex-col items-center gap-20 z-50 pt-3"
      key="open"
      initial={{ x: "-100%" }}
      exit={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavLinks />
      <LanguageChanger />
      <ThemeChanger />
    </motion.div>
  );
});

OpenBurger.displayName = "OpenBurger";

export default OpenBurger;
