import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Wrapper from "../Wrapper";
import { useLatestBlogs } from "../../hooks/useLatestItems";
import OneNews from "./LandingBlog";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

const News = () => {
  const { data: blogNews, isLoading, error } = useLatestBlogs();
  const { i18n } = useTranslation();
  const darkMode = useSelector(getMode);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs: {error.message}</p>;
  if (!blogNews || blogNews.length === 0) return <p>No blog news available.</p>;

  return (
    <Wrapper>
      <h2
        className={`${
          darkMode ? "text-white" : "text-color-black"
        } text-[40px] ml-[27px] mb-[5px] font-tommaso md:ml-[0px] md:text-[50px] lg:text-[64px]`}
      >
        {i18n.language === "en" ? "News" : "სიახლეები"}
      </h2>
      <Swiper
        className="w-full h-[580px]"
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
            <OneNews
              image={item.image}
              description={item.description}
              title={item.title}
              id={item.id}
              bgColor={`${index % 2 === 0 ? "bg-gray-500" : "bg-black"}`}
              type={"primary"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default News;
