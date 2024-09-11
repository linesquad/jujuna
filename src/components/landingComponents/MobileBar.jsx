import Wrapper from "../Wrapper";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function MobileBar() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { t } = useTranslation();
  const darkMode = useSelector(getMode);
  return (
    <div className="bg-[#A37ABF]">
      <Wrapper>
        <div className="mb-36">
          <div
            className={`relative p-6 sm:pl-20 lg:pl-36 ${
              !darkMode && "text-white"
            }`}
          >
            <h1 className="text-xl md:text-2xl mb-4">
              {t("home.mobileBar.heading")}
            </h1>
            <p className="mb-4 max-w-[520px]">
              {t("home.mobileBar.paragraph")}
            </p>
            <Link
              to={"/news"}
              onClick={handleClick}
              className="flex items-center text-lg md:text-xl w-[190px]"
            >
              <span>{t("home.mobileBar.moreBtn")}</span>
              <MdOutlineKeyboardArrowRight className="w-6 h-6 mt-1" />
            </Link>
            <img
              src="/images/banner2PNG.png"
              alt="img"
              className="hidden lg:block absolute bottom-0 -right-8 w-[260px]"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default MobileBar;
