import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import { addToCart } from "../../features/cartSlice";
import { useState } from "react";
import { useAddToCart } from "../../hooks/useAddToCart";
import useAddToWishList from "../../hooks/useAddToWishList";

function CocktailCard({ item }) {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { url: image, titleTranslations, price, _id } = item;
  const darkMode = useSelector(getMode);
  const { i18n } = useTranslation();

  const { mutate: addToCart } = useAddToCart();
  const { mutate: addToWishList } = useAddToWishList();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      productId: item._id,
      title:
        i18n.language === "ge"
          ? item.titleTranslations.ge
          : item.titleTranslations.en,
      image: item.url,
      price: item.price,
      unit: 1,
      productType: "cocktail",
    });
  };

  const handleAddToWishList = (e) => {
    e.stopPropagation();
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
    <div>
      <div
        className={`max-w-[210px] md:max-w-none md:w-[210px] xl:w-[230px] border-[1px]  h-[280px]  cursor-pointer ${
          showCart ? " border-purple-600" : "border-transparent"
        }  rounded-[15px] py-[10px] px-[40px] xl:px-[50px] relative`}
        onClick={() => navigate(`/cocktails/${_id}`)}
        onMouseEnter={() => setShowCart(true)}
        onMouseLeave={() => setShowCart(false)}
      >
        <img
          src={image}
          alt="cocktail"
          className="w-full h-[180px] object-cover rounded-md"
        />
        <div
          className={`text-center ${
            darkMode ? "text-color-primary" : "text-color-black"
          } flex flex-col mt-[5px]`}
        >
          <p>
            {i18n.language === "ge"
              ? titleTranslations.ge.split(" ")[0] + " ..."
              : titleTranslations.en}
          </p>
          <p>{price} gel</p>
        </div>
        {showCart && (
          <div className="flex flex-col gap-[10px] absolute top-2 right-2">
            <div
              className="p-1 rounded-md border-[1px] border-purple-600"
              onClick={handleAddToCart}
            >
              <FaShoppingCart
                size={18}
                color="#9333ea"
                onClick={console.log("nugo")}
              />
            </div>
            <div
              className="p-1 rounded-md border-[1px] border-purple-600"
              onClick={handleAddToWishList}
            >
              <FaHeart size={18} color="#9333ea" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CocktailCard;
