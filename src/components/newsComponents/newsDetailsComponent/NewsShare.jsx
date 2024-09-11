import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

const NewsShare = () => {
  const { t } = useTranslation();
  const mode = useSelector(getMode);
  return (
    <div className="max-w-[200px]">
      <h1 className={`pb-2 ${mode ? "text-white" : "text-black"}`}>
        {t("newsDetails.share")}
      </h1>
      <hr className=" border-gray-300 pb-2" />
      <div className="flex gap-5">
        <img
          src="/images/facebookIconNews.svg"
          alt="facebook"
          className="w-[40px] h-[40px] cursor-pointer"
        />
        <img
          src="/images/linkedinIconNews.png"
          alt="linkedin"
          className="w-[40px] h-[40px] cursor-pointer"
        />
        <img
          src="/images/instagramIconNews.svg"
          alt="instagram"
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NewsShare;
