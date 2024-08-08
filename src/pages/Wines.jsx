import { useSelector } from "react-redux";
import Product from "../components/winesComponents/product";
import Wrapper from "../components/Wrapper";
import { getMode } from "../features/darkModeSlice";
import useWines from "../hooks/useWines";
import { useEffect, useState } from "react";

const Wines = () => {
  const darkMode = useSelector(getMode);
  const { data } = useWines();

  const [language, setLanguage] = useState(localStorage.getItem("lng") || "en");

  // Update state when language changes
  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedLang = localStorage.getItem("lng");
      if (storedLang !== language) {
        setLanguage(storedLang);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [language]);

  return (
    <Wrapper>
      <div className="flex justify-center items-center flex-col">
        <div
          className={`flex justify-center items-center size-full ${
            darkMode
              ? "bg-gradient-to-b from-[#A583D1] via-[#724AA4] to-[#1E122E]"
              : "bg-gradient-to-b from-[#8A63A2] via-[#AE85CC] to-[#B99CCB]"
          }`}
        >
          {/* Header  */}
          <div className="flex justify-center items-center md:h-[499.84px] md:w-[573.83px] relative">
            <img
              src={"/images/splash.png"}
              alt=""
              className="w-[350px]  md:w-[765px] md:h-[920.77px] -rotate-[66deg]"
            />
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="absolute w-[200px] left-[100px] top-[100px] md:w-[300.22px] md:left-[170px] md:top-[100px]"
            />
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="absolute w-[200px] left-[30px] md:w-[300.22px] md:left-[50px]"
            />
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="absolute w-[200px] left-[170px] md:w-[300.22px] md:left-[280px]"
            />
          </div>
        </div>
        {/* Navigation  */}
      </div>

      <div className="flex justify-center items-center p-2 gap-[20px] md:p-8 md:gap-[100px] size-full bg-[#8A63A2]">
        <a
          href="/wines"
          className="size-20px font-[400] leading-[24.8px] text-white"
        >
          {language === "ge" ? "ყველა ღვინო" : "All Wines"}
        </a>

        <a
          href="/wines"
          className="size-20px font-[400] leading-[24.8px] text-white"
        >
          {language === "ge" ? "თეთრი და ვარდის ღვინო" : "White and Rose Wine"}
        </a>

        <a
          href="/wines"
          className="size-20px font-[400] leading-[24.8px] text-white "
        >
          {language === "ge" ? "წითელი ღვინო" : "Red Wine"}
        </a>

        <a
          href="/wines"
          className="size-20px font-[400] leading-[24.8px] text-white"
        >
          {language === "ge" ? "საჩუქრები" : "Gifts"}
        </a>
      </div>

      {/* Products  */}

      <div
        className={`bg-gradient-to-b ${
          darkMode
            ? "bg-gradient-to-b from-[#A583D1] via-[#724AA4] to-[#1E122E]"
            : "bg-[#EAEAEA]"
        } p-20`}
      >
        <div className="flex items-center flex-col gap-5 md:justify-between md:flex-row md:size-full">
          <p
            className={`text-[32px] font-[400] leading-[39.68px] ${
              darkMode ? "text-black" : "text-[#8A63A2]"
            }`}
          >
            {language === "ge" ? "ჩვენი პროდუქცია" : "Our Product"}
          </p>
          <div className="flex items-center justify-center gap-2">
            <p
              className={`${
                darkMode ? "text-[#000000]" : "text-[#908F8F]"
              } text-[24px] font-[400] leading-[29.76px]`}
            >
              {language === "ge" ? "ფილტრი" : "Filter"}
            </p>
            <select
              name=""
              id=""
              className="w-[140px] h-[30px] border border-black bg-transparent rounded-sm p-1"
            >
              <option
                value=""
                className="text-[20px] font-[400] leading-[24.8px]"
              >
                {language === "ge" ? "ფასი" : "Price"}
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3">
          {data?.map((wine) => (
            <Product
              key={wine.id}
              darkMode={darkMode}
              wine={wine}
              language={language}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Wines;
