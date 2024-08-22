import BlogWrapper from "./BlogWrapper";
import BlogDisplayItems from "./BlogDisplayItems";
import Spinner from "../Spinner";
import { useEffect, useState } from "react";
import { usePaginatedBlogs } from "../../hooks/useBlogs";

const BlogDisplay = () => {
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);

  const {
    data: paginatedBlogs = [],
    isLoading,
    isError,
    error,
  } = usePaginatedBlogs(page, 3);

  useEffect(() => {
    if (isLoading === false && paginatedBlogs.length === 0) {
      setPage((prev) => prev - 1);
      setLastPage(page);
    }
  }, [isLoading, paginatedBlogs, page, lastPage]);

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
        <div className="flex flex-wrap justify-center gap-4 lg:w-full lg:flex-nowrap lg:justify-between lg:flex-col pt-5">
          {paginatedBlogs.map((item, index) => (
            <BlogDisplayItems item={item} index={index} key={item.id} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-purple-500 text-white p-2 m-2 rounded-lg"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))} // Ensure page doesn't go below 1
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className="bg-purple-500 text-white p-2 m-2 rounded-lg"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === lastPage - 1}
          >
            Next
          </button>
        </div>
      </BlogWrapper>
    </div>
  );
};

export default BlogDisplay;
