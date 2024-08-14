import { useSelector } from "react-redux";
import { getMode } from "../../../../features/darkModeSlice";
import Wrapper from "../../../Wrapper";
import SkeletonDiv from "./SkeletonDiv";
import SideCocktailsSkeleton from "./SideCocktailsSkeleton";
import CocktailsIngredientsSkeleton from "./CocktailsIngredientsSkeleton";

function SingleProductSkeleton() {
  const darkMode = useSelector(getMode);
  return (
    <div className={`${darkMode ? "bg-[#55426E]" : "bg-[#eaeaea]"}`}>
      <Wrapper>
        <div className="pt-[61px]">
          <SkeletonDiv style="w-[178px] h-[40px]" />
        </div>
        <div className="pt-[120px] flex items-start justify-between gap-[90px] lg:gap-[90px] xl:gap-[120px]">
          <SideCocktailsSkeleton />
          <div>
            <SkeletonDiv style="w-[300px] h-[420px] lg:w-[380px] lg:h-[495px]" />
          </div>
          <CocktailsIngredientsSkeleton />
        </div>
      </Wrapper>
    </div>
  );
}

export default SingleProductSkeleton;
