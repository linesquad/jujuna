import { useSelector } from "react-redux";
import Product from "../components/winesComponents/product";
import Wrapper from "../components/Wrapper";
import { getMode } from "../features/darkModeSlice";
import useWines from "../hooks/useWines";
import { useEffect, useState } from "react";
import Header from "../components/winesComponents/Header";
import WineNavigation from "../components/winesComponents/WineNavigation";
import Spinner from "../components/Spinner";

const Wines = () => {
  const darkMode = useSelector(getMode);
  const { data, isLoading } = useWines();

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

  if (isLoading)
    return (
      <>
        <div className="flex justify-center items-center flex-col">
          <div
            className={`flex justify-center items-center size-full ${
              darkMode
                ? "bg-gradient-to-b from-[#A583D1] via-[#724AA4] to-[#1E122E]"
                : "bg-gradient-to-b from-[#8A63A2] via-[#AE85CC] to-[#B99CCB]"
            }`}
          >
            {/* Header  */}
            <Header />
          </div>
        </div>
        <WineNavigation language={language} />
        <Spinner />;
      </>
    );

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
          <Header />
        </div>
      </div>

      {/* Navigation  */}

      <WineNavigation language={language} />

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
