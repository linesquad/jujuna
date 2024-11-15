import { useWines } from "../../hooks/useWines";
import { useParams } from "react-router-dom";
import WineCard from "./wineCardComponents/WineCard";
import ListWineCard from "./wineCardComponents/ListWineCard";
import ColWineCard from "./wineCardComponents/ColWineCard";
import Spinner from "../Spinner";
import { useWinesByCategory } from "../../hooks/useWineCategory";
import { useState, useEffect } from "react";
import { useMinMaxRange } from "../../hooks/useMinMaxRange";

function DisplayWines() {
  const {
    layoutName: layoutFromParams,
    categoryId,
    minPrice,
    maxPrice,
  } = useParams();

  const parsedMinPrice = parseFloat(minPrice?.split("=")[1]) || 0;
  const parsedMaxPrice = parseFloat(maxPrice?.split("=")[1]) || 10000;

  const { data: wines, isLoading } = useWines();
  const { data: winesCategory, isLoading: categoryLoading } =
    useWinesByCategory(categoryId);
  const { data: winePrices, isLoading: pricesLoading } = useMinMaxRange(
    parsedMinPrice,
    parsedMaxPrice
  );
 
  const [layout, setLayout] = useState(layoutFromParams || "default");

  const layoutStyles = {
    default:
      "tiny:-ml-6 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative justify-items-center sm:grid-cols-1 sm:place-items-center lg:place-items-start",
    list: "grid sm:grid-cols-1 sm:place-items-center lg:place-items-start",
    col: "grid sm:grid-cols-1 sm:place-items-center lg:place-items-start",
  };

  const winesToFilter = winePrices ? winePrices : winesCategory?.products || wines;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLayout("default");
      } else {
        setLayout(layoutFromParams || "default");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [layoutFromParams]);

  if (isLoading || categoryLoading || pricesLoading)
    return (
      <div className="min-h-[100vh] min-w-full flex flex-col justify-center items-center">
        <Spinner />
      </div>
    );

  if (winesToFilter.length === 0)
    return (
      <div className="min-h-[100vh] min-w-full flex flex-col justify-center items-center">
        <h2>No products found</h2>
      </div>
    );

  return (
    <div
      className={`w-full lg:min-h-[100vh] items-start mb-24 ${layoutStyles[layout]}`}
    >
      {winesToFilter.map((wine) => (
        <div
          className={`flex flex-col items-start ${layout === "default" ? "" : "w-full"}`}
          key={wine._id}
        >
          {layout === "default" && <WineCard wine={wine} />}
          {layout === "list" && <ListWineCard wine={wine} />}
          {layout === "col" && <ColWineCard wine={wine} />}
        </div>
      ))}
    </div>
  );
}

export default DisplayWines;
