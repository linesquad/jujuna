import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { useFindCustomer } from "../../../hooks/useFindCustomer";

const ComentarNews = ({ blog }) => {
  const { t } = useTranslation();
  const [hearts, setHearts] = useState(Array(5).fill(false));
  const darkMode = useSelector(getMode);
  const { data: customer } = useFindCustomer();

  const handleToggle = (index) => {
    setHearts((prevHearts) =>
      prevHearts.map((heart, i) => (i === index ? !heart : heart))
    );
  };

  return (
    <div
      className={`w-full bg-transparent rounded-[20px] border tiny:p-1 smaller:p-2 smaller:pt-4 p-8 ${
        darkMode ? "text-white border-white" : "text-black border-black"
      }`}
    >
      <h1
        className={`mb-12 tiny:pl-[16px] smaller:pl-[17px] pl-[18px] sm:pl-[25px] md:pl-[32px] lg:pl-[39px]
        tiny:text-base smaller:text-[17px] text-lg sm:text-xl md:text-[22px] lg:text-2xl`}
      >
        {t("newsDetails.newestComentar")}
      </h1>
      {blog?.comments.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col mb-4 p-3 border rounded-[20px] ${
            darkMode ? "text-white border-white" : "text-black border-black"
          }`}
        >
          <div className="smaller:p-0 pl-[13px] sm:pl-[18px] md:pl-[23px] lg:pl-[28px] flex items-center justify-between">
            <div className="flex items-center tiny:-ml-4 tiny:gap-[8px] smaller:gap-[9px] gap-[10px] sm:gap-[17px] md:gap-[24px] lg:gap-[30px]">
              <div className="tiny:w-[40px] smaller:w-[60px] w-[70px] sm:w-[96px]">
                <img
                  src="/images/user.jpg"
                  alt="user"
                  className="tiny:w-12 tiny:h-12 smaller:w-12 smaller:h-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p
                  className="tiny:text-[12px] smaller:text-[12px] text-base sm:text-[17px] md:text-lg
                  tiny:max-w-[80px] lg:max-w-[400px]"
                >
                  {item.comment}
                </p>
                <p className="text-sm sm:text-[15px] lg:text-base">
                  {customer?.email}
                </p>
                <p className="hidden  sm:block sm:text-xs lg:text-sm">
                  12/08/2024
                </p>
              </div>
            </div>
            <div className="tiny:pr-3 smaller:pr-4 pr-5 sm:pr-6 md:pr-7">
              {hearts[index] ? (
                <IoIosHeart
                  color="#4c2185"
                  size={28}
                  onClick={() => handleToggle(index)}
                  className="cursor-pointer"
                />
              ) : (
                <IoMdHeartEmpty
                  color={darkMode ? "#ffffff" : "#000000"}
                  size={28}
                  onClick={() => handleToggle(index)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComentarNews;
