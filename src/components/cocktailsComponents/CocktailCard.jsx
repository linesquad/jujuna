import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";
import { useState } from "react";

function CocktailCard({ item }) {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { image, name, price, id } = item;
  const darkMode = useSelector(getMode);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(item));
  };

  return (
    <div>
      <div
        className={`max-w-[210px] md:max-w-none md:w-[210px] xl:w-[230px] border-[1px] border-transparent h-[280px]  cursor-pointer ${
          showCart ? " border-purple-600" : ""
        }  rounded-[15px] py-[10px] px-[40px] xl:px-[50px] relative`}
        onClick={() => navigate(`/cocktails/${id}`)}
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
          <p>{i18n.language === "ge" ? name.ge : name.en}</p>
          <p>{price} gel</p>
        </div>
        {showCart && (
          <div className="flex flex-col gap-[10px] absolute top-2 right-2">
            <div
              className="p-1 rounded-md border-[1px] border-purple-600"
              onClick={handleAddToCart}
            >
              <FaShoppingCart size={18} color="#9333ea" />
            </div>
            <div className="p-1 rounded-md border-[1px] border-purple-600">
              <FaHeart size={18} color="#9333ea" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CocktailCard;
