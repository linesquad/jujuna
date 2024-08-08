import { useSelector } from "react-redux";
import CocktailsHeader from "../components/cocktailsComponents/CocktailsHeader";
import CocktailsSidebar from "../components/cocktailsComponents/CocktailsSidebar";
import DisplayCocktails from "../components/cocktailsComponents/DisplayCocktails";
import Wrapper from "../components/Wrapper";
import { getMode } from "../features/darkModeSlice";
import { useState } from "react";

function CockTails() {
  const darkMode = useSelector(getMode);
  const [isFillterOpen, setIsFillterOpen] = useState(false);
  return (
    <div className={`${darkMode ? "bg-[#55426E]" : "bg-[#eaeaea]"}`}>
      <CocktailsHeader setIsFillterOpen={setIsFillterOpen} />
      <Wrapper>
        <div className="flex gap-[40px] mt-[23px] md:mt-[40px] lg:mt-[60px] px-[14px] md:px-[0px] py-[15px]">
          <div className="hidden md:block">
            <CocktailsSidebar />
          </div>
          <DisplayCocktails isFillterOpen={isFillterOpen} />
        </div>
      </Wrapper>
    </div>
  );
}

export default CockTails;
