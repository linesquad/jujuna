import Wrapper from "../Wrapper";
import rightArrow from "/images/rightArrow.svg";
import cocktailsFilter from "/images/cocktailsFillter.svg";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

function CocktailsHeader({ setIsFillterOpen }) {
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="pt-[26px] pl-[16px] relative">
        <div
          className={`text-[12px] md:text-[16px] text-[#848282CC]/80 flex items-center gap-[9px] ${
            darkMode ? "text-color-primary" : ""
          }`}
        >
          <p>{t("cocktails.cocktailsHeader.p1")}</p>
          <img src={rightArrow} alt="right-arrow" />
          <p>{t("cocktails.cocktailsHeader.p2")}</p>
        </div>
        <img
          src={cocktailsFilter}
          alt="cocktails-fillter"
          className="mt-[25px] md:hidden"
          onClick={() => setIsFillterOpen((fillter) => !fillter)}
        />
      </div>
    </Wrapper>
  );
}

export default CocktailsHeader;
