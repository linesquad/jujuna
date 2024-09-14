import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FilterItem({ title, mobile, subCategories }) {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  return (
    <div>
      <button
        className={`flex items-center ${
          mobile ? "justify-between " : "gap-2"
        } w-full tiny:text-[16px] text-lg text-left py-2 justify-between`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-xl">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      {isOpen && (
        <div className="pl-4 pt-2 flex flex-col gap-[17px]">
          {subCategories?.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-[12px]">
                <div className="w-[22px] h-[22px] rounded-md border border-[#E9EBEC] flex justify-center items-center"></div>
                <span className="w-full">
                  {i18n.language === "ge"
                    ? item.titleTranslations.ge
                    : item.titleTranslations.en}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
