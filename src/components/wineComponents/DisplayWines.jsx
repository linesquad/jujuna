import React from "react";
import { useWines, useWinesByCategory } from "../../hooks/useWines";
import { useParams } from "react-router-dom";
import WineCard from "./wineCardComponents/WineCard";
import ListWineCard from "./wineCardComponents/ListWineCard";
import ColWineCard from "./wineCardComponents/ColWineCard";

function DisplayWines() {
  const { layoutName: layout } = useParams();
  console.log(layout);

  const { data: wines } = useWines();
  const { data: winesCategory } = useWinesByCategory();
  const layoutStyles = {
    default:
      "tiny:-ml-6 grid gap-4  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative  justify-items-center ",
    list: "flex flex-col ",
    col: "flex flex-col ",
  };
  console.log(winesCategory);

  const fillterWines = winesCategory?.products || wines;

  return (
    <div className={`w-full min-h-[100vh] mb-24 ${layoutStyles[layout]}`}>
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
