import useCocktails from "../../hooks/useCocktails";
import Wrapper from "../Wrapper";
import CocktailCard from "./CocktailCard";
import Pegination from "../Pegination";

function DisplayCocktails() {
  const { data: cocktails } = useCocktails();
  return (
    <Wrapper>
      <div className="grid gap-[16px] grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] m-auto relative">
        {cocktails?.map((item) => {
          return <CocktailCard key={item.id} item={item} />;
        })}
      </div>
      <Pegination pageQuantity={5} />
    </Wrapper>
  );
}

export default DisplayCocktails;
