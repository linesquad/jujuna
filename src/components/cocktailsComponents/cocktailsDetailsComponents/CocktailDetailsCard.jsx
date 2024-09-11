import Wrapper from "../../Wrapper";
import Composition from "./Composition";
import SingleCocktailsCart from "./SingleCocktailsCart";

function CocktailDetailsCard({ item }) {
  console.log(item);

  return (
    <div>
      <Wrapper>
        <div className="flex flex-col md:flex-row md:gap-[40px] lg:gap-[80px] md:justify-center md:items-start">
          <div>
            <img
              src={item.url}
              alt="cocktail-image"
              className="w-[191px] h-[268px] mx-auto mt-[40px] rounded-md lg:w-[300px] lg:h-[400px]"
            />
          </div>

          <div className="mt-[30px]">
            <Composition ingredients={item.ingsTranslations} />
          </div>

          <div>
            <SingleCocktailsCart item={item} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default CocktailDetailsCard;
