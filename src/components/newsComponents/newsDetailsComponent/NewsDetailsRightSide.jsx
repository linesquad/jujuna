import OneNews from "../../landingComponents/LandingBlog";
import { SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import useBlogs from "../../../hooks/useBlogs";
import SkeletonDiv from "../../SkeletonDiv";
import { useRef } from "react";
import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useParams } from "react-router-dom";

const NewsDetailsRightSide = () => {
  const darkMode = useSelector(getMode);
  const { data: blogNews, isLoading, error } = useBlogs();
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { id } = useParams();
  console.log(id);

  if (isLoading || !blogNews || blogNews.length === 0) {
    return (
      <div className="">
        {/* Skeleton for small screens */}
        <div className="block lg:hidden">
          <SkeletonDiv style="w-full h-[650px] mb-4">
            <div className="h-[300px] mb-4"></div>
            <div className="h-[50px] mb-2"></div>
            <div className="h-[20px] w-3/4"></div>
          </SkeletonDiv>
        </div>

        {/* Skeleton for larger screens */}
        <div className="hidden lg:flex flex-col gap-4">
          {[...Array(3)].map((_, index) => (
            <SkeletonDiv key={index} style="h-[300px] mb-4">
              <div className="h-[150px] mb-4"></div>
              <div className="h-[50px] mb-2"></div>
              <div className="h-[20px] w-3/4"></div>
            </SkeletonDiv>
          ))}
        </div>
      </div>
    );
  }

  if (error)
    return (
      <p className="text-center bg-purple-700 p-2 h-32 text-purple-200 font-bold">
        {error.message}
      </p>
    );

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        className="w-full h-[650px] lg:h-[1600px]"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            direction: "horizontal",
            Navigation: false,
            mousewheel: false,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
            direction: "horizontal",
            Navigation: false,
            mousewheel: false,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            direction: "vertical",
            Mousewheel: true,
            pagination: false,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        freeMode={true}
        mousewheel={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" style="width: 16px; height: 16px; background-color: #A583D1; border-radius: 50%;"></span>`,
        }}
        modules={[FreeMode, Pagination, Mousewheel, Navigation]}
      >
        {blogNews
          .filter((item) => String(item.id) !== String(id)) // Convert both IDs to strings
          .map((item, index) => (
            <SwiperSlide key={item.id}>
              <OneNews
                id={item.id}
                image={item.image}
                description={item.description}
                title={item.title}
                bgColor={`${index % 2 === 0 ? "bg-gray-500" : "bg-black"}`}
                type={"primary"}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <div
        ref={prevRef}
        className="hidden lg:block absolute -top-16 left-[150px]"
      >
        <div className="swiper-button-prev opacity-0"></div>
        <RiArrowUpWideLine
          className={`w-14 h-14 cursor-pointer ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
      </div>

      <div
        ref={nextRef}
        className="hidden lg:block absolute top-[1620px] left-[160px]"
      >
        <div className="swiper-button-next opacity-0"></div>
        <RiArrowDownWideLine
          className={`w-14 h-14 cursor-pointer ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={() => swiperRef.current.swiper.slideNext()}
        />
      </div>
    </div>
  );
};

export default NewsDetailsRightSide;
