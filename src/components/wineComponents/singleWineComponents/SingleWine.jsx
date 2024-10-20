import { useParams } from "react-router-dom";
import Spinner from "../../Spinner";
import SinglWineCard from "./SingleWineCard";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import SingleWineReviews from "./SingleWineReviews";
import SkeletonWineCard from "./SkeletonWineCard";
import Bottle from "../../landingComponents/Bottle";
import { useWineById } from "../../../hooks/useWine";

function SingleWine() {
  const { id } = useParams();
  const { data: wine, isLoading, isError, error } = useWineById(id);
  const darkMode = useSelector(getMode);

  return (
    <div
      className={`${
        darkMode ? "bg-[#12151C] text-[#fff]" : "bg-[#fff] text-dark-black"
      } pb-20 min-h-screen overflow-hidden`}
    >
      {isLoading ? <SkeletonWineCard /> : <SinglWineCard wine={wine} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SingleWineReviews wine={wine} />
          <Bottle />
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
