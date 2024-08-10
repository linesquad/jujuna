import { useTranslation } from "react-i18next";
import OneCocktailIngredient from "./OneCocktailIngredient";
import heart from "/images/heart.svg";

function CocktailsIngredients({ cocktail }) {
  const { t, i18n } = useTranslation();

  console.log(cocktail);
  return (
    <div className="bg-[#fff]/30 px-[20px] lg:px-[60px] py-[30px] lg:py-[90px] min-h-[420px] rounded-md">
      <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-y-[30px] lg:gap-y-[60px] gap-x-[50px] rounded-[15px]">
        {cocktail?.ingredients[i18n.language]?.map((item, index) => (
          <OneCocktailIngredient key={index} item={item} />
        ))}
      </div>
      <div className="mt-[80px] flex flex-col gap-[10px]">
        <button className="w-full h-[28px] lg:h-[49px] bg-[#613994] rounded-[50px] flex items-center justify-center">
          <img
            src={heart}
            alt="heart"
            className="w-[20px] h-[19px] lg:w-[24px] lg:h-[23px]"
          />
        </button>
        <button className="w-full h-[28px] lg:h-[49px] bg-[#613994] rounded-[50px] flex items-center justify-center text-[12px] lg:text-[16px] text-color-primary">
          {t("cocktails.cocktailDetails.cart")}
        </button>
      </div>
    </div>
  );
}

export default CocktailsIngredients;
