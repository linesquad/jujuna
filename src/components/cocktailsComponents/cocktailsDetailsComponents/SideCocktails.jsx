function SideCocktails({ cocktail }) {
  return (
    <div className="flex flex-col gap-[20px] lg:gap-[40px]">
      <img
        src={cocktail?.image}
        alt="cocktail"
        className="w-[60px] h-[90px] rounded-md cursor-pointer"
      />
      <img
        src={cocktail?.image}
        alt="cocktail"
        className="w-[60px] h-[90px] rounded-md cursor-pointer"
      />
      <img
        src={cocktail?.image}
        alt="cocktail"
        className="w-[60px] h-[90px] rounded-md cursor-pointer"
      />
      <img
        src={cocktail?.image}
        alt="cocktail"
        className="w-[60px] h-[90px] rounded-md cursor-pointer"
      />
    </div>
  );
}

export default SideCocktails;
