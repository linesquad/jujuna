import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { LuFilter } from "react-icons/lu";
import { getMode } from "../../features/darkModeSlice";

export default function MobileWineFilter({ setShowFilter }) {
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();

  return (
    <div
      onClick={() => setShowFilter(true)}
      className={`lg:hidden flex justify-center items-center gap-3 w-[109px] h-[32px] rounded-xl cursor-pointer mb-10 ${
        darkMode
          ? "bg-transparent border border-[#ECEEEF] text-[#ECEEEF]"
          : "bg-[#ECEEEF] text-black"
      }`}
    >
      <LuFilter />

      <span>{t("winePage.filter")}</span>
    </div>
  );
}
