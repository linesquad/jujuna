import { useSelector } from "react-redux";
import BlogDisplay from "../components/newsComponents/BlogDisplay";
import FilterNews from "../components/newsComponents/FilterNews";
import HeroNews from "../components/newsComponents/HeroNews";
import { getMode } from "../features/darkModeSlice";
import Pegination from "../components/Pegination";

function News() {
  const mode = useSelector(getMode);
  return (
    <div
      className={`${
        mode
          ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)]"
          : "bg-[#EAEAEA]"
      } `}
    >
      <HeroNews />
      <FilterNews />
      <BlogDisplay />
      {/* <Pegination pageQuantity={5} /> */}
    </div>
  );
}

export default News;
