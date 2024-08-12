import useCocktails from "../../../hooks/useCocktails";
import CocktailCard from "../CocktailCard";
import Wrapper from "../../Wrapper";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import SameProducts from "../../SameProducts";

function SameCocktails() {
  const { data: cocktails } = useCocktails();
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);

  return (
    <Wrapper>
      <div>
        <h2
          className={`text-[22px] pl-[19px] pt-[40px] ${
            darkMode ? "text-color-primary" : "text-color-black"
          }`}
        >
          {t("cocktails.cocktailDetails.similarProducts")}
        </h2>
        <div className="pt-[43px]">
          <SameProducts products={cocktails} CardComponent={CocktailCard} />
        </div>
      </div>
    </Wrapper>
  );
}

export default SameCocktails;
