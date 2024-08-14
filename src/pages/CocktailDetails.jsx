import SingleProductSkeleton from "../components/cocktailsComponents/cocktailsDetailsComponents/skeletonLoaderComponents/SingleProductSkeleton";
import CocktailsDetailsHeader from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailsDetailsHeader";
import { useCocktailId } from "../hooks/useCocktails";
import CocktailDetailsCard from "../components/cocktailsComponents/cocktailsDetailsComponents/CocktailDetailsCard";
import SingleCocktailProduct from "../components/cocktailsComponents/cocktailsDetailsComponents/SingleCocktailProduct";
import SameCocktails from "../components/cocktailsComponents/cocktailsDetailsComponents/SameCocktails";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import { useParams } from "react-router-dom";
import SkeletonForMobile from "../components/cocktailsComponents/cocktailsDetailsComponents/skeletonLoaderComponents/SkeletonForMobile";

function CocktailDetails() {
  const { id } = useParams();
  const darkMode = useSelector(getMode);
  const { data: cocktail, isLoading, isError, error } = useCocktailId(id);

  if (isError)
    return (
      <h2 className="md:text-[22px] lg:text-[26px] text-center text-red-700">
        {error.message}
      </h2>
    );

  return (
    <div className={`${darkMode ? "bg-[#55426E]" : "bg-[#eaeaea]"}`}>
      <div className="md:hidden px-[20px]">
        {isLoading ? (
          <SkeletonForMobile />
        ) : (
          <>
            <CocktailsDetailsHeader item={cocktail} />
            <CocktailDetailsCard item={cocktail} />
          </>
        )}
      </div>
      <div className="hidden md:block">
        {isLoading ? (
          <SingleProductSkeleton />
        ) : (
          <SingleCocktailProduct cocktail={cocktail} />
        )}
      </div>
      <SameCocktails />
    </div>
  );
}

export default CocktailDetails;
