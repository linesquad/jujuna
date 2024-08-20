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
import SkeletonWineCard from "./SkeletonWineCard";
import SkeletonImages from "./SkeletonImages";

function SingleWine() {
  const { id } = useParams();
  const { data: wine, isLoading, isError, error } = useWineById(id);
  const darkMode = useSelector(getMode);

  return (
    <div
      className={`${
        darkMode
          ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] lg:text-color-dark-black"
          : "bg-wineNavbarColor-light text-dark-black"
      } min-h-screen overflow-hidden`}
    >
      <SingleWineHeader />

      {isLoading ? <SkeletonWineCard /> : <SinglWineCard wine={wine} />}

      {isLoading ? <Spinner /> : <SingleWineText wine={wine} />}

      {isLoading ? <SkeletonImages /> : <SingleWineImages wine={wine} />}

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SingleWineReviews />
          <RelatedWines />
        </>
      )}
      {isError && (
        <div className="text-center bg-purple-700 p-2 mb-0 w-full">
          <p className="text-white font-bold">{error.message}</p>
        </div>
      )}
    </div>
  );
}

export default SingleWine;
