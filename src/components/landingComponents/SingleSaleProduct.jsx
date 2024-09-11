import { FaStar } from "react-icons/fa";
import cocktail from "/images/cocktail1.png";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function SingleSaleProduct() {
  return (
    <div className="xl:w-[280px] lg:w-[240px] md:w-[200px]  pt-[4px] pb-[15px] px-[12px] relative">
      <div className="xl:w-[120px] lg:w-[100px] xl:h-[175px] lg:h-[150px] mx-auto">
        <img
          src={cocktail}
          alt="product"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <p className="text-[12px] md:text-[20px] text-center mt-[20px]">
        ტვიში - თეთრი მშრალი
      </p>

      <div className="mt-[13px] flex items-center gap-[22px]">
        <div className="flex items-center gap-[5px]">
          <FaStar color="#FFA800" />
          <p className="text-[14px]">4.8</p>
        </div>
        <p className="text-[14px]">+500 view</p>
      </div>

      <div className="mt-[16px] flex items-center justify-between ">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[#008E28] text-[12px] md:text-[16px] ">
            გაყიდვაშია
          </p>
          <p className="text-[12px] md:text-[22px]">45.00 ₾</p>
        </div>

        <div className="flex items-center gap-[6px] border-[1px] border-[#eaeaea] rounded-[20px] p-[2px]">
          <div className="hidden xl:flex items-center gap-[6px]">
            <span className="w-[20px] h-[20px] flex justify-center items-center bg-[#eaeaea] rounded-[50%] pb-[3px] cursor-pointer">
              +
            </span>
            <p>1</p>
            <span className="w-[20px] h-[20px] flex justify-center items-center bg-[#eaeaea] rounded-[50%] pb-[3px] cursor-pointer">
              -
            </span>
          </div>
          <div className="w-[36px] h-[36px] bg-[#BB8DF580] rounded-[50%] flex items-center justify-center">
            <FaShoppingCart color="#FFFFFF" />
          </div>
        </div>
      </div>

      <div className="absolute top-0">
        <div className="relative">
          <FaStar
            className="lg:text-[50px] xl:text-[70px] text-[50px]"
            color="#FC0909"
          />
          <p className="absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] text-[#fff] lg:text-[16px] xl:text-[20px]">
            50%
          </p>
        </div>
      </div>

      <div className="absolute top-[5px] right-[24px] cursor-pointer">
        <div className="w-[36px] h-[36px] rounded-[50%] bg-[#D9D9D9] flex justify-center items-center">
          <FaHeart color="#FFFFFF" size={25} />
        </div>
      </div>
    </div>
  );
}

export default SingleSaleProduct;
