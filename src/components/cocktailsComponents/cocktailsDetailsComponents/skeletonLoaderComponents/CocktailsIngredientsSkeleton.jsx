import SkeletonDiv from "./SkeletonDiv";

function CocktailsIngredientsSkeleton() {
  return (
    <>
      <SkeletonDiv style=" w-[300px] lg:w-[500px] px-[20px] lg:px-[60px] py-[30px] lg:py-[90px] h-[450px] lg:h-[500px]">
        <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr] gap-y-[30px] lg:gap-y-[60px] gap-x-[50px] rounded-[15px]">
          <SkeletonDiv
            style="w-[130px] h-[28px]"
            firstBg="#f8f9fa"
            secondBg="#ced4da"
          />
          <SkeletonDiv
            style="w-[130px] h-[28px]"
            firstBg="#f8f9fa"
            secondBg="#ced4da"
          />
          <SkeletonDiv
            style="w-[130px] h-[28px]"
            firstBg="#f8f9fa"
            secondBg="#ced4da"
          />
        </div>
        <div className="mt-[80px] flex flex-col gap-[10px] md:gap-[20px]">
          <SkeletonDiv
            style="w-full h-[28px] lg:h-[49px]"
            firstBg="#f8f9fa"
            secondBg="#ced4da"
          />
          <SkeletonDiv
            style="w-full h-[28px] lg:h-[49px]"
            firstBg="#f8f9fa"
            secondBg="#ced4da"
          />
        </div>
      </SkeletonDiv>
    </>
  );
}

export default CocktailsIngredientsSkeleton;
