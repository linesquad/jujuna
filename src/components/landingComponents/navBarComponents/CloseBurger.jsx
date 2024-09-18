import Wrapper from "../../Wrapper";
import Logo from "../../Logo";
import NavLinks from "./NavLinks";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "../../ThemeChanger";
import BurgerNav from "./BurgerNav";
import { useSelector } from "react-redux";
import { getIsOpen } from "../../../features/burgerMenuSlice";
import { getMode } from "../../../features/darkModeSlice";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FullCartDisplay from "../../cart&wishlist/cart/FullCartDisplay";
import FullWishListDisplay from "../../cart&wishlist/wishlist/FullWishListDisplay";

const CloseBurger = ({ setIsAuthModalOpen }) => {
  const open = useSelector(getIsOpen);
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();
  const [viewCart, setViewCart] = useState(false);
  const [seeWishList, setSeeWishList] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        setIsFixed(window.scrollY > 58);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeAllModals = () => {
    setViewCart(false);
    setSeeWishList(false);
  };

  const toggleViewCart = () => {
    setViewCart(true);
  };

  const toggleSeeWishList = () => {
    setSeeWishList(true);
  };

  return (
    <div className={`top-0 w-full  "text-white z-40 header"`}>
      <div className="bg-[#000] w-full hidden md:block">
        <Wrapper>
          <div className="px-[17px] py-[8px] md:px-0 flex items-center justify-between">
            <ThemeChanger />
            <div className="bg-[#fff] w-[70%] flex items-center py-[9px] pl-[8px] gap-[13px] rounded-[15px]">
              <FaSearch color="#000000" />
              <input type="text" className="w-full border-none outline-none" />
            </div>
            <LanguageChanger />
          </div>
        </Wrapper>
      </div>

      {isFixed && <div className="h-[77px]"></div>}
      <div
        ref={navRef}
        className={`${
          isFixed && open
            ? darkMode
              ? "bg-black"
              : "bg-[#fff]"
            : isFixed
            ? " bg-opacity-70 backdrop-blur-md"
            : ""
        } ${darkMode ? "bg-[#12151C]" : "bg-[#fff]"} ${
          isFixed ? "fixed top-0 left-0 right-0 z-50" : ""
        }`}
      >
        <Wrapper>
          <div>
            <nav className="flex justify-between items-center px-5 md:px-0 py-2 md:py-[14px]">
              <div className="flex md:hidden">
                <BurgerNav />
              </div>
              <Logo />

              <div className="hidden w-full md:w-[350px] lg:w-[450px]  md:block text-center text-bold gap-10">
                <NavLinks />
              </div>
              <div className="flex items-center gap-[10px] sm:gap-[12px] md:gap-[13.5px] lg:gap-[15px]">
                <div className="flex items-center gap-[10px] sm:gap-[12px] md:gap-[13.5px] lg:gap-[15px]">
                  <FaShoppingCart
                    color={`${darkMode ? "#fff" : "#000"}`}
                    size={20}
                    onClick={toggleViewCart}
                  />
                  <FaHeart
                    color={`${darkMode ? "#fff" : "#000"}`}
                    size={20}
                    onClick={toggleSeeWishList}
                  />
                  <div className="h-[27px] border-[1px] bprder-[#fff]"></div>
                </div>
                <FaUser
                  color={`${darkMode ? "#fff" : "#000"}`}
                  size={20}
                  onClick={() => setIsAuthModalOpen(true)}
                  cursor="pointer"
                />
              </div>
            </nav>
          </div>
        </Wrapper>
      </div>
      {viewCart && (
        <FullCartDisplay
          onClose={closeAllModals}
          title={t("cartSlicer.myCart")}
        />
      )}
      {seeWishList && (
        <FullWishListDisplay onClose={closeAllModals} title={"ფავორიტები"} />
      )}
    </div>
  );
};

export default CloseBurger;
