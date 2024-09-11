import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import { addToCart } from "../../../features/cartSlice";
import { CiHeart } from "react-icons/ci";

function SingleWineCardAddButtons({ wine }) {
  const { t, i18n } = useTranslation();
  const darkMode = useSelector(getMode);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(wine));
  };

  return (
    <div className="tiny:max-w-[200px] smaller:max-w-[240px] flex tiny:gap-2 gap-4 mt-6">
      <button
        className={`text-white tiny:text-sm tiny:pl-0 tiny:pr-0 tiny:max-w-[200px] smaller:pl-0 smaller:pr-0 smaller:w-[240px] rounded-lg p-2 pl-20 pr-20 ${
          i18n.language === "ge"
            ? "pl-10 pr-10 small:px-1 smallExtra:px-5 md:!px-10 md:!w-auto"
            : "tiny:!px-8"
        } lg:w-96 ${darkMode ? "bg-[#58387F]" : "bg-[#1E122E]"}`}
        onClick={handleAddToCart}
      >
        {t("winePage.singleWine.cart")}
      </button>
      <button
        className={`tiny:border border-2 rounded-full lg:rounded-xl p-2 ${
          darkMode ? "border-white text-white" : "border-black text-black"
        }`}
      >
        <CiHeart className="w-6 h-6 tiny:w-4 tiny:h-4" />
      </button>
    </div>
  );
}

export default SingleWineCardAddButtons;
