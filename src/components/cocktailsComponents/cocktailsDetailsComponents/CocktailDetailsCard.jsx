import heart from "/images/heart.svg";
import cart from "/images/cart.svg";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

function CocktailDetailsCard({ item }) {
  const darkMode = useSelector(getMode);
  const { i18n } = useTranslation();

  return (
    <div
      className={`w-full max-w-[300px] m-auto  flex flex-col pt-[10px] pr-[12px] pb-[50px] pl-[9px] rounded-[11px] cursor-pointer mt-[30px] ${
        darkMode ? "bg-gray-900" : "bg-[#eaeaea]"
      }`}
    >
      <div className="w-[30px] h-[30px] rounded-[50%] bg-[#613994] flex justify-center items-center self-end ">
        <img src={heart} alt="heart" className="w-[14px] h-[14px]" />
      </div>
      <div className="py-[9px] px-[4px] flex gap-[22px] border-b-[1px] border-[#d9d9d9]">
        <img
          src={item?.image}
          alt="cocktail"
          className="w-[99px] h-[190px]  object-cover rounded-md"
        />
        <div className="flex flex-col justify-between">
          <p
            className={` ${
              darkMode ? "text-color-primary" : "text-color-black"
            } text-[16px]`}
          >
            {i18n.language === "ge" ? item?.name.ge : item?.name.en}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-[10px] md:mt-[18px]">
        <p
          className={`${
            darkMode ? "text-color-primary" : "text-color-black"
          } text-[16px]`}
        >
          {i18n.language === "ge" ? `${item?.price} ₾` : `GEL ${item?.price}`}
        </p>
        <div className="w-[50px] h-[24px] rounded-[33px] bg-[#613994] flex justify-center items-center">
          <img src={cart} alt="cart" className="w-[18px] h-[18px]" />
        </div>
      </div>
    </div>
  );
}

export default CocktailDetailsCard;
