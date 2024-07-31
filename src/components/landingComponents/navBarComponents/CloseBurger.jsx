import Wrapper from "../../Wrapper";
import Logo from "../../Logo";
import NavLinks from "./NavLinks";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "../../ThemeChanger";
import useScroll from "../../../hooks/useScroll";
import BurgerNav from "./BurgerNav";
import { useSelector } from "react-redux";
import { getIsOpen } from "../../../features/burgerMenuSlice";

const CloseBurger = () => {
  const scrolled = useScroll();
  const open = useSelector(getIsOpen);

  return (
    <div
      className={`sticky top-0 w-full ${
        scrolled && open
          ? "bg-black"
          : scrolled
          ? "bg-black bg-opacity-70 backdrop-blur-md"
          : "bg-black"
      } "text-white z-40 header"`}
    >
      <Wrapper>
        <nav className="flex justify-between items-center px-5 md:px-0 py-2">
          <Logo />
          <div className="flex md:hidden">
            <BurgerNav />
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
  );
};

export default CloseBurger;
