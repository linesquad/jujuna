import { useTranslation } from "react-i18next";
import rightArrow from "/images/rightArrow.svg";

function CocktailsDetailsHeader({ item }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-[12px] text-[#999797] flex items-center gap-[9px] pt-[26px] pl-[10px]">
      <p>{t("cocktails.cocktailDetailsHeader.homePage")}</p>
      <img src={rightArrow} alt="right-arrow" />
      <p>{t("cocktails.cocktailDetailsHeader.cocktails")}</p>
      <img src={rightArrow} alt="right-arrow" />
      <p>{i18n.language === "ge" ? item?.name.ge : item?.name.en}</p>
    </div>
  );
}

export default CocktailsDetailsHeader;
