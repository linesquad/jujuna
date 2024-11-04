import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import Wrapper from "../Wrapper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import usePopularProducts from "../../hooks/usePopularProducts";
import SingleProduct from "./SingleProduct";
import { Autoplay } from "swiper/modules";
import ReusableLoading from "../../ui/ReusableLoading";
import ReusableErrorRobot from "../../ui/ReusableErrorRobot";

export default function PopularProducts() {
  const swiperRef = useRef(null);

  const {
    data: popularProducts,
    isLoading,
    isError,
    error,
  } = usePopularProducts();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ReusableLoading width="150px" height="150px" />;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center gap-1">
        <ReusableErrorRobot width="150px" height="150px" />
        <span className="text-red-600 font-semibold text-lg tiny:text-sm smaller:text-base">
          {error.message}
        </span>
      </div>
    );
  }

  return (
    <div>
      <Wrapper>
        <div className="mt-[100px]">
          <div className="flex items-center justify-between pl-[50px] pb-[12px] border-b-[1px] border-[#D9D9D9]">
            <h2 className="text-[16px] md:text-[22px] lg:text-[32px] text-[#848282]">
              პოპულარული პროდუქტები
            </h2>

            <div className="hidden lg:flex items-center gap-[4px]">
              <div
                className="w-[36px] h-[36px] border-[1px] border-[#BB8DF580] rounded-[50%] flex justify-center items-center cursor-pointer"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <FaArrowLeft color="#DCC6FA" />
              </div>

              <div
                className="w-[36px] h-[36px] border-[1px] border-[#BB8DF580] rounded-[50%] flex justify-center items-center cursor-pointer"
                onClick={() => swiperRef.current.slideNext()}
              >
                <FaArrowRight color="#DCC6FA" />
              </div>
            </div>
          </div>
          <div className="mt-[32px] flex">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={1000}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                350: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {popularProducts?.map((item) => {
                return (
                  <SwiperSlide key={item._id}>
                    <SingleProduct item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
