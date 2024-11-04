import { useDispatch, useSelector } from "react-redux";
import { close, getIsOpen } from "../features/burgerMenuSlice";
import { useEffect } from "react";
import CloseBurger from "../components/landingComponents/navBarComponents/CloseBurger";
import OpenBurger from "../components/landingComponents/navBarComponents/OpenBurger";
import useWindowSize from "../hooks/useWindowSize";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const open = useSelector(getIsOpen);
  const dispatch = useDispatch();

  const { width } = useWindowSize();

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

  useEffect(() => {
    if (width >= 768) {
      dispatch(close());
    }
  }, [width, dispatch]);

  return (
    <div className="top-0 w-full z-40 header">
      <CloseBurger />
      <AnimatePresence>{open && <OpenBurger />}</AnimatePresence>
    </div>
  );
};

export default Header;
