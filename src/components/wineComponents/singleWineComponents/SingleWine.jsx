import { useParams } from "react-router-dom";
import { useWineById } from "../../../hooks/useWines";
import Spinner from "../../Spinner";
import SingleWineHeader from "./SingleWineHeader";
import SinglWineCard from "./SingleWineCard";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import SingleWineText from "./SingleWineText";
import SingleWineImages from "./SingleWineImages";
import SingleWineReviews from "./SingleWineReviews";
import RelatedWines from "./RelatedWines";

function SingleWine() {
  const { id } = useParams();
  const { data: wine, isLoading, isError, error } = useWineById(id);
  const mode = useSelector(getMode);

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <div className="text-center bg-purple-700 p-2 -mb-24">
        <p className="text-purple-200 font-bold">{error.message}</p>
      </div>
    );

  return (
    <div
      className={`${
        mode
          ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] lg:text-color-dark-black"
          : "bg-wineNavbarColor-light text-dark-black"
      } min-h-screen overflow-hidden`}
    >
      <SingleWineHeader />
      <SinglWineCard wine={wine} />
      <SingleWineText />
      <SingleWineImages />
      <SingleWineReviews />
      <RelatedWines />
    </div>
  );
}

export default SingleWine;
