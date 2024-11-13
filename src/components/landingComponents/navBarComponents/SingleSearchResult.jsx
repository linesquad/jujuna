import { useSearchProducts } from "../../../hooks/useSearchProducts";
function SingleSearchResult({ flag, title }) {
  const { data, isLoading, isError } = useSearchProducts(title, flag);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="text-red-500">
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default SingleSearchResult;
