import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth() {
  const { t } = useTranslation();
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-[30]">
      <div className="absolute w-[440px]  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[50] flex flex-col">
        <div className="self-end w-[30px] h-[30px] bg-[#EAE7E7] rounded-[50%] flex justify-center items-center">
          <FaTimes />
        </div>
        <div className="w-full bg-[#fff] mt-[11px] pt-[38px] rounded-[16px]">
          <h2 className="text-center text-[23px] font-semibold">
            {t("auth.header")}
          </h2>
          <div className="mt-[28px] flex items-center justify-center gap-[50px] text-[17px] font-semibold px-[20px]">
            <p
              className={`w-full text-center pb-[14px] border-b-[2px] cursor-pointer ${
                !isSignIn ? "border-b-[#000]" : ""
              } `}
              onClick={() => setIsSignIn(false)}
            >
              ავტორიზაცია
            </p>
            <p
              className={`text-center w-full pb-[14px] border-b-[2px] ${
                isSignIn ? "border-b-[#000]" : ""
              } cursor-pointer`}
              onClick={() => setIsSignIn(true)}
            >
              რეგისტრაცია
            </p>
          </div>
          {isSignIn && <SignIn />}
          {!isSignIn && <SignUp />}
        </div>
      </div>
    </div>
  );
}

export default Auth;
