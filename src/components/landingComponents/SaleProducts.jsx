import { useEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDiscountProducts } from "../../hooks/useDiscountProducts";
import SingleProduct from "./SingleProduct";

function SaleProducts() {
  const swiperRef = useRef(null);
  const [isIntervalClear, setIsIntervalClear] = useState(false);
  const { data: discontProducts } = useDiscountProducts();

  useEffect(() => {
    if (isIntervalClear) return;

    const swiperInterval = setInterval(() => {
      if (swiperRef.current) {
        const totalSlides = swiperRef.current.slides?.length;
        const currentIndex = swiperRef.current.realIndex;
        console.log(totalSlides);
        console.log(currentIndex);

        if (currentIndex === totalSlides - 4) {
          swiperRef.current.slideTo(0);
        } else {
          swiperRef.current.slideNext();
        }
      }
    }, 2000);

    return () => clearInterval(swiperInterval);
  }, [isIntervalClear]);

  return (
    <div>
      <Wrapper>
        <div className="mt-[100px]">
          <div className="flex items-center justify-between pl-[50px] pb-[12px] border-b-[1px] border-[#D9D9D9]">
            <h2 className="text-[16px] md:text-[22px] lg:text-[32px] text-[#848282]">
              ფასდაკლებული პროდუქტები
            </h2>

            <div className="hidden lg:flex items-center gap-[4px]">
              <div
                className="w-[36px] h-[36px] border-[1px] border-[#BB8DF580] rounded-[50%] flex justify-center items-center cursor-pointer"
                onClick={() => swiperRef.current.slidePrev()}
                onMouseEnter={() => setIsIntervalClear(true)}
                onMouseLeave={() => setIsIntervalClear(false)}
              >
                <FaArrowLeft color="#DCC6FA" />
              </div>

              <div
                className="w-[36px] h-[36px] border-[1px] border-[#BB8DF580] rounded-[50%] flex justify-center items-center cursor-pointer"
                onClick={() => swiperRef.current.slideNext()}
                onMouseEnter={() => setIsIntervalClear(true)}
                onMouseLeave={() => setIsIntervalClear(false)}
              >
                <FaArrowRight color="#DCC6FA" />
              </div>
            </div>
          </div>
          <div
            className="mt-[32px] flex"
            onMouseEnter={() => setIsIntervalClear(true)}
            onMouseLeave={() => setIsIntervalClear(false)}
          >
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={1000}
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
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              {discontProducts?.map((item) => {
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

export default SaleProducts;
