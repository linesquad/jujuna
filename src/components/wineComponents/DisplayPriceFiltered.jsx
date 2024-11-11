import { useMinMaxRange } from "../../hooks/useMinMaxRange";
import { useWinesByCategory } from "../../hooks/useWineCategory";
import { useParams, useLocation } from "react-router-dom";
import WineCard from "./wineCardComponents/WineCard";
import ListWineCard from "./wineCardComponents/ListWineCard";
import ColWineCard from "./wineCardComponents/ColWineCard";
import Spinner from "../Spinner";
import { useState, useEffect } from "react";

function DisplayPriceFiltered() {
  const { layoutName: layoutFromParams, categoryId } = useParams();
  const location = useLocation();
  const { search } = location;

  // Extracting minPrice and maxPrice from the query params
  const queryParams = new URLSearchParams(search);
  const minPrice = parseInt(queryParams.get("minPrice"), 10) || 0;
  const maxPrice = parseInt(queryParams.get("maxPrice"), 10) || 100;

  const { data: wines, isLoading } = useMinMaxRange(minPrice, maxPrice); 
  const { data: winesCategory, isLoading: categoryLoading } =
    useWinesByCategory(categoryId);

  const [layout, setLayout] = useState(layoutFromParams || "default");

  const layoutStyles = {
    default:
      "tiny:-ml-6 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative justify-items-center sm:grid-cols-1 sm:place-items-center lg:place-items-start", // Remove centering above 900px (lg breakpoint)
    list: "grid sm:grid-cols-1 sm:place-items-center lg:place-items-start",
    col: "grid sm:grid-cols-1 sm:place-items-center lg:place-items-start",
  };

  const filterWines = winesCategory?.products || wines;

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

  if (isLoading || categoryLoading)
    return (
      <div className="min-h-[100vh] min-w-full flex flex-col justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <div
      className={`w-full lg:min-h-[100vh] items-start mb-24 ${layoutStyles[layout]}`}
    >
      {filterWines?.map((wine) => (
        <div
          className={`flex flex-col items-start ${
            layout === "default" ? "" : "w-full"
          }`}
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

export default DisplayPriceFiltered;
