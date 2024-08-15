import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa";

const ComentarNews = () => {
  const { t } = useTranslation();
  const [hearts, setHearts] = useState(Array(5).fill(false));

  const handleToggle = (index) => {
    setHearts((prevHearts) =>
      prevHearts.map((heart, i) => (i === index ? !heart : heart))
    );
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#A583D1] to-[#54436B] rounded">
      <h1
        className="py-6 tiny:pl-[16px] smaller:pl-[17px] pl-[18px] sm:pl-[25px] md:pl-[32px] lg:pl-[39px]
        tiny:text-base smaller:text-[17px] text-lg sm:text-xl md:text-[22px] lg:text-2xl text-white"
      >
        {t("newsDetails.newestComentar")}
      </h1>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex flex-col p-3">
          <div className="tiny:pl-[11px] smaller:pl-[12px] pl-[13px] sm:pl-[18px] md:pl-[23px] lg:pl-[28px] flex items-center justify-between">
            <div className="flex items-center tiny:gap-[8px] smaller:gap-[9px] gap-[10px] sm:gap-[17px] md:gap-[24px] lg:gap-[30px]">
              <div className="tiny:w-[60px] smaller:w-[60px] w-[70px] sm:w-[96px]">
                <img
                  src="/images/user.jpg"
                  alt="user"
                  className="tiny:w-12 tiny:h-12 smaller:w-12 smaller:h-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p
                  className="text-white tiny:text-[14px] smaller:text-[15px] text-base sm:text-[17px] md:text-lg
                  tiny:max-w-[80px] lg:max-w-[400px]"
                >
                  გმადლობთ კარგი მომსახურებისთვის
                </p>
                <p className="text-white/80 text-sm sm:text-[15px] lg:text-base">
                  example@gmail.com
                </p>
                <p className="hidden text-white/80 sm:block sm:text-xs lg:text-sm">
                  12/08/2024
                </p>
              </div>
            </div>
            <div className="tiny:pr-3 smaller:pr-4 pr-5 sm:pr-6 md:pr-7">
              <FaHeart
                color={hearts[index] ? "#4c2185" : "white"}
                size={28}
                onClick={() => handleToggle(index)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComentarNews;
