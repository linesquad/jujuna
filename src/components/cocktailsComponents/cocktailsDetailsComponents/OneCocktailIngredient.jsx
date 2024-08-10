import { useState } from "react";

function OneCocktailIngredient({ item }) {
  const [ingredientQuantity, setIngredientQuantity] = useState(0);

  return (
    <div className="flex items-center gap-[20px]">
      <p>{item}</p>
      <div className="flex items-center gap-[10px]">
        <div
          className="w-[20px] h-[20px] rounded-[50%] bg-[#fff] flex justify-center items-center pb-[2px] cursor-pointer"
          onClick={() => setIngredientQuantity((quantity) => (quantity += 1))}
        >
          <span>+</span>
        </div>
        {ingredientQuantity > 0 && <p>{ingredientQuantity}</p>}
        <div
          className="w-[20px] h-[20px] rounded-[50%] bg-[#fff] flex justify-center items-center pb-[2px] cursor-pointer"
          onClick={() =>
            ingredientQuantity > 0 &&
            setIngredientQuantity((quantity) => (quantity -= 1))
          }
        >
          <span>-</span>
        </div>
      </div>
    </div>
  );
}

export default OneCocktailIngredient;
