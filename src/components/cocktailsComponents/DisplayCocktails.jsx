import useCocktails from "../../hooks/useCocktails";
import Wrapper from "../Wrapper";
import CocktailCard from "./CocktailCard";
import Pegination from "../Pegination";
import Spinner from "../../components/Spinner";
import { useEffect, useState } from "react";

function DisplayCocktails({ sortValue }) {
  const { data: cocktails, isLoading, isError, error } = useCocktails();
  const [sortedCocktails, setSortedCocktails] = useState([]);
  const [paginatedCocktails, setPeginatedCocktails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (sortValue === "Default" || sortValue === "ნაგულისხმევი") {
      setSortedCocktails(cocktails);
    } else if (sortValue === "Price" || sortValue === "ფასი") {
      const sorted = [...cocktails].sort((a, b) => a.price - b.price);
      setSortedCocktails(sorted);
    } else if (sortValue === "Size" || sortValue === "ზომა") {
      const sorted = [...cocktails].sort((a, b) => a.size - b.size);
      setSortedCocktails(sorted);
    }
  }, [cocktails, sortValue]);

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <h2 className="md:text-[22px] lg:text-[26px] text-center text-red-700">
        {error.message}
      </h2>
    );

  return (
    <Wrapper>
      <div className="grid gap-[16px] tiny:grid-cols-[1fr] grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] m-auto relative min-h-[80vh]">
        {paginatedCocktails?.map((item) => {
          return <CocktailCard key={item.id} item={item} />;
        })}
      </div>
      <Pegination
        itemsArray={sortedCocktails}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={3}
        setPeginatedItems={setPeginatedCocktails}
      />
    </Wrapper>
  );
}

export default DisplayCocktails;
