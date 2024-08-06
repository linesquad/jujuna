import BlogDisplay from "../components/landingComponents/newsComponents/BlogDisplay";
import FilterNews from "../components/landingComponents/newsComponents/FilterNews";
import HeroNews from "../components/landingComponents/newsComponents/HeroNews";

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
