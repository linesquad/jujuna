import useCocktails from "../../../hooks/useCocktails";
import Wrapper from "../../Wrapper";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import SameProducts from "../../SameProducts";
import SingleSameProduct from "./SingleSameProduct";

function SameCocktails() {
  const { data: cocktails } = useCocktails();
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);

  return (
    <Wrapper>
      <div className="pb-[30px]">
        <h2 className={`text-[24px] text-center pl-[19px] pt-[40px]`}>
          {t("cocktails.cocktailDetails.similarProducts")}
        </h2>
        <div className="pt-[43px]">
          <SameProducts
            products={cocktails}
            CardComponent={SingleSameProduct}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default SameCocktails;
