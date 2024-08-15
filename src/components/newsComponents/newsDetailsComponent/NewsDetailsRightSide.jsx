import { useLatestBlogs } from "../../../hooks/useLatestItems";
import OneNews from "../../landingComponents/LandingBlog";
import { SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import Spinner from "../../Spinner";

const NewsDetailsRightSide = () => {
  const { data: blogNews, isLoading, error } = useLatestBlogs();

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <p className="text-center bg-purple-700 p-2 h-32 text-purple-200 font-bold">
        {error.message}
      </p>
    );
  if (!blogNews || blogNews.length === 0) return <p>No blog news available.</p>;

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
          {blogNews.map((item, index) => (
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
        {blogNews.map((item, index) => (
          <OneNews
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
