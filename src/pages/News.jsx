import BlogDisplay from "../components/newsComponents/BlogDisplay";
import FilterNews from "../components/newsComponents/FilterNews";
import HeroNews from "../components/newsComponents/HeroNews";

function News() {
  return (
    <>
      <HeroNews />
      <FilterNews />
      <BlogDisplay />
    </>
  );
}

export default News;
