import useCocktails from "../../hooks/useCocktails";
import Wrapper from "../Wrapper";
import CocktailCard from "./CocktailCard";
import CocktailsPegination from "./CocktailsPegination";

function DisplayCocktails() {
  const { data: cocktails } = useCocktails();
  return (
    <Wrapper>
      <div className="grid gap-[16px] grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] m-auto">
        {cocktails?.map((item) => {
          return <CocktailCard key={item.id} item={item} />;
        })}
      </div>
      <CocktailsPegination />
    </Wrapper>
  );
}

export default DisplayCocktails;
