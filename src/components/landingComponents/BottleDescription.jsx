/* eslint-disable react/prop-types */
function BottleDescription({ title, measure }) {
  return (
    <div className="w-[160px] h-[68px] bg-[#613994] rounded-[10px] flex flex-col justify-center items-center gap-[6px] border-[4px] border-[#613994] text-color-primary text-[14px] lg:w-[204px] lg:h-[84px] lg:text-[20px] lg:gap-[10px]">
      <p>{title}</p>
      <p>{measure}</p>
    </div>
  );
}

export default BottleDescription;
