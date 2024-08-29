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
import ModalCart from "../../ModalCart";
import { useState } from "react";
import { cartItems } from "../../../features/cartSlice";

const CloseBurger = () => {
  const scrolled = useScroll();
  const open = useSelector(getIsOpen);
  const darkMode = useSelector(getMode);
  const [modalOpen, setModalOpen] = useState(false);
  const items = useSelector(cartItems);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
    console.log(modalOpen);
  };

  return (
    <div className={`sticky top-0 w-full  "text-white z-40 header"`}>
      <div className="bg-[#000] w-full hidden md:block">
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
            ? darkMode
              ? "bg-black"
              : "bg-[#fff]"
            : scrolled
            ? " bg-opacity-70 backdrop-blur-md"
            : ""
        } ${darkMode ? "bg-[#12151C]" : "bg-[#fff]"} `}
      >
        <Wrapper>
          <div>
            <nav className="flex justify-between items-center px-5 md:px-0 py-2 md:py-[14px]">
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
                  {/* <div className="flex flex-col relative"> */}
                  <FaShoppingCart
                    color={`${darkMode ? "#fff" : "#000"}`}
                    size={20}
                    onClick={toggleModal}
                  />
                  {/* </div> */}
                  {/* <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
                    <ModalCart isOpen={modalOpen} onClose={toggleModal} />
                    </div> */}
                  <FaHeart color={`${darkMode ? "#fff" : "#000"}`} size={20} />
                  <div className="h-[27px] border-[1px] bprder-[#fff]"></div>
                </div>
                <FaUser color={`${darkMode ? "#fff" : "#000"}`} size={20} />
              </div>
            </nav>
          </div>
        </Wrapper>
      </div>
      <ModalCart
        isOpen={modalOpen}
        onClose={toggleModal}
        title="ჩემი კალათა"
        checkAllProductsText="კალათის ნახვა"
        items={items}
      />
    </div>
  );
};

export default CloseBurger;
