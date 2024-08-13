import CocktailsDetailsHeader from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailsDetailsHeader";
import { useCocktailId } from "../hooks/useCocktails";
import CocktailDetailsCard from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailDetailsCard";
import SingleCocktailProduct from "../components/cocktailsComponents/cocktailsDetailsComponents/SingleCocktailProduct";
import SameCocktails from "../components/cocktailsComponents/cocktailsDetailsComponents/SameCocktails";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";

function CocktailDetails() {
  const darkMode = useSelector(getMode);
  const { data: cocktail, isLoading, isError, error } = useCocktailId();

  if (isLoading)
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (isError)
    return (
      <h2 className="md:text-[22px] lg:text-[26px] text-center text-red-700">
        {error.message}
      </h2>
    );

  return (
    <div className={`${darkMode ? "bg-[#55426E]" : "bg-[#eaeaea]"}`}>
      <div className="md:hidden">
        <CocktailsDetailsHeader item={cocktail} />
        <CocktailDetailsCard item={cocktail} />
      </div>
      <div className="hidden md:block">
        <SingleCocktailProduct cocktail={cocktail} />
      </div>
      <SameCocktails />
    </div>
  );
}

export default CocktailDetails;
