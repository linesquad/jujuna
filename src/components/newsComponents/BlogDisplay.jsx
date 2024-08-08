import BlogWrapper from "./BlogWrapper";
import useBlogs from "../../hooks/useBlogs";
import BlogDisplayItems from "./BlogDisplayItems";

const BlogDisplay = () => {
  const { data: allBlogs = [] } = useBlogs();

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
