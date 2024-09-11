import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function SideCocktails({ cocktail, setMainImage }) {
  const darkMode = useSelector(getMode);
  return (
    <div className="flex flex-col gap-[5px] lg:gap-[20px]">
      <div
        className={`md:p-[5px] lg:p-[10px] ${darkMode ? "bg-[#613994]" : ""}`}
      >
        <img
          onClick={() => setMainImage(cocktail?.image)}
          src={cocktail?.image}
          alt="cocktail"
          className="w-[60px] h-[90px] rounded-md cursor-pointer"
        />
      </div>
      <div
        className={`md:p-[5px] lg:p-[10px] ${darkMode ? "bg-[#613994]" : ""}`}
      >
        <img
          onClick={() => setMainImage(cocktail?.image)}
          src={cocktail?.image}
          alt="cocktail"
          className="w-[60px] h-[90px] rounded-md cursor-pointer"
        />
      </div>
      <div
        className={`md:p-[5px] lg:p-[10px] ${darkMode ? "bg-[#613994]" : ""}`}
      >
        <img
          onClick={() => setMainImage(cocktail?.image)}
          src={cocktail?.image}
          alt="cocktail"
          className="w-[60px] h-[90px] rounded-md cursor-pointer"
        />
      </div>
      <div
        className={`md:p-[5px] lg:p-[10px] ${darkMode ? "bg-[#613994]" : ""}`}
      >
        <img
          onClick={() => setMainImage(cocktail?.image)}
          src={cocktail?.image}
          alt="cocktail"
          className="w-[60px] h-[90px] rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
}

export default SideCocktails;
