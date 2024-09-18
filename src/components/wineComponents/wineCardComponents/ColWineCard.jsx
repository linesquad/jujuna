import { Link } from "react-router-dom";
import { useWineCard } from "../../../hooks/useWineCard";
import { CiShoppingCart } from "react-icons/ci";
import i18n from "../../../i18n";
import { useState } from "react";

const ColWineCard = ({ wine }) => {
  const [count, setCount] = useState(1);
  const {
    darkMode,
    handleClick,
    handleAddToCart,
    wineNotAvailable,
    handleAddToWishList,
  } = useWineCard(wine, count);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  if (wineNotAvailable) {
    return null;
  }

  return (
    <div className="flex   justify-between  w-full py-6 px-7 border-y-[0.5px] border-[rgba(62, 62, 62, 0.70)] ">
      {/* Marcxena */}
      <div className="flex width-[80%]">
        <div className="flex gap-3 items-center">
          <button
            onClick={handleAddToWishList}
            className={`border rounded-full bg-[#EDECEC] p-3 w-10 h-10 flex items-center justify-center `}
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99961 15.4683L8.29214 14.829C6.76894 13.4377 5.50894 12.2468 4.51215 11.2562C3.51597 10.265 2.72948 9.39076 2.15268 8.63352C1.57588 7.87627 1.17268 7.19183 0.943079 6.58018C0.713479 5.96854 0.59899 5.35223 0.599612 4.73125C0.599612 3.54405 1.00281 2.54725 1.80921 1.74085C2.61561 0.93445 3.61241 0.53125 4.79961 0.53125C5.62094 0.53125 6.39095 0.74125 7.10961 1.16125C7.82828 1.58125 8.45828 2.19227 8.99961 2.99432C9.54095 2.19227 10.1709 1.58125 10.8896 1.16125C11.6083 0.74125 12.3783 0.53125 13.1996 0.53125C14.3868 0.53125 15.3836 0.93445 16.19 1.74085C16.9964 2.54725 17.3996 3.54405 17.3996 4.73125C17.3996 5.35098 17.2851 5.96698 17.0561 6.57925C16.8265 7.19276 16.4233 7.87783 15.8465 8.63445C15.2697 9.39107 14.4861 10.265 13.4955 11.2562C12.5049 12.2468 11.2418 13.4377 9.70614 14.829L8.99961 15.4683ZM8.99961 14.2046C10.4929 12.8544 11.7218 11.6983 12.6863 10.7363C13.6507 9.77436 14.4129 8.93903 14.9729 8.23032C15.5329 7.52161 15.9218 6.89472 16.1396 6.34965C16.3574 5.80334 16.4663 5.26387 16.4663 4.73125C16.4663 3.79792 16.1552 3.02014 15.5329 2.39792C14.9107 1.77569 14.1329 1.46458 13.1996 1.46458C12.4567 1.46458 11.771 1.67676 11.1425 2.10112C10.5141 2.52547 9.95223 3.16418 9.45694 4.01725H8.54415C8.03579 3.15236 7.4705 2.51054 6.84828 2.09178C6.22606 1.67365 5.54348 1.46458 4.80055 1.46458C3.87966 1.46458 3.10499 1.77569 2.47655 2.39792C1.8481 3.02014 1.53357 3.79792 1.53295 4.73125C1.53295 5.26387 1.64183 5.80334 1.85961 6.34965C2.07739 6.89596 2.46628 7.52285 3.02628 8.23032C3.58628 8.93778 4.3485 9.77001 5.31295 10.727C6.27739 11.684 7.50628 12.8432 8.99961 14.2046Z"
                fill={darkMode ? "black" : "#724AA4"}
              />
            </svg>
          </button>
          <button
            onClick={handleAddToCart}
            className={`rounded-full bg-[#EDECEC] p-3 w-10 h-10 flex items-center justify-center   ${
              darkMode ? "bg-[#58387F]" : "bg-[#EDECEC] text-white"
            }`}
          >
            <CiShoppingCart color="black" size="26px" />
          </button>
        </div>

        <div className="flex">
          <Link
            to={`/wines/${wine._id}`}
            onClick={handleClick}
            className="flex gap-5 "
          >
            <img
              src={wine.url}
              alt="wine-bottle"
              className="w-[100px] h-auto  rounded-md"
            />
            <div className="mt-5">
              <div className="flex flex-col justify-between">
                <p className="lg:text-lg sm:text-sm  font-semibold">
                  {i18n.language === "ge"
                    ? wine.titleTranslations.ge
                    : wine.titleTranslations.en}
                </p>
                <span className="text-[#008E28] mb-3 ml-1">გაყიდვაშია</span>
                <p className="text-sm text-gray-600">
                  {i18n.language === "ge" ? wine.brand?.ge : wine.brand?.en}
                </p>
                <p className="text-sm text-gray-500 mt-1 flex gap-3">
                  ⭐ 4.8 <span>+500 view</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Marjvena */}
      <div className="flex items-center gap-16 w-[30%] justify-start">
        <div
          className={`flex gap-[14px] justify-center ${
            darkMode ? "bg-[#5D5D5D]" : "bg-[#EDECEC]"
          } rounded-[39px] py-[6px] px-[9.5px]`}
        >
          <button
            onClick={decrement}
            className="w-8 h-8 bg-white rounded-full text-black px-4 py-2 text-center flex justify-center items-center"
          >
            -
          </button>

          <div className="text-xl font-semibold">{count}</div>

          <button
            onClick={increment}
            className="w-8 h-8 bg-white rounded-full text-black px-4 py-2 text-center flex justify-center items-center"
          >
            +
          </button>
        </div>
        <p
          className={`${
            darkMode ? "#fff" : "text-black"
          } text-[28px] font-semibold`}
        >
          ${parseFloat(wine.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ColWineCard;
