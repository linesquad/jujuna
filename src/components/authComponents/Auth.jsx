import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal } from "../../features/authSlice";

function Auth() {
  const { t } = useTranslation();
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();
  const isAuthModalOpen = useSelector((state) => state.auth.isAuthModalOpen);

  return (
    <div
      className={`fixed top-0 right-0 left-0 bottom-0 z-[100] bg-[#000]/90 ${
        !isAuthModalOpen ? "hidden" : ""
      }`}
      onClick={() => dispatch(closeAuthModal())}
    >
      <motion.div
        variants={{
          open: { scale: 1, x: "-50%", y: "-50%" },
          closed: { scale: 0.1 },
        }}
        initial="closed"
        animate="open"
        exit="closed"
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute w-full max-w-[400px] px-[10px] md:px-[0px] md:max-w-none md:w-[440px]  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[110] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <>
          <div
            className="self-end w-[30px] h-[30px] bg-[#EAE7E7] rounded-[50%] flex justify-center items-center cursor-pointer"
            onClick={() => dispatch(closeAuthModal())}
          >
            <FaTimes />
          </div>
          <div className="w-full bg-[#fff] mt-[11px] pt-[38px] rounded-[16px] pb-8">
            <h2 className="text-center text-[23px] font-semibold">
              {t("auth.header")}
            </h2>
            <div className="mt-[28px] flex items-center justify-center gap-[10px] md:gap-[50px] text-[17px] font-semibold px-[20px]">
              <p
                className={`tiny:text-sm w-full text-center pb-[14px] border-b-[2px] cursor-pointer ${
                  isSignIn ? "border-b-[#000]" : "border-b-transparent"
                } `}
                onClick={() => setIsSignIn(true)}
              >
                {t("auth.auth")}
              </p>
              <p
                className={`tiny:text-sm text-center w-full pb-[14px] border-b-[2px] ${
                  !isSignIn ? "border-b-[#000]" : "border-b-transparent"
                } cursor-pointer`}
                onClick={() => setIsSignIn(false)}
              >
                {t("auth.reg")}
              </p>
            </div>
            {isSignIn && <SignIn />}{" "}
            {!isSignIn && <SignUp setIsSignIn={setIsSignIn} />}
            {/* <GoogleSignIn /> */}
          </div>
        </>
      </motion.div>
    </div>
  );
}

export default Auth;
