import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const NewsShare = () => {
  const { t } = useTranslation();
  const mode = useSelector(getMode);
  const shareUrl = "https://linedevltd.vercel.app/";
  return (
    <div className="max-w-[200px]">
      <h1 className={`pb-2 ${mode ? "text-white" : "text-black"}`}>
        {t("newsDetails.share")}
      </h1>
      <hr className=" border-gray-300 pb-2" />
      <div className="flex gap-5">
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={40} />
        </FacebookShareButton>

        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={40} />
        </LinkedinShareButton>
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
