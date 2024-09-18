import React from "react";
import { useWines } from "../../hooks/useWines";
import { useParams } from "react-router-dom";
import WineCard from "./wineCardComponents/WineCard";
import ListWineCard from "./wineCardComponents/ListWineCard";
import ColWineCard from "./wineCardComponents/ColWineCard";
import Spinner from "../Spinner";
import { useWinesByCategory } from "../../hooks/useWineCategory";

function DisplayWines() {
  const { layoutName: layout, categoryId } = useParams();
  console.log(layout);

  const { data: wines, isLoading } = useWines();
  const { data: winesCategory, isLoading: categoryLoading } =
    useWinesByCategory(categoryId);
  const layoutStyles = {
    default:
      "tiny:-ml-6 grid gap-4  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative  justify-items-center ",
    list: "flex flex-col ",
    col: "flex flex-col ",
  };

  const fillterWines = winesCategory?.products || wines;

  if (isLoading || categoryLoading)
    return (
      <div className="min-h-[100vh] min-w-full flex flex-col justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <div
      className={`w-full min-h-[100vh] items-start mb-24 ${layoutStyles[layout]}`}
    >
      {fillterWines?.map((wine) => (
        <React.Fragment key={wine._id}>
          {layout === "default" && <WineCard wine={wine} />}
          {layout === "list" && <ListWineCard wine={wine} />}
          {layout === "col" && <ColWineCard wine={wine} />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default DisplayWines;
