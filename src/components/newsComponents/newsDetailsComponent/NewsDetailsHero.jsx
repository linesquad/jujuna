import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import NewsDetailsBackButton from "./NewsDetailsBackButton";
import NewsDetailsLeftSide from "./NewsDetailsLeftSide";
import NewsDetailsRightSide from "./NewsDetailsRightSide";
import NewsDetailsWrapper from "./NewsDetailsWrapper";

export default function NewsDetailsHero() {
  const mode = useSelector(getMode);
  return (
    <div
      className={`${
        mode
          ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)]"
          : "bg-[#EAEAEA]"
      } `}
    >
      <NewsDetailsBackButton />
      <NewsDetailsWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20">
          <NewsDetailsLeftSide />
          <NewsDetailsRightSide />
        </div>
      </NewsDetailsWrapper>
    </div>
  );
}

// return (
//   <div
//     className={`${
//       mode
//         ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)]"
//         : "bg-[#EAEAEA]"
//     } `}
//   >
//     <NewsDetailsBackButton />
//     <NewsDetailsWrapper>
//       <div className="flex flex-col lg:flex-row">
//         <div className="flex-1 bg-red-600 p-4">
//           <NewsDetailsLeftSide />
//         </div>
//         <div className="flex-1 bg-green-600 p-4">
//           <NewsDetailsRightSide />
//         </div>
//       </div>
//     </NewsDetailsWrapper>
//   </div>
// );
