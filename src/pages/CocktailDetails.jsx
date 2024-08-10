import { useParams } from "react-router-dom";
import CocktailsDetailsHeader from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailsDetailsHeader";
import useCocktails from "../hooks/useCocktails";
import CocktailDetailsCard from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailDetailsCard";
import SingleCocktailProduct from "../components/cocktailsComponents/cocktailsDetailsComponents/SingleCocktailProduct";
import SameCocktails from "../components/cocktailsComponents/cocktailsDetailsComponents/SameCocktails";

function CocktailDetails() {
  const { id } = useParams();
  const { data: cocktails } = useCocktails();
  const cocktail = cocktails?.find((item) => String(item.id) === String(id));

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
