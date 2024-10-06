import { useTranslation } from "react-i18next";
import OneCocktailIngredient from "./OneCocktailIngredient";
import heart from "/images/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { addToCart } from "../../../features/cartSlice";

function CocktailsIngredients({ cocktail }) {
  const { t, i18n } = useTranslation();
  const darkMode = useSelector(getMode);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(cocktail));
  };

  return (
    <div
      className={`bg-[#fff]/30 ${
        darkMode ? "bg-gray-900" : ""
      } px-[20px] lg:px-[60px] w-[300px] lg:w-[500px] py-[30px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] rounded-md`}
    >
      <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-y-[30px] lg:gap-y-[60px] gap-x-[50px] rounded-[15px]">
        {cocktail?.ingredients[i18n.language]?.map((item, index) => (
          <OneCocktailIngredient key={index} item={item} />
        ))}
      </div>
      <div className="mt-[80px] flex flex-col gap-[10px] md:gap-[20px]">
        <button className="w-full h-[28px] lg:h-[49px] bg-[#613994] rounded-[50px] flex items-center justify-center">
          <img
            src={heart}
            alt="heart"
            className="w-[20px] h-[19px] lg:w-[24px] lg:h-[23px]"
          />
        </button>
        <button
          className="w-full h-[28px] lg:h-[49px] bg-[#613994] rounded-[50px] flex items-center justify-center text-[12px] lg:text-[16px] text-color-primary"
          onClick={handleAddToCart}
        >
          {t("cocktails.cocktailDetails.cart")}
        </button>
      </div>
    </div>
  );
}

export default CocktailsIngredients;
