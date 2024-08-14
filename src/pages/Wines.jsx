import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import WineNavbar from "../components/wineComponents/WineNavbar";
import WineCover from "../components/wineComponents/WineCover";
import WineCard from "../components/wineComponents/WineCard";
import WineContent from "../components/wineComponents/WineContent";
import useWines from "../hooks/useWines";
import Spinner from "../components/Spinner";
import Wrapper from "../components/Wrapper";

const Wines = () => {
  const mode = useSelector(getMode);

  const { data: wines, isLoading, isError, error } = useWines();

  return (
    <div
      className={`flex flex-col pb-24  ${
        mode
          ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] text-[#fff]"
          : "bg-wineNavbarColor-light text-dark-black"
      }`}
    >
      <WineCover />
      <WineNavbar />
      <WineContent />
      <Wrapper>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative mb-24 justify-items-center">
          {wines?.map((wine) => (
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
    </div>
  );
};

export default Wines;
