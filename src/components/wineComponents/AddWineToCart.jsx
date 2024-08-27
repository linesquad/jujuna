import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import { addToCart } from "../../features/cartSlice";

export default function AddWineToCart({ wine }) {
  const mode = useSelector(getMode);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(wine));
  };

  return (
    <div className="flex absolute left-12 xl:left-16 -bottom-20 gap-10">
      <div
        className={`text-black text-xl w-[64px] h-[62px] flex justify-center items-center ${
          mode
            ? "bg-backgroundColor-purpleMid"
            : "bg-wineCardColor-light shadow-[rgba(0,0,15,0.3)_8px_8px_16px_0px] lg:shadow-none xl:bg-transparent border-2 border-wineCardColor-dark"
        }`}
      >
        1
      </div>
      <div
        className={`p-2 text-lg flex justify-center items-center w-[160px] cursor-pointer ${
          mode
            ? "bg-backgroundColor-purpleMid text-wineNavbarColor-light"
            : "bg-wineCardColor-light text-wineNavbarColor-dark shadow-[rgba(0,0,15,0.3)_8px_8px_16px_0px] lg:shadow-none xl:bg-transparent border-2 border-wineCardColor-dark"
        }`}
        onClick={handleAddToCart}
      >
        {t("winePage.cart")}
      </div>
    </div>
  );
}
