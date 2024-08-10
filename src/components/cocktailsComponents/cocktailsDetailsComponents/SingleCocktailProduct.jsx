import { useTranslation } from "react-i18next";
import Wrapper from "../../Wrapper";
import CocktailsIngredients from "./CocktailsIngredients";
import SideCocktails from "./SideCocktails";

function SingleCocktailProduct({ cocktail }) {
  const { i18n } = useTranslation();
  const name = i18n.language === "ge" ? cocktail.name.ge : cocktail.name.en;

  return (
    <div className="bg-[#eaeaea]">
      <Wrapper>
        <div>
          <h2 className="pt-[61px] text-[40px] font-tommaso">{name}</h2>
          <div className="pt-[120px] flex items-start justify-between gap-[90px] lg:gap-[90px] xl:gap-[120px]">
            <SideCocktails cocktail={cocktail} />
            <div>
              <img
                src={cocktail?.image}
                alt="cocktail"
                className="w-[300px] h-[420px] lg:w-[380px] lg:h-[495px] rounded-md object-cover"
              />
            </div>
            <CocktailsIngredients cocktail={cocktail} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default SingleCocktailProduct;
