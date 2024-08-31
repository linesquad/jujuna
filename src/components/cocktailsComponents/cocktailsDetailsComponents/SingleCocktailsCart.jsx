import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function SingleCocktailsCart({ item }) {
  const [itemQuantity, setItemQuantity] = useState(1);
  return (
    <div className="mt-[39px] max-w-[360px] h-[330px] rounded-[10px] border border-[#D6D8DB] p-[32px] mx-auto">
      <h2 className="text-[32px] text-[#0E0F12] font-bold pb-[14px] border-b-[1px] border-b-[#E3E4E7]">
        GEL{item.price}
      </h2>
      <div className="mt-[32px] flex justify-between items-center">
        <p className="text-[12px] text-[#60636D]">რაოდენობა</p>
        <div className="max-w-[148px] h-[44px] justify-center items-center flex px-[13px] gap-[23px] border border-[#DADCE1] rounded-[10px]">
          <span
            className="mt-[-1px]"
            onClick={() => setItemQuantity((item) => (item += 1))}
          >
            +
          </span>
          <p>{itemQuantity}</p>
          <span
            className="mt-[-1px]"
            onClick={() =>
              itemQuantity > 1 && setItemQuantity((item) => (item -= 1))
            }
          >
            -
          </span>
        </div>
      </div>

      <div className="mt-[24px] flex flex-col gap-[12px]">
        <button className="w-full h-[48px] rounded-[8px] bg-[#613994] text-color-primary">
          ყიდვა
        </button>
        <button className="w-full h-[48px] rounded-[8px] flex items-center justify-center gap-[10px] border border-[#613994] text-[#613994]">
          <FaShoppingCart /> კალათაში დამატება
        </button>
      </div>
    </div>
  );
}

export default SingleCocktailsCart;
