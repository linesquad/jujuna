import Wrapper from "../components/Wrapper";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Signin from "../components/enterComponents/Signin";
import Register from "../components/enterComponents/Register";
// import Header from "../ui/Header";

function Enter() {
  const [isRegistering, setIsRegistering] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#7b5191]">
      {/* <Header /> */}
      <Wrapper>
        <div className="flex flex-col items-center justify-center lg:items-end pt-20 relative">
          <img
            src="/images/bannerLong.png"
            alt="banner"
            className="hidden lg:block absolute left-0 -bottom-[0px]"
          />
          <div
            className={`flex flex-col gap-2 smallExtra:flex-row smallExtra:justify-center smallExtra:space-x-4 mb-10 ${
              i18n.language === "ge" ? "lg:mr-[70px]" : "lg:mr-[92px]"
            }`}
          >
            <button
              onClick={() => setIsRegistering(true)}
              className="font-tommaso text-2xl px-6 py-2 bg-white rounded-full"
            >
              {t("enter.register")}
            </button>
            <button
              onClick={() => setIsRegistering(false)}
              className="font-tommaso text-2xl px-6 py-2 bg-white rounded-full"
            >
              {t("enter.auth")}
            </button>
          </div>

          {isRegistering ? <Register /> : <Signin />}
        </div>
      </Wrapper>
    </div>
  );
}

export default Enter;
