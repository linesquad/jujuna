import BurgerMenu from "../components/landingComponents/navBarComponents/BurgerMenu";
import LanguageChanger from "../components/landingComponents/navBarComponents/LanguageChanger";
import Logo from "../components/Logo";
import NavLinks from "../components/landingComponents/navBarComponents/NavLinks";
import ThemeChanger from "../components/ThemeChanger";
import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import { getIsOpen } from "../features/burgerMenuSlice";
import BurgerCloseX from "../components/landingComponents/navBarComponents/BurgerCloseX";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Header = () => {
  const open = useSelector(getIsOpen);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <>
      {!open ? (
        <div className="w-full bg-black text-white">
          <Wrapper>
            <nav className="flex justify-between items-center px-5 md:px-0 py-2">
              <Logo />
              <div className="flex md:hidden">
                <BurgerMenu />
              </div>
              <div className="hidden w-full md:w-auto  md:block text-center text-bold gap-10">
                <NavLinks />
              </div>
              <div className="hidden md:flex w-full md:w-auto px-4 py-2 gap-2 justify-center items-center">
                <LanguageChanger />
                <ThemeChanger />
              </div>
            </nav>
          </Wrapper>
        </div>
      ) : (
        <motion.div
          className="bg-black w-4/5 h-dvh fixed text-white flex flex-col justify-center items-center gap-10 z-50"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-5 right-5">
            <BurgerCloseX />
          </div>
          <Logo />
          <NavLinks />
          <LanguageChanger />
          <ThemeChanger />
        </motion.div>
      )}
    </>
  );
};

export default Header;
