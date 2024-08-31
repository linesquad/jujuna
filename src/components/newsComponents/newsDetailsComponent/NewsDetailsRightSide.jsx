import OneNews from "../../landingComponents/LandingBlog";
import { SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import useBlogs from "../../../hooks/useBlogs";
// import { useParams } from "react-router-dom";
import SkeletonDiv from "../../SkeletonDiv";

const NewsDetailsRightSide = () => {
  const { data: blogNews, isLoading, error } = useBlogs();
  // const { id } = useParams();

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
    <div className="">
      <Swiper
        className="w-full h-[650px] lg:h-[1600px]"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            direction: "horizontal",
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
            direction: "horizontal",
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
            direction: "vertical",
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}" style="width: 16px; height: 16px; background-color: #A583D1; border-radius: 50%;"></span>`,
        }}
        modules={[FreeMode, Pagination]}
      >
        {blogNews.map((item, index) => (
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
    </div>
  );
};

export default NewsDetailsRightSide;
