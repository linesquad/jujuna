import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useEffect, useState } from "react";
import { useAddToCart } from "../../hooks/useAddToCart";
import useAddToWishList from "../../hooks/useAddToWishList";
import { Link } from "react-router-dom";

function SingleProduct({ item,pId, pType }) {
  const [count, setCount] = useState(1);
  const [cartHover, setCartHover] = useState(false);
  const darkMode = useSelector(getMode);
  const { i18n } = useTranslation();

  const { mutate: addToCart } = useAddToCart();
  const { mutate: addToWishList } = useAddToWishList();
  const handleAddToCart = () => {
    addToCart({
      productId: item._id,
      title:
        i18n.language === "ge"
          ? item.titleTranslations.ge
          : item.titleTranslations.en,
      image: item.url,
      price: item.price,
      unit: count,
      productType: "singleProduct",
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
      productType: "singleProduct",
    });
  };

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleCartMouseLeave = () => {
    setCartHover(false);
    setCount(1);
  };

  return (
    <div className="xl:w-[280px] lg:w-[240px] md:w-[200px] pt-[4px] pb-[15px] px-[12px] relative mx-auto">
      <div className="xl:w-[120px] lg:w-[100px] xl:h-[175px] lg:h-[150px] mx-auto">
        <Link to={`/${pType}/${pId}`}>
          <img
            src={item?.url}
            alt="product"
            className="w-full h-full object-cover rounded-md"
          />
        </Link>
      </div>
      <p
        className={`text-[12px] md:text-[20px] text-center mt-[20px] ${
          darkMode ? "text-[#fff]" : "text-[#000]"
        }`}
      >
        {i18n.language === "ge"
          ? item.titleTranslations.ge.slice(0, 15) + "..."
          : item.titleTranslations.en.slice(0, 15) + "..."}
      </p>

      <div className="mt-[13px] flex items-center gap-[22px]">
        <div className="flex items-center gap-[5px]">
          <FaStar color="#FFA800" />
          <p
            className={`text-[14px] ${
              darkMode ? "text-[#fff]" : "text-[#000]"
            }`}
          >
            4.8
          </p>
        </div>
        <p
          className={`text-[14px] ${darkMode ? "text-[#fff]" : "text-[#000]"}`}
        >
          +500 view
        </p>
      </div>

      <div className="mt-[16px] flex items-center justify-between">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#008E28] text-[12px] md:text-[16px]">
            გაყიდვაშია
          </p>
          <p
            className={`text-[12px] md:text-[22px] ${
              darkMode ? "text-[#fff]" : "text-[#000]"
            }`}
          >
            {item.price} ₾
          </p>
        </div>

        <div
          className="flex items-center gap-[6px] border-[1px] border-[#eaeaea] rounded-[20px] p-[2px]"
          onMouseLeave={handleCartMouseLeave}
        >
          {cartHover && (
            <div className="hidden xl:flex items-center gap-[6px]">
              <button
                className="w-[20px] h-[20px] flex justify-center items-center bg-[#eaeaea] rounded-[50%] pb-[3px] cursor-pointer"
                onClick={increment}
              >
                +
              </button>
              <p>{count}</p>
              <button
                className="w-[20px] h-[20px] flex justify-center items-center bg-[#eaeaea] rounded-[50%] pb-[3px] cursor-pointer"
                onClick={decrement}
              >
                -
              </button>
            </div>
          )}
          <div
            className="w-[36px] h-[36px] bg-[#BB8DF580] rounded-[50%] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setCartHover(true)}
          >
            <FaShoppingCart color="#FFFFFF" onClick={handleAddToCart} />
          </div>
        </div>
      </div>

      {item.discount > 0 && (
        <div className="absolute top-0">
          <div className="relative">
            <FaStar
              className="lg:text-[50px] xl:text-[70px] text-[50px]"
              color="#FC0909"
            />
            <p className="absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] text-[#fff] lg:text-[16px] xl:text-[20px]">
              {item.discount}%
            </p>
          </div>
        </div>
      )}

      <div
        className="absolute top-[5px] right-[24px] cursor-pointer"
        onClick={handleAddToWishList}
      >
        <div className="w-[36px] h-[36px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center">
          <FaHeart color="#FFFFFF" size={25} />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
