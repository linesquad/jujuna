import Wrapper from "../../Wrapper";
import Logo from "../../Logo";
import NavLinks from "./NavLinks";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "../../ThemeChanger";
import BurgerNav from "./BurgerNav";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { getIsOpen } from "../../../features/burgerMenuSlice";
import { getMode } from "../../../features/darkModeSlice";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSignOutAlt,
  FaArrowDown,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FullCartDisplay from "../../cart&wishlist/cart/FullCartDisplay";
import FullWishListDisplay from "../../cart&wishlist/wishlist/FullWishListDisplay";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { closeAuthModal, openAuthModal } from "../../../features/authSlice";
import SingleSearchResult from "./SingleSearchResult";

const CloseBurger = () => {
  const open = useSelector(getIsOpen);
  const darkMode = useSelector(getMode);
  const isAuthModalOpen = useSelector((state) => state.auth.isAuthModalOpen);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [viewCart, setViewCart] = useState(false);
  const [seeWishList, setSeeWishList] = useState(false);
  const [isAuthRequired, setIsAuthRequired] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [hover, setHover] = useState("");
  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState("wine");
  const [isFlagModalOpen, setIsFlagModalOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const accesToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(closeAuthModal());
  };

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
    if (!accesToken && !refreshToken) {
      dispatch(openAuthModal());
      setIsAuthRequired(true);
    } else {
      setViewCart(true);
    }
  };

  const toggleSeeWishList = () => {
    if (!accesToken && !refreshToken) {
      dispatch(openAuthModal());
      setIsAuthRequired(true);
    } else {
      setSeeWishList(true);
    }
  };

  useEffect(() => {
    if (!isAuthModalOpen && isAuthRequired) {
      setIsAuthRequired(false);
    }
  }, [isAuthModalOpen, isAuthRequired]);

  return (
    <div className={`top-0 w-full text-white z-40 header`}>
      <div className="bg-[#000] w-full hidden md:block">
        <Wrapper>
          <div className="px-[17px] py-[8px] md:px-0 flex items-center justify-between">
            <ThemeChanger />
            <div className="bg-[#fff] w-[70%] flex items-center py-[9px] pl-[8px] gap-[13px] rounded-[15px] relative">
              <div
                className="flex items-center gap-[10px] border border-[#000] rounded-[20px] py-[5px] px-[20px] cursor-pointer relative"
                onClick={() => setIsFlagModalOpen((isOpen) => !isOpen)}
              >
                <p className="text-[#000]">{flag}</p>
                <FaArrowDown color="#000" size={14} />
                {isFlagModalOpen && (
                  <motion.div
                    className="absolute right-0 left-0 top-[60px] border border-[#ddd] z-[100] flex flex-col gap-[5px] py-[8px] rounded-[8px] shadow-lg bg-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  >
                    <p
                      className="text-[#333] text-lg font-medium border-b border-gray-200 pl-[15px] py-[8px] cursor-pointer hover:bg-[#f4f4f4] hover:text-[#0070f3] rounded-[8px] transition-colors"
                      onClick={() => setFlag("wine")}
                    >
                      Wine
                    </p>
                    <p
                      className="text-[#333] text-lg font-medium border-b border-gray-200 pl-[15px] py-[8px] cursor-pointer hover:bg-[#f4f4f4] hover:text-[#0070f3] rounded-[8px] transition-colors"
                      onClick={() => setFlag("cocktail")}
                    >
                      Cocktail
                    </p>
                  </motion.div>
                )}
              </div>
              <input
                type="text"
                className="w-full border-none outline-none text-[#000]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <AnimatePresence>
                {search.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 left-0 top-[70px] max-h-[500px]  bg-gray-100 z-[99] overflow-y-auto flex flex-col gap-[15px] shadow-lg"
                  >
                    <SingleSearchResult flag={flag} title={search} clear={setSearch} />
                  </motion.div>
                )}
              </AnimatePresence>
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
            ? "bg-opacity-70 backdrop-blur-md"
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

              <div className="hidden w-full md:w-[350px] lg:w-[450px] md:block text-center text-bold gap-10">
                <NavLinks />
              </div>
              <div className="flex items-center gap-[10px] sm:gap-[12px] md:gap-[13.5px] lg:gap-[15px]">
                <div className="flex items-center gap-[10px] sm:gap-[12px] md:gap-[13.5px] lg:gap-[15px]">
                  <FaShoppingCart
                    color={`${darkMode ? "#fff" : "#000"}`}
                    size={20}
                    onClick={toggleViewCart}
                    className="cursor-pointer"
                  />
                  <FaHeart
                    color={`${darkMode ? "#fff" : "#000"}`}
                    size={20}
                    onClick={toggleSeeWishList}
                    className="cursor-pointer"
                  />
                  <div className="h-[27px] border-[1px] border-[#fff]"></div>
                </div>
                <div className="relative">
                  <FaUser
                    color={`${darkMode ? "#fff" : "#000"}`}
                    size={20}
                    onClick={() => {
                      dispatch(openAuthModal()); // Open the modal if tokens are not available
                    }}
                    cursor="pointer"
                  />
                  <AnimatePresence>
                    {isAuthModalOpen && accesToken && refreshToken && (
                      <motion.div
                        className="absolute top-10 left-[-200px] lg:left-[-100px] bg-[#eaeaea] flex w-[220px] h-[60px] p-[10px] justify-between rounded-[20px] z-[150]"
                        variants={{
                          open: { scale: 1 },
                          closed: { scale: 0 },
                        }}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                      >
                        <div
                          className="flex flex-col justify-center items-center cursor-pointer w-[100px]"
                          onMouseLeave={() => setHover("")}
                          onClick={() => {
                            navigate("/userPage");
                            dispatch(closeAuthModal()); // Close modal if navigating
                          }}
                        >
                          <FaUser
                            onMouseEnter={() => setHover("userPage")}
                            color="black"
                          />
                          {hover === "userPage" && <p>User Page</p>}
                        </div>
                        <div
                          className="flex flex-col justify-center items-center cursor-pointer w-[100px]"
                          onMouseLeave={() => setHover("")}
                          onClick={() => {
                            handleLogout();
                            dispatch(closeAuthModal()); // Close modal on logout
                          }}
                        >
                          <FaSignOutAlt
                            onMouseEnter={() => setHover("logOut")}
                            color="red"
                          />
                          {hover === "logOut" && (
                            <p className="text-red-700">logout</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
