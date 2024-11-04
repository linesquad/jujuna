import SkeletonDiv from "../../SkeletonDiv";
import Wrapper from "../../Wrapper";

function SkeletonWineCard() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-28 lg:w-full lg:max-w-6xl mx-auto lg:mt-28">
      <SkeletonDiv style="w-[300px] h-[400px]" />

      <div className="flex flex-col items-center lg:items-start max-w-full lg:max-w-[600px]">
        <div className="text-center flex mt-6 lg:text-left">
          <Wrapper>
            <SkeletonDiv style="w-[200px] h-[30px]" />
            <SkeletonDiv style="w-[200px] h-[30px] mt-2" />
            <div className="flex gap-4 font-medium justify-center items-center mt-1 lg:justify-start lg:mt-5 lg:mb-5 text-center">
              <SkeletonDiv style="w-[80px] h-[40px]" />
              <SkeletonDiv style="w-[80px] h-[40px]" />
              <SkeletonDiv style="w-[80px] h-[40px]" />
            </div>

            <SkeletonDiv style="w-[400px] h-[100px]" />
            <SkeletonDiv style="w-[400px] h-[40px] mt-2" />
            <SkeletonDiv style="w-[400px] h-[40px] mt-2" />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
export default SkeletonWineCard;
