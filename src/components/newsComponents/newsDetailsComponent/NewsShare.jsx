import { useTranslation } from "react-i18next";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
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
        <FaFacebook color="blue" size={40} />
        <FaLinkedin color="blue" size={40} />
        <FaSquareInstagram color="red" size={40} />
      </div>
    </div>
  );
};

export default NewsShare;
