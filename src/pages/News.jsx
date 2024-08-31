import { useSelector } from "react-redux";
import BlogDisplay from "../components/newsComponents/BlogDisplay";
import HeroNews from "../components/newsComponents/HeroNews";
import { getMode } from "../features/darkModeSlice";

function News() {
  const mode = useSelector(getMode);
  return (
    <div className={`${mode ? "bg-[#12151C]" : "bg-[#fff]"} `}>
      <HeroNews />
      <BlogDisplay />
    </div>
  );
}

export default News;
