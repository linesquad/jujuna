import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import { addToCart } from "../../../features/cartSlice";

function SingleWineCardAddButtons({ wine }) {
  const { t, i18n } = useTranslation();
  const mode = useSelector(getMode);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(wine));
  };

  return (
    <div
      className={`tiny:max-w-[200px] smaller:max-w-[240px] flex flex-col gap-4 mt-6 font-semibold ${
        mode ? "text-wineNavbarColor-textPurple" : "text-buttonColor-primary"
      }`}
    >
      <button
        className={`tiny:pl-0 tiny:pr-0 tiny:max-w-[200px] smaller:pl-0 smaller:pr-0 smaller:w-[240px] border-2 rounded-lg p-2 pl-20 pr-20 ${
          i18n.language === "ge" && "pl-10 pr-10"
        } shadow-[rgba(0,0,0,0.25)_5px_8px_10px_0px] lg:w-96 ${
          mode
            ? "bg-wineCardColor-addBtn border-wineNavbarColor-textPurple"
            : "bg-transparent border-buttonColor-primary"
        }`}
        onClick={handleAddToCart}
      >
        {t("winePage.singleWine.cart")}
      </button>
      <button
        className={`tiny:pl-0 tiny:pr-0 tiny:w-[200px] smaller:pl-0 smaller:pr-0 smaller:w-[240px] border-2 rounded-lg p-2 pl-20 pr-20 ${
          i18n.language === "ge" && "pl-10 pr-10"
        } shadow-[rgba(0,0,0,0.25)_5px_8px_10px_0px] lg:w-96 ${
          mode
            ? "bg-wineCardColor-addBtn border-wineNavbarColor-textPurple"
            : "bg-transparent border-buttonColor-primary"
        }`}
      >
        {t("winePage.singleWine.favorites")}
      </button>
    </div>
  );
}

export default SingleWineCardAddButtons;
