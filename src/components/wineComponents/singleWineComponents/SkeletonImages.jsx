import SkeletonDiv from "../../SkeletonDiv";

function SkeletonImages() {
  return (
    <div className="tiny:max-w-[200px] tiny:m-auto tiny:mt-10 mt-20 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-40 lg:-mt-20">
      <div>
        <SkeletonDiv style="w-[300px] h-[325px] lg:w-[429px] lg:h-[605px]" />
      </div>
      <div>
        <SkeletonDiv style="w-[300px] h-[325px] lg:w-[429px] lg:h-[605px] m-auto mt-16 mb-4 lg:mt-96" />
      </div>
    </div>
  );
}
export default SkeletonImages;
