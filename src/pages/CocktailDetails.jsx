import { useParams } from "react-router-dom";
import CocktailsDetailsHeader from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailsDetailsHeader";
import useCocktails from "../hooks/useCocktails";
import CocktailDetailsCard from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailDetailsCard";
import SingleCocktailProduct from "../components/cocktailsComponents/cocktailsDetailsComponents/SingleCocktailProduct";
import SameCocktails from "../components/cocktailsComponents/cocktailsDetailsComponents/SameCocktails";
import Spinner from "../components/Spinner";

function CocktailDetails() {
  const { id } = useParams();
  const { data: cocktails, isLoading, isError, error } = useCocktails();
  const cocktail = cocktails?.find((item) => String(item.id) === String(id));

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
    <div className="bg-[#eaeaea]">
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
