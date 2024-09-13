import CocktailsDetailsHeader from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailsDetailsHeader";
import CocktailDetailsCard from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailDetailsCard";
import SameCocktails from "../components/cocktailsComponents/cocktailsDetailsComponents/SameCocktails";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import { useParams } from "react-router-dom";
import SkeletonForMobile from "../components/cocktailsComponents/cocktailsDetailsComponents/skeletonLoaderComponents/SkeletonForMobile";
import { useCocktailId } from "../hooks/useCocktail";

function CocktailDetails() {
  const { id } = useParams();
  const darkMode = useSelector(getMode);
  const { data: cocktail, isLoading, isError, error } = useCocktailId(id);
  console.log(id);

  if (isError)
    return (
      <h2 className="md:text-[22px] lg:text-[26px] text-center text-red-700">
        {error.message}
      </h2>
    );

  return (
    <div className={`${darkMode ? "bg-[#12151C]" : "bg-[#fff]"}`}>
      <div className="px-[20px]">
        {isLoading ? (
          <SkeletonForMobile />
        ) : (
          <>
            <CocktailsDetailsHeader item={cocktail} />
            <CocktailDetailsCard item={cocktail} />
          </>
        )}
      </div>
      <SameCocktails />
    </div>
  );
}

export default CocktailDetails;
