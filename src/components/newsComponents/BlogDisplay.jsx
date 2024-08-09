import BlogWrapper from "./BlogWrapper";
import useBlogs from "../../hooks/useBlogs";
import BlogDisplayItems from "./BlogDisplayItems";
import Spinner from "../Spinner";

const BlogDisplay = () => {
  const { data: allBlogs = [], isLoading, isError, error } = useBlogs();

  if (isLoading) {
    return (
      <div className="pb-2">
        <Spinner />;
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <BlogWrapper>
        <div className="flex flex-wrap justify-center gap-4 lg:w-full lg:flex-nowrap lg:justify-between lg:flex-col pt-5">
          {allBlogs.map((item, index) => (
            <BlogDisplayItems item={item} index={index} key={item.id} />
          ))}
        </div>
      </BlogWrapper>
    </div>
  );
};

export default BlogDisplay;
