const Wines = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center size-full bg-gradient-to-b from-[#A583D1] via-[#724AA4] to-[#1E122E]">
          {/* Header  */}
          <div className="flex justify-center items-center h-[499.84px] w-[573.83px] relative">
            <img
              src={"/images/splash.png"}
              alt=""
              className="w-[765px] h-[920.77] -rotate-[66deg]"
            />
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="absolute w-[300.22px] left-[170px] top-[100px]"
            />
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="absolute w-[300.22px] left-[50px]"
            />
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="absolute w-[300.22px] left-[280px]"
            />
          </div>
        </div>
        {/* Navigation  */}
        <div className="flex justify-center items-center p-8 gap-[100px] size-full bg-[#8A63A2]">
          <p className="size-20px font-[400] leading-[24.8px] text-white">
            All Wines
          </p>
          <p className="size-20px font-[400] leading-[24.8px] text-white">
            Red Wine
          </p>
          <p className="size-20px font-[400] leading-[24.8px] text-white">
            White and Rose Wine
          </p>
          <p className="size-20px font-[400] leading-[24.8px] text-white">
            Gifts
          </p>
        </div>
      </div>

      {/* Products  */}

      <div className="flex flex-col bg-gradient-to-b from-[#A583D1] via-[#724AA4] to-[#1E122E] p-20">
        <div className="flex items-center justify-between size-full">
          <p>Our Product</p>
          <div>
            Filter{" "}
            <select
              name=""
              id=""
              className="w-[140px] h-[30px] border border-color-black  rounded-sm p-1"
            >
              <option value="">Price</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center p-10 m-5">
          <div>
            <img src={"/images/winebottle.png"} alt="" className="w-[160px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wines;
