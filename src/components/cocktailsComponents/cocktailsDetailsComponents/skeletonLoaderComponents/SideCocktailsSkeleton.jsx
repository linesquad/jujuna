import SkeletonDiv from "./SkeletonDiv";

function SideCocktailsSkeleton() {
  return (
    <div className="flex flex-col gap-[5px] lg:gap-[20px]">
      <div className={`md:p-[5px] lg:p-[10px] `}>
        <SkeletonDiv style="w-[60px] h-[90px]" />
      </div>
      <div className={`md:p-[5px] lg:p-[10px] `}>
        <SkeletonDiv style="w-[60px] h-[90px]" />
      </div>
      <div className={`md:p-[5px] lg:p-[10px] `}>
        <SkeletonDiv style="w-[60px] h-[90px]" />
      </div>
      <div className={`md:p-[5px] lg:p-[10px] `}>
        <SkeletonDiv style="w-[60px] h-[90px]" />
      </div>
    </div>
  );
}

export default SideCocktailsSkeleton;
