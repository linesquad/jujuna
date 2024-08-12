import { IoChevronBack } from "react-icons/io5";
import NewsDetailsWrapper from "./NewsDetailsWrapper";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsDetailsBackButton = () => {
  const navigate = useNavigate();
  const mode = useSelector(getMode);
  const { t } = useTranslation();
  return (
    <NewsDetailsWrapper>
      <div
        className="flex items-center max-w-32 cursor-pointer py-6 sm:py-7 sm:gap-7 md:py-8  md:gap-8 lg:py-9 lg:gap-9 xl:py-12 xl:gap-11"
        onClick={() => navigate(-1)}
      >
        <IoChevronBack size={30} color={`${mode ? "white" : "black"}`} />
        <p
          className={`hidden ${
            mode ? "text-white" : "text-black"
          } sm:block sm:text-xl md:text-[23px] lg:text-[26px] xl:text-[28px] pb-1`}
        >
          {t("newsDetails.backButton")}
        </p>
      </div>
    </NewsDetailsWrapper>
  );
};

export default NewsDetailsBackButton;
