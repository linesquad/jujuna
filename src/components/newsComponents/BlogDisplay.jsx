import BlogWrapper from "./BlogWrapper";
import BlogDisplayItems from "./BlogDisplayItems";
import Spinner from "../Spinner";
// import useBlogs from "../../hooks/useBlogs";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import useFetchAllBlogs from "../../services/useFetchAllBlogs";

const BlogDisplay = () => {
  const darkMode = useSelector(getMode);
  const {
    data: peginatedBlogs,
    isLoading,
    isError,
    error,
  } = useFetchAllBlogs();

  if (isLoading) {
    return (
      <div className="pb-2">
        <Spinner />;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center bg-purple-700 p-2">
        <p className="text-purple-200 font-bold">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <BlogWrapper>
        <h2
          className={`text-[36px] md:text-center md:py-[80px] ${
            darkMode ? "text-[#fff]" : "text-[#000]"
          }`}
        >
          Latest news
        </h2>
        <div className="flex flex-wrap justify-center gap-4 lg:w-full lg:flex-nowrap lg:justify-between lg:flex-col pt-5">
          {peginatedBlogs.map((item, index) => (
            <BlogDisplayItems item={item} index={index} key={item._id} />
          ))}
        </div>
      </BlogWrapper>
    </div>
  );
};

export default BlogDisplay;
