import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Wrapper from "../Wrapper";
import OneNews from "./LandingBlog";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useLatestBlogs } from "../../hooks/useLastestBlogs";
import ReusableLoading from "../../ui/ReusableLoading";
import ReusableErrorRobot from "../../ui/ReusableErrorRobot";

const News = () => {
  const { data: blogNews, isLoading, error, isError } = useLatestBlogs();
  const { i18n } = useTranslation();
  const darkMode = useSelector(getMode);

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
          <SwiperSlide key={item._id}>
            <OneNews
              image={item.image}
              description={item.text}
              title={item.title}
              id={item._id}
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
