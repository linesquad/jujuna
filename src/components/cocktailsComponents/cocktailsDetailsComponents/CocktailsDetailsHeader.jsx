import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import fillterIcon from "/images/filterIcon.svg";
import Wrapper from "../../Wrapper";

function CocktailsDetailsHeader({ item }) {
  const { i18n } = useTranslation();
  const darkMode = useSelector(getMode);
  return (
    <div>
      <Wrapper>
        <div className="flex justify-between items-center pt-[30px] md:hidden">
          <div>
            <FaArrowLeft color={`${darkMode ? "fff" : "#000"}`} />
          </div>

          <div>
            <img src={fillterIcon} alt="fillter-icon" />
          </div>
        </div>
        <div className="hidden md:flex items-center pt-[25px] gap-[10px] text-[#78808C]">
          <p>მთავარი</p>
          <span>/</span>
          <p>პროდუქტები</p>
        </div>
        <p
          className={`text-center md:text-left md:ml-[90px] md:mt-[40px] ${
            darkMode ? "text-[#fff]" : "text-[#0E0F12]"
          } md:font-bold md:text-[32px]`}
        >
          {i18n.language === "ge"
            ? item?.titleTranslations.ge
            : item?.titleTranslations.en}
        </p>
      </Wrapper>
    </div>
  );
}

export default CocktailsDetailsHeader;
