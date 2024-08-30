import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { LuFilter } from "react-icons/lu";
export default function MobileWineFilter({ setShowFilter }) {
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();

  return (
    <div
      onClick={() => setShowFilter(true)}
      className={`lg:hidden bg-[#ECEEEF] text-black flex justify-center items-center gap-3 w-[109px] h-[32px] rounded-xl cursor-pointer mb-10 ${
        darkMode && "bg-transparent border border-[#ECEEEF] text-[#ECEEEF] "
      }`}
    >
      {darkMode ? (
        <LuFilter />
      ) : (
        <img src="images/filterIcon.svg" alt="filter" />
      )}
      <span>{t("winePage.filter")}</span>
    </div>
  );
}
