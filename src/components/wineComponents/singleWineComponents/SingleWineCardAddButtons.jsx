import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import { CiHeart } from "react-icons/ci";
import { useAddToCart } from "../../../hooks/useAddToCart";
import useAddToWishList from "../../../hooks/useAddToWishList";
import CartQuantity from "./CartQuantity";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  counterCartPlus,
  insertToWishList,
  removeFromWishList,
} from "../../../features/countSlice";

function SingleWineCardAddButtons({ wine }) {
  const { t, i18n } = useTranslation();
  const darkMode = useSelector(getMode);

  const { mutate: addToCart } = useAddToCart();
  const { mutate: addToWishList } = useAddToWishList();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const wishListArr = useSelector((state) => state.count.wishList);

  const handleCountPlus = (unit) => {
    dispatch(counterCartPlus(unit));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      productId: wine._id,
      title:
        i18n.language === "ge"
          ? wine.titleTranslations.ge
          : wine.titleTranslations.en,
      image: wine.url,
      price: wine.price,
      unit: quantity,
      productType: "wine",
    });
    handleCountPlus(quantity);
    toast.success(t("toast.productAdd"));
  };

  const handleAddToWishList = (e) => {
    e.stopPropagation();
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

  return (
    <div className="tiny:max-w-[200px] smaller:max-w-[240px] flex flex-col tiny:gap-2 gap-4 mt-6">
      <CartQuantity count={quantity} setCount={setQuantity} />
      <div className="flex gap-4 items-center">
        <button
          onClick={handleAddToCart}
          className={`text-white tiny:text-sm tiny:pl-0 tiny:pr-0 tiny:max-w-[200px] smaller:pl-0 smaller:pr-0 smaller:w-[240px] rounded-lg p-2 pl-20 pr-20 ${
            i18n.language === "ge"
              ? "pl-10 pr-10 small:px-1 smallExtra:px-5 md:!px-10 md:!w-auto"
              : "tiny:!px-8"
          } lg:w-96 ${darkMode ? "bg-[#58387F]" : "bg-[#1E122E]"}`}
        >
          {t("winePage.singleWine.cart")}
        </button>
        <button
          onClick={handleAddToWishList}
          className={`tiny:border border-2 rounded-full lg:rounded-xl p-2 ${
            darkMode ? "border-white text-white" : "border-black text-black"
          }`}
        >
          <CiHeart className="w-6 h-6 tiny:w-4 tiny:h-4" />
        </button>
      </div>
    </div>
  );
}

export default SingleWineCardAddButtons;
