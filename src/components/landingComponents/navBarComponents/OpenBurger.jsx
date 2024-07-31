import { motion } from "framer-motion";
import Logo from "../../Logo";
import NavLinks from "./NavLinks";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "../../ThemeChanger";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getIsOpen, close } from "../../../features/burgerMenuSlice";
import BurgerNav from "./BurgerNav";

const OpenBurger = () => {
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
    <>
      <motion.div
        ref={menuRef}
        className="bg-black w-4/5 h-dvh fixed text-white flex flex-col justify-center items-center gap-28 z-50"
        key="open"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
        <NavLinks />
        <LanguageChanger />
        <ThemeChanger />
      </motion.div>
      <BurgerNav />
    </>
  );
};

export default OpenBurger;
