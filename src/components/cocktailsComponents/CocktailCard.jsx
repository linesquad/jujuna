import heart from "/images/heart.svg";
import cart from "/images/cart.svg";

function CocktailCard({ item }) {
  const { image, name, price } = item;
  return (
    <div className="w-full max-w-[180px] md:w-[200px] md:max-w-[200px] lg:max-w-[220px] lg:w-[220px] xl:max-w-[260px] xl:w-[260px] m-auto bg-[#fff]/30 flex flex-col pt-[6px] pr-[12px] pb-[33px] pl-[3px] md:pb-[50px] md:px-[10px] lg:pb-[70px] rounded-[11px]">
      <div className="w-[18px] h-[18px] md:w-[30px] md:h-[30px] rounded-[50%] bg-[#613994] flex justify-center items-center self-end ">
        <img src={heart} alt="heart" className="md:w-[14px] md:h-[14px]" />
      </div>
      <div className="py-[9px] px-[4px] flex gap-[10px] border-b-[1px] border-[#d9d9d9]">
        <img
          src={image}
          alt="cocktail"
          className="w-[60px] h-[120px] md:w-[80px] object-cover rounded-md"
        />
        <p className="text-color-black text-[12px] md:text-[14px]">{name}</p>
      </div>
      <div className="flex justify-between mt-[10px] md:mt-[18px]">
        <p className="text-color-black text-[12px] md:text-[14px]">{price} ₾</p>
        <div className="w-[31px] h-[14px] md:w-[50px] md:h-[24px] rounded-[33px] bg-[#613994] flex justify-center items-center">
          <img src={cart} alt="cart" className="md:w-[18px] md:h-[18px]" />
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;
