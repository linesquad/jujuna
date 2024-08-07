import { useSelector } from "react-redux";
import downArrow from "/images/downArrow.svg";
import { getMode } from "../../features/darkModeSlice";

function CocktailsSidebar() {
  const darkMode = useSelector(getMode);
  return (
    <div
      className={`w-[305px] h-[764px] ${
        darkMode ? "bg-[#55426E]" : "bg-[#fff]/30"
      }  rounded-[15px] hidden md:block pt-[50px] pr-[25px] pl-[19px]`}
    >
      <div className="flex flex-col gap-[35px]">
        <div className="flex justify-between items-center">
          <p className={`text-[14px] ${darkMode ? "text-color-primary" : ""}`}>
            ალკოჰოლური
          </p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#D9D9D9]"></div>
        </div>

        <div className="flex justify-between items-center">
          <p className={`text-[14px] ${darkMode ? "text-color-primary" : ""}`}>
            ქვეყანა
          </p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#fff] flex justify-center items-center">
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className={`text-[14px] ${darkMode ? "text-color-primary" : ""}`}>
            გამოშვების წელი
          </p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#fff] flex justify-center items-center">
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className={`text-[14px] ${darkMode ? "text-color-primary" : ""}`}>
            ზომა/მოცულობა (მლ)
          </p>
          <div className="w-[24px] h-[24px] rounded-[50%] bg-[#fff] flex justify-center items-center">
            <img src={downArrow} alt="down-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailsSidebar;
