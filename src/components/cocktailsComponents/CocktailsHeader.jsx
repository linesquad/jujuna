import Wrapper from "../Wrapper";
import rightArrow from "/images/rightArrow.svg";
import cocktailsFilter from "/images/cocktailsFillter.svg";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function CocktailsHeader({ setIsFillterOpen }) {
  const darkMode = useSelector(getMode);
  return (
    <Wrapper>
      <div className="pt-[26px] pl-[16px] relative">
        <div
          className={`text-[12px] md:text-[16px] text-[#848282CC]/80 flex items-center gap-[9px] ${
            darkMode ? "text-color-primary" : ""
          }`}
        >
          <p>საწყისი გვერდი</p>
          <img src={rightArrow} alt="right-arrow" />
          <p>კოქტეილები</p>
        </div>
        <img
          src={cocktailsFilter}
          alt="cocktails-fillter"
          className="mt-[25px] md:hidden"
          onClick={() => setIsFillterOpen((fillter) => !fillter)}
        />
      </div>
    </Wrapper>
  );
}

export default CocktailsHeader;
