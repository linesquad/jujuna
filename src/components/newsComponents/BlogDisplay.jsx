import BlogWrapper from "./BlogWrapper";
import useBlogs from "../../hooks/useBlogs";

const BlogDisplay = () => {
  const { data: allBlogs = [] } = useBlogs();
  console.log(allBlogs);

  return (
    <div className="bg-[#EAEAEA] w-full">
      <BlogWrapper>
        {allBlogs.map((item) => (
          <div key={item.id}>
            <div className="tiny:p-2 tiny:text-center">
              <img src={item.image} />
              <h1 className="text-[#8A63A2] pt-4">Latest news</h1>
              <h1 className={`text-black font-bold pt-2 tiny:px-4 tiny:py-1`}>
                {item.title.split("").length > 30
                  ? item.title.split("").slice(0, 30).join("") + "..."
                  : item.title}
              </h1>
              <p>
                {item.description.split("").length > 170
                  ? item.description.split("").slice(0, 170).join("") + "..."
                  : item.description}
              </p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </BlogWrapper>
    </div>
  );
};

export default BlogDisplay;
