import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

function AboutUsButton() {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);
  return (
    <button
      className={`w-[170px] rounded-[22px] py-[9px] mt-[21px] flex justify-center items-center ${
        darkMode ? "bg-[#58387F]" : "bg-[#000]"
      } text-[#fff]`}
    >
      {t("home.aboutUs.button")}
    </button>
  );
}

export default AboutUsButton;
