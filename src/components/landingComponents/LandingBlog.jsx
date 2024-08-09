import Button from "../Button";
import { useTranslation } from "react-i18next";

/* eslint-disable react/prop-types */
function OneNews({ image, date, title, description, type, bgColor }) {
  const { i18n } = useTranslation();

  const currentTitle = i18n.language === "en" ? title.en : title.ge;
  const currentDescription =
    i18n.language === "en" ? description.en : description.ge;

  return (
    <div className="flex flex-col  rounded-xl">
      <div className="w-full h-[347px]">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="bottle-1"
        />
      </div>
      <div
        className={`flex flex-col px-[20px] py-[15px] pb-[20px] ${bgColor} text-color-primary h-[255px] justify-between`}
      >
        <p className="text-[14px]  font-normal">{date}</p>
        {/* <h2 className="text-[24px] font-normal">{`${
          title.ge.length > 27 ? title.ge.slice(0, 20) + "..." : title.ge
        }`}</h2> */}
        <h2 className="text-[24px] font-normal">
          {currentTitle.length > 27
            ? currentTitle.slice(0, 20) + "..."
            : currentTitle}
        </h2>
        {/* <p className="text-[16px] font-normal">{`${description.ge.slice(
          0,
          120
        )}...`}</p> */}
        <p className="text-[16px] font-normal">
          {`${currentDescription.slice(0, 120)}...`}
        </p>
        <div className="self-end">
          <Button type={type}>
            {i18n.language === "en" ? "Learn more" : "გაიგე მეტი"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OneNews;
