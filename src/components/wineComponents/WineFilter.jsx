import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

export default function WineFilter({ onSortChange }) {
  const mode = useSelector(getMode);
  const { t } = useTranslation();

  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

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
        onChange={handleSortChange}
      >
        {/* <option value="price">{t("winePage.options.price")}</option> */}
        <option value="" className="text-[16px]">
          select
        </option>
        <option value="priceLowToHigh" className="text-[16px]">
          Price: low to high
        </option>
        <option value="priceHighToLow" className="text-[16px]">
          Price: high to low
        </option>
        <option value="alcLowToHigh" className="text-[16px]">
          Alc: low to high
        </option>
        <option value="alcHighToLow" className="text-[16px]">
          Alc: high to low
        </option>
      </select>
    </form>
  );
}
