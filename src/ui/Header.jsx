import { useDispatch, useSelector } from "react-redux";
import { close, getIsOpen } from "../features/burgerMenuSlice";
import { useEffect } from "react";
import CloseBurger from "../components/landingComponents/navBarComponents/CloseBurger";
import OpenBurger from "../components/landingComponents/navBarComponents/OpenBurger";
import useWindowSize from "../hooks/useWindowSize";
import { AnimatePresence } from "framer-motion";
// import { useUser } from "@clerk/clerk-react";
// import { useRegistration } from "../hooks/useRegistration";

const Header = () => {
  const open = useSelector(getIsOpen);
  const dispatch = useDispatch();

  const { width } = useWindowSize();

  // const { user } = useUser();
  // const { registerUser } = useRegistration();

  // useEffect(() => {
  //   if (user) {
  //     registerUser(user);
  //   }
  // }, [user, registerUser]);

  // useEffect(() => {
  //   if (user) {
  //     // Call registerUser with the necessary data
  //     registerUser(user);
  //   }
  // }, [user, registerUser]);

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
    <div className="sticky top-0 w-full z-40 header">
      <CloseBurger />
      <AnimatePresence>{open && <OpenBurger />}</AnimatePresence>
    </div>
  );
};

export default Header;
