import downArrow from "/images/downArrow.svg";

function CocktailsSidebar() {
  return (
    <div className="w-[305px] h-[764px] bg-[#fff]/30 rounded-[15px] hidden md:block pt-[50px] pr-[25px] pl-[19px]">
      <div className="flex flex-col gap-[35px]">
        <div className="flex justify-between items-center">
          <p className="text-[14px]">ალკოჰოლური</p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#D9D9D9]"></div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[14px]">ქვეყანა</p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#fff] flex justify-center items-center">
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[14px]">გამოშვების წელი</p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#fff] flex justify-center items-center">
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[14px]">ზომა/მოცულობა (მლ)</p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#fff] flex justify-center items-center">
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailsSidebar;
