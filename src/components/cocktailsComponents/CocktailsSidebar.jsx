import { useSelector } from "react-redux";
import downArrow from "/images/downArrow.svg";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

function CocktailsSidebar() {
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();

  return (
    <div
      className={`w-[250px] lg:w-[305px] h-full ${
        darkMode ? "bg-[#55426E]/30" : "bg-[#fff]/30"
      }  rounded-[15px]  pt-[50px] pr-[25px] pl-[19px] z-10`}
    >
      <div className="flex flex-col gap-[35px]">
        <div className="flex justify-between items-center">
          <p className={`text-[14px] ${darkMode ? "text-color-primary" : ""}`}>
            {t("cocktails.cocktailsSidebar.alcohol")}
          </p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#D9D9D9]"></div>
        </div>

        <div className="flex justify-between items-center">
          <p className={`text-[14px] ${darkMode ? "text-color-primary" : ""}`}>
            {t("cocktails.cocktailsSidebar.country")}
          </p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#fff] flex justify-center items-center">
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className={`text-[14px] ${darkMode ? "text-color-primary" : ""}`}>
            {t("cocktails.cocktailsSidebar.date")}
          </p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#fff] flex justify-center items-center">
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className={`text-[14px] ${darkMode ? "text-color-primary" : ""}`}>
            {t("cocktails.cocktailsSidebar.volume")}
          </p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#fff] flex justify-center items-center">
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailsSidebar;
