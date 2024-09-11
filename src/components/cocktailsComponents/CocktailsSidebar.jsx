import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import SearchResult from "./SearchResult";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import downArrow from "/images/downArrow.svg";

function CocktailsSidebar({ setSortValue, sortValue }) {
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();
  const [searchCocktail, setSearchCocktail] = useState("");
  const [isSortSelectOpen, setIsSortSelectOpen] = useState(false);

  return (
    <div
      className={`w-[250px] lg:w-[305px] h-full ${
        darkMode
          ? "bg-[#55426E]/30 md:bg-transparent"
          : "bg-[#fff]/30 md:bg-transparent"
      }  rounded-[15px]  pt-[50px] pr-[25px] pl-[19px] pb-[45px] z-10`}
    >
      <div className="flex flex-col gap-[35px]">
        <div className="flex gap-[15px] items-center relative">
          <input
            type="text"
            placeholder={t("cocktails.cocktailsSidebar.inputSearch")}
            className={`py-[5px] pl-[10px] w-full rounded-md ${
              darkMode
                ? "bg-[#613994] text-color-primary"
                : "text-color-black bg-[#dee2e6]"
            } `}
            value={searchCocktail}
            onChange={(e) => setSearchCocktail(e.target.value)}
          />

          {searchCocktail && <SearchResult searchCocktail={searchCocktail} />}
        </div>

        <div className="flex gap-[5px] lg:gap-[15px] items-center">
          <p
            className={`${
              darkMode ? "text-color-primary" : "text-color-black"
            } text-[13px] lg:text-[16px]`}
          >
            {t("cocktails.cocktailsSidebar.sort")}:
          </p>
          <div
            className={`min-w-[110px] lg:min-w-[150px] h-[35px] border-[1px]  ${
              darkMode ? "border-[#fff]" : "border-[#000]"
            } px-[5px] lg:px-[15px] flex items-center justify-between cursor-pointer rounded-md relative`}
            onClick={() => setIsSortSelectOpen((modal) => !modal)}
          >
            <p
              className={`${
                darkMode ? "text-color-primary" : "text-color-black"
              } text-[13px] lg:text-[16px]`}
            >
              {sortValue}
            </p>
            <img src={downArrow} alt="down-arrow" />
            {isSortSelectOpen && (
              <div
                className={`absolute w-full flex flex-col gap-[10px] top-[40px] right-[0px] ${
                  darkMode ? "bg-[#613994]" : "bg-[#fff]"
                } rounded-md`}
              >
                <p
                  className={`pl-[8px] pb-[5px] border-b-[1px] border-b-[#000] ${
                    darkMode
                      ? "border-b-[#fff] text-[#eaeaea]"
                      : "border-b-[#000] text-color-black"
                  }`}
                  onClick={() =>
                    setSortValue(t("cocktails.cocktailsSidebar.default"))
                  }
                >
                  {t("cocktails.cocktailsSidebar.default")}
                </p>
                <p
                  className={`pl-[8px] pb-[5px] border-b-[1px] border-b-[#000] ${
                    darkMode
                      ? "border-b-[#fff] text-[#eaeaea]"
                      : "border-b-[#000] text-color-black"
                  }`}
                  onClick={() =>
                    setSortValue(t("cocktails.cocktailsSidebar.price"))
                  }
                >
                  {t("cocktails.cocktailsSidebar.price")}
                </p>
                <p
                  className={`pl-[8px] pb-[5px] border-b-[1px] border-b-[#000] ${
                    darkMode
                      ? "border-b-[#fff] text-[#eaeaea]"
                      : "border-b-[#000] text-color-black"
                  }`}
                  onClick={() =>
                    setSortValue(t("cocktails.cocktailsSidebar.size"))
                  }
                >
                  {t("cocktails.cocktailsSidebar.size")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailsSidebar;
