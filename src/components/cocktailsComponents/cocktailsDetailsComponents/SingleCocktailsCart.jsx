import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { useTranslation } from "react-i18next";
import useAddToWishList from "../../../hooks/useAddToWishList";

function SingleCocktailsCart({ item }) {
  const darkMode = useSelector(getMode);
  const { mutate: addToCart } = useAddToCart();
  const { mutate: addToWishList } = useAddToWishList();
  const { i18n } = useTranslation();

  const handleAddToCart = () => {
    addToCart({
      productId: item._id,
      title:
        i18n.language === "ge"
          ? item.titleTranslations.ge
          : item.titleTranslations.en,
      image: item.url,
      price: item.price,
      unit: 1,
      productType: "wine",
    });
  };

  const handleAddToWishList = () => {
    addToWishList({
      productId: item._id,
      title:
        i18n.language === "ge"
          ? item.titleTranslations.ge
          : item.titleTranslations.en,
      image: item.url,
      price: item.price,
      productType: "cocktail",
    });
  };

  return (
    <div className="mt-[39px] max-w-[360px] md:max-w-none md:w-[300px] lg:w-[400px] h-[262px]  rounded-[10px] border border-[#D6D8DB] p-[32px] mx-auto">
      <h2
        className={`text-[32px] ${
          darkMode ? "text-[#fff]" : "text-[#0E0F12]"
        }  font-bold pb-[14px] border-b-[1px] border-b-[#E3E4E7]`}
      >
        GEL{item.price}
      </h2>

      <div className="mt-[24px] flex flex-col gap-[12px]">
        <button
          className="w-full h-[48px] rounded-[8px] bg-[#613994] text-color-primary"
          onClick={handleAddToCart}
        >
          ყიდვა
        </button>
        <button
          className={`w-full h-[48px] rounded-[8px] flex items-center justify-center gap-[10px] border ${
            darkMode
              ? "text-[#fff] border-[#fff]"
              : "border-[#613994] text-[#613994]"
          } `}
          onClick={handleAddToWishList}
        >
          <FaShoppingCart /> კალათაში დამატება
        </button>
      </div>
    </div>
  );
}

export default SingleCocktailsCart;
