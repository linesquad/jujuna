import SkeletonDiv from "../../SkeletonDiv";
import NewsDetailComent from "./NewsDetailComent";

const NewsDetailsLeftSkeleton = () => {
  return (
    <div className="lg:col-span-2">
      <SkeletonDiv style="h-[40px] w-full mb-2" />
      <SkeletonDiv style="h-[30px] w-[60%] mb-2" />
      <SkeletonDiv style="h-[25px] w-[40%] mb-2" />
      <SkeletonDiv style="h-[500px] w-full mb-6" />

      <NewsDetailComent />
    </div>
  );
};

export default NewsDetailsLeftSkeleton;
