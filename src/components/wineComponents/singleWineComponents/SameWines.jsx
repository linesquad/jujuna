import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function SameWines({ products, CardComponent }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const darkMode = useSelector(getMode);

  return (
    <div className="relative mt-28 lg:mt-40 lg:w-[85%] mx-auto">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            // spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            // spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
        }}
        style={{
          "--swiper-pagination-color": "#616161",
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        // className="swiper-container"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {products?.map((item) => (
          <SwiperSlide key={item.id} className="w-[90%]">
            <CardComponent item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 -translate-y-full flex gap-16 lg:gap-8 z-10">
        <div
          ref={prevRef}
          className=" text-white w-8 h-8 flex items-center justify-center text-xl cursor-pointer"
        >
          <div className="swiper-button-prev opacity-0"></div>
          <div
            className={`p-4 ${
              darkMode
                ? "bg-none lg:bg-wineCardColor-arrowBg lg:shadow-[5px_8px_10px_rgba(0,0,0,0.25)]"
                : "bg-wineCardColor-light"
            }`}
          >
            <SlArrowLeft className={`text-black w-[36] h-[36] `} />
          </div>
        </div>

        <div
          ref={nextRef}
          className=" text-white opacity-90 w-8 h-8 flex items-center justify-center text-xl cursor-pointer"
        >
          <div className="swiper-button-next opacity-0"></div>
          <div
            className={`p-4 ${
              darkMode
                ? "bg-none lg:bg-wineCardColor-arrowBg lg:shadow-[5px_8px_10px_rgba(0,0,0,0.25)]"
                : "bg-wineCardColor-light"
            }`}
          >
            <SlArrowRight className="text-black w-[36] h-[36]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SameWines;
