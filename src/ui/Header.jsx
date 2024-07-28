import ThemeSwitcher from "../components/landingComponents/ThemeSwitcher";
import { useState } from "react";
import logo from "/images/logo.svg";
import NavBar from "../components/landingComponents/navBar";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="bg-color-black flex items-center px-5 pt-[41px] pb-[10px] gap-4 xl:px-[72px]  xl:py-[11px] relative font-arialgeo">
      <img className="w-[45px] h-[45px] mr-auto" src={logo} alt="logo" />
      <button
        className="font-tommaso cursor-pointer text-2xl leading-[28px] text-color-primary px-[53px] xl:hidden"
        onClick={handleClick}
      >
        მენიუ
      </button>
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 1, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -1000 }}
            transition={{ duration: 1 }}
            className="xl:hidden absolute top-24 left-0  w-full xl:static"
          >
            <NavBar onChange={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden xl:block xl:w-full absolute top-24 left-0  w-full xl:static">
        <NavBar />
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
