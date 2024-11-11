import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import { useAddToCart } from "./useAddToCart";
import useAddToWishList from "./useAddToWishList";
import { toast } from "react-toastify";
import {
  counterCartPlus,
  insertToWishList,
  removeFromWishList,
} from "../features/countSlice";

export function useWineCard(wine, count) {
  const { i18n, t } = useTranslation();
  const darkMode = useSelector(getMode);
  const { mutate: addToCart } = useAddToCart();
  const { mutate: addToWishList } = useAddToWishList();
  const dispatch = useDispatch();
  const wishListArr = useSelector((state) => state.count.wishList);

  if (!wine) {
    return { wineNotAvailable: true };
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleCountPlus = () => {
    dispatch(counterCartPlus(count));
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
    handleCountPlus();
    toast.success(t("toast.productAdd"));
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

    const itemExists = wishListArr.some((wishItem) => wishItem.id === wine._id);

    if (itemExists) {
      dispatch(removeFromWishList(wine._id));
      toast.info(t("toast.productRemovedWishList"));
    } else {
      dispatch(insertToWishList(wine._id));
      toast.success(t("toast.productAddWishList"));
    }
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
