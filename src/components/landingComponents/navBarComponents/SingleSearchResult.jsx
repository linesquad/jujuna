import { useState, useEffect } from "react";
import { useSearchProducts } from "../../../hooks/useSearchProducts";
import { Link } from "react-router-dom";

function SingleSearchResult({ flag, title }) {
  const [searchQuery, setSearchQuery] = useState(title);
  const [debouncedQuery, setDebouncedQuery] = useState(title);

  useEffect(() => {
    setSearchQuery(title);
  }, [title]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const { data, isLoading, isError } = useSearchProducts(debouncedQuery, flag);

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Error loading results...</div>
    );

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Search Results
      </h2>
      <div className="max-h-full overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {data?.map((item, index) => (
            <li key={index} className="py-3 px-4 hover:bg-gray-100">
              <Link
                to={`/${item.type}/${item.id}`}
                className="flex justify-between items-center"
              >
                <div className="text-gray-800">
                  <p className="text-base font-medium truncate">{item.title}</p>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <span className="text-blue-500 text-sm font-semibold">
                  View
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleSearchResult;
