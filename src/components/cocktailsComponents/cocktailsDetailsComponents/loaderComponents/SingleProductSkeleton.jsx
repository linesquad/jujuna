import { useSelector } from "react-redux";
import { getMode } from "../../../../features/darkModeSlice";
import Wrapper from "../../../Wrapper";

function SingleProductSkeleton() {
  const darkMode = useSelector(getMode);
  return (
    <div className={`${darkMode ? "bg-[#55426E]" : "bg-[#eaeaea]"}`}>
      <Wrapper>
        <div className="pt-[61px]">
          <div className="pt-[61px] w-[161px] h-[54px] bg-gray-800"></div>
        </div>
      </Wrapper>
    </div>
  );
}

export default SingleProductSkeleton;
