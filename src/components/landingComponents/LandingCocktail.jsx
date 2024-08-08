function OneCocktail({ title, image, ingredients, size }) {
  return (
    <div className={size === "big" ? "md:col-span-2" : "md:col-span-1"}>
      <div className="bg-[#000] pt-[30px] pr-[15px] md:p-[30px] md:rounded-md">
        <div className="flex items-start mt-[26px] gap-[15px] lg:mt-[0px]">
          <div>
            <img
              src={image}
              alt="cocktail"
              className={`w-[186px] h-[276px] xl:w-[301px] xl:h-[447px] `}
            />
          </div>

          <div className="md:m-auto">
            <h2 className="text-color-primary text-[32px] text-center font-tommaso font-normal lg:text-[40px]">
              {title}
            </h2>
            <div
              className={`grid grid-cols-[1fr_1fr] gap-x-[30px] md:gap-x-[40px] gap-y-[31px] mt-[15px] ${
                size === "small" ? "md:grid-cols-[1fr]" : ""
              }`}
            >
              {ingredients?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-[16px] text-[14px] text-color-primary border-b-[1px] border-[#848282] lg:text-[20px]"
                  >
                    <p className="text-color-primary">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCocktail;
