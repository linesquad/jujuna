import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import Button from "../../Button";

const NewsDetailsWriteComment = () => {
  const mode = useSelector(getMode);
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <div className="pb-3">
        <h1
          className={`hidden sm:inline sm:text-[18px] md:text-[21px] ${
            mode ? "text-white" : "text-black"
          }`}
        >
          {t("newsDetails.comment")}
        </h1>
      </div>
      <hr className="hidden sm:inline border-gray-300 pb-4" />
      <div className="w-full">
        <textarea
          id="comment"
          name="comment"
          placeholder={t("newsDetails.writeComent")}
          className="w-full rounded p-2  bg-gradient-to-r from-[#A583D1] to-[#54436B] placeholder:text-white 
          tiny:placeholder:text-[8px] smaller:placeholder:text-[9px] placeholder:text-[10px] sm:placeholder:text-sm
          md:placeholder:text-lg lg:placeholder:text-[24px] text-white tiny:text-[9px] smaller:text-[10px] text-[11px] sm:text-[15px]
          md:text-[19px] lg:text-[25px] 
          focus:outline-[#613994]
          h-[88px] sm:h-[124px] md:h-[160px] lg:h-[196px]"
        ></textarea>
      </div>
      <div className="flex justify-end pt-4">
        <Button type={"primary"}>ავტორიზაცია</Button>
      </div>
    </div>
  );
};

export default NewsDetailsWriteComment;
