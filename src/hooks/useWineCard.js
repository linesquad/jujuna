import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import { useAddToCart } from "./useAddToCart";
import useAddToWishList from "./useAddToWishList";

export function useWineCard(wine, count) {
  const { i18n, t } = useTranslation();
  const darkMode = useSelector(getMode);
  const { mutate: addToCart } = useAddToCart();
  const { mutate: addToWishList } = useAddToWishList();

  if (!wine) {
    return { wineNotAvailable: true };
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    addToCart({
      productId: wine._id,
      title:
        i18n.language === "ge"
          ? wine.titleTranslations.ge
          : wine.titleTranslations.en,
      image: wine.url,
      price: wine.price,
      unit: count,
      productType: "wine",
    });
  };

  const handleAddToWishList = (e) => {
    e.stopPropagation();
    e.preventDefault();

    addToWishList({
      productId: wine._id,
      title:
        i18n.language === "ge"
          ? wine.titleTranslations.ge
          : wine.titleTranslations.en,
      image: wine.url,
      price: wine.price,
      productType: "wine",
    });
  };

  return {
    darkMode,
    i18n,
    t,
    handleClick,
    handleAddToCart,
    handleAddToWishList,
  };
}
