import { useState } from "react";
import { Link } from "react-router-dom";

function Product({ darkMode, wine, language }) {
  const { name, image, brand, price, id } = wine;

  const [isFavorited, setIsFavorited] = useState(false);

  // Update state when item is favorited/unfavorited
  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="relative flex flex-col justify-center mt-10">
      <div className="relative flex justify-center items-center flex-col border border-[#613994] min-w-[315px] p-5 rounded-md gap-2">
        {/* Heart Icon Button */}
        <div></div>
        <button
          onClick={handleFavorite}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            darkMode ? "" : "bg-[#D9D9D9]"
          } w-[40px] h-[40px]`}
        >
          <img
            src={"/images/wineheart.png"}
            alt={name.en}
            className={`${
              isFavorited ? "text-red-500" : "text-gray-300"
            } text-xl`}
          />
        </button>

        {/* Product card */}
        <Link to={`/wines/${id}`}>
          <img
            src={image}
            alt=""
            className="w-[160px] h-[235.38px] cursor-pointer"
          />
        </Link>
        <p
          className={`text-[14px] font-[700] leading-[17.36px] ${
            darkMode ? "text-[#FFFFFF]" : "text-[#613994]"
          }`}
        >
          {language === "ge" ? name.ge : name.en}
        </p>
        <p className="text-[14px] font-[400] leading-[17.36px]">
          {language === "ge" ? brand.ge : brand.en}
        </p>
        <p className="text-[15px] font-[700] leading-[18.6px]">$ {price}</p>

        <div className="w-[270px] h-[68px] flex justify-center items-center gap-4">
          <img src={image} alt={name.en} className="w-[40.37px] h-[51.36px]" />
          <img src={image} alt={name.en} className="w-[40.37px] h-[51.36px]" />
          <img src={image} alt={name.en} className="w-[40.37px] h-[51.36px]" />
          <img src={image} alt={name.en} className="w-[40.37px] h-[51.36px]" />
          <div className="flex justify-center items-center rounded-full h-[44px] w-[45px] border border-[#C8C5C5]">
            <img
              src={"/images/rightarrow.png"}
              alt=""
              className="w-[24px] h-[23px]"
            />
          </div>
        </div>
      </div>

      {/* Quantity/Add to cart  */}

      <div className="flex items-center justify-center flex-row gap-2 mt-5">
        <button
          className={`border w-[62px] h-[64px] border-[#613994] ${
            darkMode ? "text-black" : "text-[#613994]"
          }`}
        >
          1
        </button>
        <button
          className={`border w-[197px] h-[64px] border-[#613994] ${
            darkMode ? "text-white" : "text-[#613994]"
          }`}
        >
          {language === "ge" ? "კალათაში დამატება" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
