import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import WineNavbar from "../components/wineComponents/WineNavbar";
import WineCover from "../components/wineComponents/WineCover";
import WineCard from "../components/wineComponents/WineCard";
import WineContent from "../components/wineComponents/WineContent";
import useWines from "../hooks/useWines";
import Spinner from "../components/Spinner";
import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import Pegination from "../components/Pegination";

const Wines = () => {
  const darkMode = useSelector(getMode);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [filteredAndSortedWines, setFilteredAndSortedWines] = useState([]);
  const [paginatedWines, setPaginatedWines] = useState([]);
  const winesPerPage = 3;

  const { data: wines, isLoading, isError, error } = useWines();

  useEffect(() => {
    if (!wines) return;

    let filteredWines =
      selectedCategory === "All"
        ? wines
        : wines.filter((wine) => wine.color.en === selectedCategory);

    if (sortOption === "priceLowToHigh") {
      filteredWines.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighToLow") {
      filteredWines.sort((a, b) => b.price - a.price);
    } else if (sortOption === "alcLowToHigh") {
      filteredWines.sort((a, b) => a.alco - b.alco);
    } else if (sortOption === "alcHighToLow") {
      filteredWines.sort((a, b) => b.alco - a.alco);
    }

    setFilteredAndSortedWines(filteredWines);
  }, [wines, selectedCategory, sortOption]);

  useEffect(() => {
    setPaginatedWines(filteredAndSortedWines.slice(0, 3));
  }, [filteredAndSortedWines, sortOption]);

  console.log(filteredAndSortedWines);

  return (
    <div
      className={`flex flex-col pb-24  ${
        darkMode
          ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] text-[#fff]"
          : "bg-wineNavbarColor-light text-dark-black"
      }`}
    >
      <WineCover />
      <WineNavbar onCategoryChange={setSelectedCategory} />
      <WineContent onSortChange={setSortOption} />
      <Wrapper>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative mb-24 justify-items-center">
          {paginatedWines?.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </Wrapper>
      {isLoading && <Spinner />}
      {isError && (
        <div className="text-center bg-purple-700 p-2 -mb-24">
          <p className="text-purple-200 font-bold">{error.message}</p>
        </div>
      )}
      <div>
        <Pegination
          itemsArray={filteredAndSortedWines}
          itemsPerPage={winesPerPage}
          setPeginatedItems={setPaginatedWines}
        />
      </div>
    </div>
  );
};

export default Wines;
