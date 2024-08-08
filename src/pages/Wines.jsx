import Product from "../components/winesComponents/product";

const Wines = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center size-full bg-gradient-to-b from-[#8A63A2] via-[#AE85CC] to-[#B99CCB]">
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
          <a
            href="/wines"
            className="size-20px font-[400] leading-[24.8px] text-white"
          >
            All Wines
          </a>
          <a
            href="/wines"
            className="size-20px font-[400] leading-[24.8px] text-white"
          >
            Red Wine
          </a>
          <a
            href="/wines"
            className="size-20px font-[400] leading-[24.8px] text-white"
          >
            White and Rose Wine
          </a>
          <a
            href="/wines"
            className="size-20px font-[400] leading-[24.8px] text-white"
          >
            Gifts
          </a>
        </div>
      </div>

      {/* Products  */}
      <div className="bg-gradient-to-b bg-[#EAEAEA] p-20">
        <div className="flex items-center justify-between size-full">
          <p className="text-[32px] font-[400] leading-[39.68px] text-[#8A63A2]">
            Our Product
          </p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#908F8F] text-[24px] font-[400] leading-[29.76px]">
              Filter
            </p>
            <select
              name=""
              id=""
              className="w-[140px] h-[30px] border border-color-black  rounded-sm p-1"
            >
              <option value="">Price</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between flex-row items-center gap-10">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};

export default Wines;
