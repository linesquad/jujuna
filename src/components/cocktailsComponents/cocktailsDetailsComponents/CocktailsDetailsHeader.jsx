import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import fillterIcon from "/images/filterIcon.svg";

function CocktailsDetailsHeader({ item }) {
  const { t, i18n } = useTranslation();
  const darkMode = useSelector(getMode);
  return (
    <div>
      <div className="flex justify-between items-center mt-[30px]">
        <div>
          <FaArrowLeft />
        </div>

        <div>
          <img src={fillterIcon} alt="fillter-icon" />
        </div>
      </div>
      <p className="text-center">
        {i18n.language === "ge" ? item?.name.ge : item?.name.en}
      </p>
    </div>
  );
}

export default CocktailsDetailsHeader;
