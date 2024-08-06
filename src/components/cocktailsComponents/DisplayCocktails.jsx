import useCocktails from "../../hooks/useCocktails";
import Wrapper from "../Wrapper";
import CocktailCard from "./CocktailCard";

function DisplayCocktails() {
  const { data: cocktails } = useCocktails();
  console.log(cocktails);
  return (
    <Wrapper>
      <div className="grid gap-[16px] grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] m-auto">
        {cocktails?.map((item) => {
          return <CocktailCard key={item.id} item={item} />;
        })}
      </div>
    </Wrapper>
  );
}

export default DisplayCocktails;
