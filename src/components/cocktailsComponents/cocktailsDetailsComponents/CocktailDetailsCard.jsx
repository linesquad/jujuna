import Composition from "./Composition";
import SingleCocktailsCart from "./SingleCocktailsCart";

function CocktailDetailsCard({ item }) {
  console.log(item);

  return (
    <div className="flex flex-col">
      <div>
        <img
          src={item.image}
          alt="cocktail-image"
          className="w-[191px] h-[268px] mx-auto mt-[40px] rounded-md"
        />
      </div>

      <div>
        <Composition ingredients={item.ingredients} />
      </div>

      <div>
        <SingleCocktailsCart item={item} />
      </div>
    </div>
  );
}

export default CocktailDetailsCard;
