import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import Button from "../../Button";
import { useAddComment } from "../../../hooks/useAddComment";
import { useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetailsWriteComment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();
  const { mutate } = useAddComment();

  const handleSend = () => {
    mutate({ blogId: id, comment: comment });
    setComment("");
  };

  return (
    <div className="pb-20">
      <div className="pb-3">
        <h1
          className={`hidden sm:inline sm:text-[18px] md:text-[21px] ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {t("newsDetails.comment")}
        </h1>
        <hr className="border-t-[3px] mt-4 mb-2" />
      </div>
      <hr className="hidden sm:inline border-gray-300 pb-4" />
      <div className="w-full">
        <textarea
          id="comment"
          name="comment"
          placeholder={t("newsDetails.writeComent")}
          className={`w-full rounded-[22px] p-2 border-2 bg-transparent ${
            darkMode ? "border-white text-white" : "border-black text-black"
          }
          tiny:placeholder:text-[8px] smaller:placeholder:text-[9px] placeholder:text-[10px] sm:placeholder:text-sm
          md:placeholder:text-lg tiny:text-[9px] smaller:text-[10px] text-[11px] sm:text-[15px]
          md:text-[19px] lg:text-[25px] p-4
          focus:outline-none
          h-[88px] sm:h-[124px] md:h-[160px] lg:h-[196px]`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-end pt-4 w-[124px]">
        <Button type={"primary"} onClick={handleSend}>
          გაგზავნა
        </Button>
      </div>
    </div>
  );
};

export default NewsDetailsWriteComment;
