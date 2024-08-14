import SkeletonDiv from "./SkeletonDiv";
import rightArrow from "/images/rightArrow.svg";

function SkeletonForMobile() {
  return (
    <div>
      <div className={`flex items-center gap-[9px] pt-[26px] pl-[10px]`}>
        <SkeletonDiv style="w-[80px] h-[20px]" />
        <img src={rightArrow} alt="right-arrow" />
        <SkeletonDiv style="w-[80px] h-[20px]" />
        <img src={rightArrow} alt="right-arrow" />
        <SkeletonDiv style="w-[80px] h-[20px]" />
      </div>

      <SkeletonDiv style="w-full max-w-[300px] m-auto  flex flex-col pt-[10px] pr-[12px] pb-[50px] pl-[9px] mt-[30px]">
        <SkeletonDiv
          style="w-[30px] h-[30px] rounded-[50%] self-end"
          firstBg="#f8f9fa"
          secondBg="#ced4da"
        />
        <div className="py-[9px] px-[4px] flex gap-[22px] border-b-[1px] border-[#d9d9d9]">
          <SkeletonDiv
            style="w-[99px] h-[190px]"
            firstBg="#f8f9fa"
            secondBg="#ced4da"
          />
          <div className="flex flex-col justify-between">
            <SkeletonDiv
              style="w-[95px] h-[20px]"
              firstBg="#f8f9fa"
              secondBg="#ced4da"
            />
          </div>
        </div>
        <div className="flex justify-between mt-[10px] md:mt-[18px]">
          <SkeletonDiv
            style="w-[50px] h-[20px]"
            firstBg="#f8f9fa"
            secondBg="#ced4da"
          />
          <SkeletonDiv
            style="w-[50px] h-[24px] rounded-[33px]"
            firstBg="#f8f9fa"
            secondBg="#ced4da"
          />
        </div>
      </SkeletonDiv>
    </div>
  );
}

export default SkeletonForMobile;
