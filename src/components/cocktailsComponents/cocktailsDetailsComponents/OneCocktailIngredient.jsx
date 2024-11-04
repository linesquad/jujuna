import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function OneCocktailIngredient({ item }) {
  const darkMode = useSelector(getMode);
  return (
    <div
      className={`flex flex-col gap-[10px] pb-[20px] border-b-[1px]  ${
        darkMode ? "border-b-[#eaeaea]" : "border-b-[#848282]"
      }`}
    >
      <p className={darkMode ? "text-color-primary" : "text-color-black"}>
        {item.split(" - ")[0]}
      </p>
      <p className={darkMode ? "text-color-primary" : "text-color-black"}>
        {item.split(" - ")[1]}
      </p>
    </div>
  );
}

export default OneCocktailIngredient;
