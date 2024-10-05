import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import NewsDetailsBackButton from "./NewsDetailsBackButton";
import NewsDetailsLeftSide from "./NewsDetailsLeftSide";

import NewsDetailsWrapper from "./NewsDetailsWrapper";

export default function NewsDetailsHero() {
  const darkMode = useSelector(getMode);
  return (
    <div className={`${darkMode ? "bg-[#12151C]" : "bg-white"} `}>
      <NewsDetailsBackButton />
      <NewsDetailsWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20">
          <NewsDetailsLeftSide />
          {/* Here should be right side */}
        </div>
      </NewsDetailsWrapper>
    </div>
  );
}
