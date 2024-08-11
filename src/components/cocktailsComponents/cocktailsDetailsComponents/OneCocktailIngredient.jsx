import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function OneCocktailIngredient({ item }) {
  const darkMode = useSelector(getMode);
  return (
    <div
      className={`flex items-center gap-[20px] pb-[20px] border-b-[1px]  ${
        darkMode ? "border-b-[#eaeaea]" : "border-b-[#848282]"
      }`}
    >
      <p className={darkMode ? "text-color-primary" : "text-color-black"}>
        {item}
      </p>
    </div>
  );
}

export default OneCocktailIngredient;
