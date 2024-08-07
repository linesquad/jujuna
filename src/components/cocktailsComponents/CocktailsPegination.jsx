import leftVector from "/images/vectorLeft.svg";
import rightArrow from "/images/vectorRight.svg";

function CocktailsPegination() {
  return (
    <div className="flex gap-[10px] lg:gap-[30px] items-center justify-center mt-[30px]">
      <img src={leftVector} alt="left-vector" />
      <div className="flex items-center gap-[5px] lg:gap-[15px]">
        <div className="w-[40px] h-[40px] rounded-[15px] bg-[#d9d9d9] flex justify-center items-center">
          <p className="text-[16px] text-color-black font-bold">1</p>
        </div>

        <div className="w-[40px] h-[40px] rounded-[15px] bg-[#d9d9d9] flex justify-center items-center">
          <p className="text-[16px] text-color-black font-bold">2</p>
        </div>

        <div className="w-[40px] h-[40px] rounded-[15px] bg-[#d9d9d9] flex justify-center items-center">
          <p className="text-[16px] text-color-black font-bold">3</p>
        </div>

        <div className="w-[40px] h-[40px] rounded-[15px] bg-[#d9d9d9] flex justify-center items-center">
          <p className="text-[16px] text-color-black font-bold">4</p>
        </div>

        <div className="w-[40px] h-[40px] rounded-[15px] bg-[#d9d9d9] flex justify-center items-center">
          <p className="text-[16px] text-color-black font-bold">5</p>
        </div>
      </div>
      <img src={rightArrow} alt="right-arrow" />
    </div>
  );
}

export default CocktailsPegination;
