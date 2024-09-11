import { useRef } from "react";
import Wrapper from "../Wrapper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SingleSaleProduct from "./SingleSaleProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SaleProducts() {
  const swiperRef = useRef(null);

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
              breakpoints={{
                320: {
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
              <SwiperSlide>
                <SingleSaleProduct />
              </SwiperSlide>
              <SwiperSlide>
                <SingleSaleProduct />
              </SwiperSlide>
              <SwiperSlide>
                <SingleSaleProduct />
              </SwiperSlide>
              <SwiperSlide>
                <SingleSaleProduct />
              </SwiperSlide>
              <SwiperSlide>
                <SingleSaleProduct />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default SaleProducts;
