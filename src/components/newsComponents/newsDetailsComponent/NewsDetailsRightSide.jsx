import OneNews from "../../landingComponents/LandingBlog";
import { SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import useBlogs from "../../../hooks/useBlogs";
import { useParams } from "react-router-dom";
import SkeletonDiv from "../../SkeletonDiv";

const NewsDetailsRightSide = () => {
  const { data: blogNews, isLoading, error } = useBlogs();
  const { id } = useParams();

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

  const currentId = parseInt(id);

  let displayedNews = [];
  for (let i = currentId; i < blogNews.length; i++) {
    if (blogNews[i].id !== currentId) {
      displayedNews.push(blogNews[i]);
    }

    if (displayedNews.length === 3) {
      break;
    }
  }

  if (displayedNews.length < 3) {
    for (let i = 0; i < blogNews.length && displayedNews.length < 3; i++) {
      if (!displayedNews.includes(blogNews[i])) {
        displayedNews.push(blogNews[i]);
      }
    }
  }

  return (
    <div className="">
      {/* Swiper for small screens */}
      <div className="block lg:hidden">
        <Swiper
          className="w-full h-[650px]"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}" style="width: 16px; height: 16px; background-color: #A583D1; border-radius: 50%;"></span>`, // Customize pagination bullets
          }}
          modules={[FreeMode, Pagination]}
        >
          {displayedNews.map((item, index) => (
            <SwiperSlide key={item.id}>
              <OneNews
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

      {/* Column layout for larger screens */}
      <div className="hidden lg:flex flex-col gap-4">
        {displayedNews.map((item, index) => (
          <OneNews
            id={item.id}
            key={item.id}
            image={item.image}
            description={item.description}
            title={item.title}
            bgColor={`${index % 2 === 0 ? "bg-gray-500" : "bg-black"}`}
            type={"primary"}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsDetailsRightSide;
