import Wrapper from "../Wrapper";
import rightArrow from "/images/rightArrow.svg";
import cocktailsFilter from "/images/cocktailsFillter.svg";

function CocktailsHeader() {
  return (
    <Wrapper>
      <div className="pt-[26px] pl-[16px]">
        <div className="text-[12px] text-[#848282CC]/80 flex items-center gap-[9px]">
          <p>საწყისი გვერდი</p>
          <img src={rightArrow} alt="right-arrow" />
          <p>კოქტეილები</p>
        </div>
        <img
          src={cocktailsFilter}
          alt="cocktails-fillter"
          className="mt-[25px] md:hidden"
        />
      </div>
    </Wrapper>
  );
}

export default CocktailsHeader;
