import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import SearchResult from "./SearchResult";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import downArrow from "/images/downArrow.svg";

function CocktailsSidebar() {
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();
  const [searchCocktail, setSearchCocktail] = useState("");

  return (
    <div
      className={`w-[250px] lg:w-[305px] h-full ${
        darkMode ? "bg-[#55426E]/30" : "bg-[#fff]/30"
      }  rounded-[15px]  pt-[50px] pr-[25px] pl-[19px] pb-[45px] z-10`}
    >
      <div className="flex flex-col gap-[35px]">
        <div className="flex gap-[15px] items-center relative">
          <input
            type="text"
            placeholder={t("cocktails.cocktailsSidebar.inputSearch")}
            className={`py-[5px] pl-[10px] w-full ${
              darkMode
                ? "bg-[#613994] text-color-primary"
                : "text-color-black bg-[#dee2e6]"
            } `}
            value={searchCocktail}
            onChange={(e) => setSearchCocktail(e.target.value)}
          />

          {searchCocktail && <SearchResult searchCocktail={searchCocktail} />}
        </div>

        <div className="flex gap-[20px] items-center">
          <p
            className={`${
              darkMode ? "text-color-primary" : "text-color-black"
            }`}
          >
            Filtered By:
          </p>
          <div
            className={`w-[150px] h-[25px] border-[1px]  ${
              darkMode ? "border-[#fff]" : "border-[#000]"
            } px-[15px] flex items-center justify-between cursor-pointer`}
          >
            <p>Default</p>
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailsSidebar;
