import { useGetCartItems } from "../../hooks/useGetCartItems";
import CartItemsCheckOut from "./CartItemsCheckOut";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BackAndTotal from "./BackAndTotal";

const OrderItems = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetCartItems();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const totalPrice = data.reduce(
    (total, item) => total + item.unit * item.price,
    0
  );

  const handleBackToPage = () => {
    navigate(-1);
  };

  return (
    <div
      className="h-full tiny:px-2 tiny:py-1 smaller:px-3 smaller:py-2 px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4
    lg:px-6 lg:py-5"
    >
      <div
        className="tiny:text-xs tiny:pl-2 smaller:text-[13px] smaller:pl-3 pl-3 text-sm sm:text-[15px] sm:pl-4 md:pl-5 md:text-base
      lg:pl-6 lg:text-[17px]"
      >
        <h1
          className="tiny:pb-1 tiny:font-medium smaller:font-medium smaller:pb-[6px]
        pb-2 font-semibold sm:pb-3 sm:font-bold md:pb-4 lg:pb-5"
        >
          Shopping cart
        </h1>
      </div>
      <hr />
      <p
        className="tiny:text-[9px] tiny:pt-2 tiny:pb-1 smaller:text-[10px] smaller:pt-[6px] smaller:pb-2
      text-[11px] pt-3 pb-2 sm:text-xs sm:pt-[14px] sm:pb-[10px] md:pt-4 md:pb-3 md:text-[13px]
      lg:pb-4 lg:text-sm lg:pt-5"
      >
        You have {data.length} item in your cart
      </p>

      <div className="tiny:block smaller:hidden hidden">
        <Swiper spaceBetween={10} slidesPerView={1} className="h-auto">
          {data?.map((item) => (
            <SwiperSlide key={item.productId}>
              <CartItemsCheckOut item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className="tiny:hidden smaller:block block smaller:overflow-y-scroll smaller:max-h-[200px] 
      max-h-[200px] overflow-y-scroll"
      >
        <div className="flex flex-col smaller:gap-1 gap-2 sm:gap-[10px] md:gap-3 lg:gap-4">
          {data?.map((item) => (
            <CartItemsCheckOut key={item.productId} item={item} />
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:pt-20">
        <BackAndTotal
          handleBackToPage={handleBackToPage}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default OrderItems;
