import { useSelector } from "react-redux";
import CocktailsHeader from "../components/cocktailsComponents/CocktailsHeader";
import CocktailsSidebar from "../components/cocktailsComponents/CocktailsSidebar";
import DisplayCocktails from "../components/cocktailsComponents/DisplayCocktails";
import Wrapper from "../components/Wrapper";
import { getMode } from "../features/darkModeSlice";

function CockTails() {
  const darkMode = useSelector(getMode);
  return (
    <div className={`${darkMode ? "bg-[#55426E]" : "bg-[#eaeaea]"}`}>
      <CocktailsHeader />
      <Wrapper>
        <div className="flex gap-[40px] mt-[23px] md:mt-[40px] lg:mt-[60px] px-[14px] md:px-[0px] py-[15px]">
          <CocktailsSidebar />
          <DisplayCocktails />
        </div>
      </Wrapper>
    </div>
  );
}

export default CockTails;
