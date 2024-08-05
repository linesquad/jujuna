import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Wrapper from "../Wrapper";
import { useLatestBlogs } from "../../hooks/useLatestItems";
import OneNews from "./LandingBlog";

const News = () => {
  const { data: blogNews, isLoading, error } = useLatestBlogs();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs: {error.message}</p>;
  if (!blogNews || blogNews.length === 0) return <p>No blog news available.</p>;
  console.log(blogNews);

  return (
    <Wrapper>
      <h2 className="text-white text-[40px] ml-[27px] mb-[5px] font-tommaso md:ml-[0px] md:text-[50px] lg:text-[64px]">
        სიახლეები
      </h2>
      <Swiper
        className="w-full h-[1000px]"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
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
        {blogNews.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full">
              <OneNews
                image={item.image}
                description={item.description}
                title={item.title}
                bgColor={`${index % 2 === 0 ? "bg-#724AA4" : "bg-black"}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default News;
