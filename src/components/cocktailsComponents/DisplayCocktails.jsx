import useCocktails from "../../hooks/useCocktails";
import Wrapper from "../Wrapper";
import CocktailCard from "./CocktailCard";
import Spinner from "../../components/Spinner";

function DisplayCocktails() {
  const { data: cocktails, isLoading, isError, error } = useCocktails();

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <h2 className="md:text-[22px] lg:text-[26px] text-center text-red-700">
        {error.message}
      </h2>
    );

  return (
    <Wrapper>
      <div className="grid gap-[16px] small:grid-cols-[1fr] grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] m-auto relative min-h-[300px] md:min-h-[600px]">
        {cocktails?.map((item) => {
          return <CocktailCard key={item._id} item={item} />;
        })}
      </div>
    </Wrapper>
  );
}

export default DisplayCocktails;
