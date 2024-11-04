const CartItemsCheckOut = ({ item }) => {
  return (
    // <div className="">
    //   <div className="py-3 px-1 w-full flex items-center border rounded-md shadow-lg">
    //     <div className="flex-shrink-0">
    //       <img src={item.image} alt={item.title} className="max-h-[100px]" />
    //     </div>
    //     <div className="flex-1 ml-4 flex gap-3 flex-col">
    //       <h1 className="text-sm font-semibold text-[#613994]">
    //         {item.title.length > 24
    //           ? item.title.slice(0, 24) + "..."
    //           : item.title}
    //       </h1>
    //       <h2 className="text-xs ">Mitsuko’s Vineyard Carneros</h2>
    //     </div>
    //     <div className="flex-shrink-0 text-lg w-16 text-center">
    //       {item.unit}
    //     </div>
    //     <div className="flex-shrink-0 text-lg w-24 text-center">
    //       {`$${(item.unit * item.price).toFixed(2)}`}
    //     </div>
    //   </div>
    // </div>
    <div className="">
      <div className="flex w-full items-center border rounded-md">
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="tiny:max-h-[50px] smaller:max-h-[60px] max-h-[70px] sm:max-h-[80px] md:max-h-[90px] lg:max-h-[100px]"
          />
        </div>
        <div className="flex-1">
          <h1 className="tiny:text-[9px] smaller:text-[10px] text-[11px] sm:text-xs md:text-[13px] lg:text-sm text-[#613994]">
            {item.title.length > 24
              ? item.title.slice(0, 24) + "..."
              : item.title}
          </h1>
          <h2 className="tiny:text-[9px] smaller:text-[10px] text-[11px] sm:text-xs md:text-[13px] lg:text-sm">
            Mitsuko’s Vineyard Carneros
          </h2>
        </div>

        <div
          className="tiny:flex tiny:flex-col-reverse tiny:justify-center tiny:items-center tiny:pr-1
        smaller:flex-col-reverse smaller:flex smaller:justify-center smaller:items-center smaller:pr-[6px]
        flex flex-col-reverse justify-center items-center pr-2
        sm:flex sm:flex-row sm:gap-20 sm:pr-10 md:gap-22 md:pr-12 lg:gap-16"
        >
          <div className="tiny:text-base  smaller:text-[17px] text-lg sm:text-[19px] md:text-xl lg:text-[21px]">
            {item.unit}
          </div>

          <div className="flex-shrink-0 tiny:text-[10px] text-center smaller:text-[11px] text-xs sm:text-[13px] md:text-sm lg:text-[15px]">
            {`₾${(item.unit * item.price).toFixed(2)}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsCheckOut;
