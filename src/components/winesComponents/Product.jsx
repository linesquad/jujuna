function Product() {
  return (
    <>
      <div className="flex  flex-col justify-center mt-10">
        <div className="flex justify-center items-center flex-col border border-[#613994] w-[315px] p-5 rounded-md gap-2">
          <img src={"/images/winebottle.png"} alt="" className="w-[160px]" />
          <p className="text-[#613994] text-[14px] font-[700] leading-[17.36px]">
            Jujuna
          </p>
          <p className="text-[14px] font-[400] leading-[17.36px]">
            Mitsukos Vineyard Carneros
          </p>
          <p className="text-[15px] font-[700] leading-[18.6px]">$ 16.00</p>

          <div className="w-[270px] h-[68px] flex justify-center items-center gap-4">
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="w-[40.37px] h-[51.36px]"
            />
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="w-[40.37px] h-[51.36px]"
            />
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="w-[40.37px] h-[51.36px]"
            />
            <img
              src={"/images/winebottle.png"}
              alt=""
              className="w-[40.37px] h-[51.36px]"
            />
            <div className="flex justify-center items-center rounded-full h-[44px] w-[45px] border border-[#C8C5C5]">
              <img
                src={"/images/rightarrow.png"}
                alt=""
                className="w-[24px] h-[23px]"
              />
            </div>
          </div>
        </div>

        {/* Quanity/Add to cart  */}

        <div className="flex items-center flex-row gap-2 mt-5 pl-5">
          <button className="border w-[62px] h-[64px] border-[#613994]">
            1
          </button>
          <button className="border w-[197px] h-[64px] border-[#613994]">
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
