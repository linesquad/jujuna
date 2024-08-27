import Wrapper from "../../Wrapper";
import Logo from "../../Logo";
import NavLinks from "./NavLinks";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "../../ThemeChanger";
import useScroll from "../../../hooks/useScroll";
import BurgerNav from "./BurgerNav";
import { useSelector } from "react-redux";
import { getIsOpen } from "../../../features/burgerMenuSlice";
import { getMode } from "../../../features/darkModeSlice";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const CloseBurger = () => {
  const scrolled = useScroll();
  const open = useSelector(getIsOpen);
  const darkMode = useSelector(getMode);

  return (
    <div className={`sticky top-0 w-full  "text-white z-40 header"`}>
      <div className="bg-[#000] w-full">
        <Wrapper>
          <div className="px-[17px] py-[8px] md:px-0 flex items-center justify-between">
            <ThemeChanger />
            <LanguageChanger />
          </div>
        </Wrapper>
      </div>
      <div
        className={`${
          scrolled && open
            ? "bg-black"
            : scrolled
            ? " bg-opacity-70 backdrop-blur-md"
            : ""
        } ${darkMode ? "bg-[#12151C]" : "bg-[#fff]"} `}
      >
        <Wrapper>
          <div>
            <nav className="flex justify-between items-center px-5 md:px-0 py-2 md:pb-[30px]">
              <div className="flex md:hidden">
                <BurgerNav />
              </div>
              <Logo />

              <div className="hidden w-full md:w-[470px] lg:w-[650px]  md:block text-center text-bold gap-10">
                <NavLinks />
              </div>
              <div className="flex items-center gap-[15px]">
                <FaSearch color={`${darkMode ? "#fff" : "#000"}`} size={20} />
                <div className="hidden lg:flex items-center gap-[15px]">
                  <FaShoppingCart
                    color={`${darkMode ? "#fff" : "#000"}`}
                    size={20}
                  />
                  <FaHeart color={`${darkMode ? "#fff" : "#000"}`} size={20} />
                  <div className="h-[27px] border-[1px] bprder-[#fff]"></div>
                </div>
                <FaUser color={`${darkMode ? "#fff" : "#000"}`} size={20} />
              </div>
            </nav>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default CloseBurger;
