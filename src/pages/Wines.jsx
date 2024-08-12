import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import WineNavbar from "../components/wineComponents/WineNavbar";
import WineCover from "../components/wineComponents/WineCover";
import WineCard from "../components/wineComponents/WineCard";
import WineContent from "../components/wineComponents/WineContent";

const Wines = () => {
  const mode = useSelector(getMode);

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
      <WineCard />
    </div>
  );
};

export default Wines;
