import React from "react";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

export default function WineFilter() {
  const mode = useSelector(getMode);
  const { t, i18n } = useTranslation();

  return (
    <form action="" className="mt-4 md:mt-0 md:relative">
      <label
        htmlFor="filter"
        className={`md:text-lg ${
          mode
            ? "text-wineNavbarColor-textDark"
            : "text-wineNavbarColor-textGray"
        }`}
      >
        {t("winePage.filter")}
      </label>
      <select
        name="filter"
        id="filter"
        className={`text-sm md:text-lg outline-none bg-transparent  rounded md:p-1 ml-1 md:ml-4 md:w-[140px] cursor-pointer ${
          mode
            ? "text-wineNavbarColor-textDark border border-black"
            : "text-wineNavbarColor-textGray border border-wineNavbarColor-textGray bg-color-primary"
        }`}
      >
        <option value="price">{t("winePage.options.price")}</option>
      </select>
    </form>
  );
}
