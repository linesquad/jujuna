import BlogWrapper from "./BlogWrapper";
import BlogDisplayItems from "./BlogDisplayItems";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import useFetchAllBlogs from "../../services/useFetchAllBlogs";
import ReusableLoading from "../../ui/ReusableLoading";
import ReusableErrorRobot from "../../ui/ReusableErrorRobot";

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
      <div className="flex justify-center">
        <ReusableLoading width="150px" height="150px" />;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center gap-1">
        <ReusableErrorRobot width="150px" height="150px" />
        <span className="text-red-600 font-semibold text-lg tiny:text-sm smaller:text-base">
          {error.message}
        </span>
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
