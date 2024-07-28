import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import useBlogs from "../hooks/useBlogs";
import LoadingSpinner from "../components/LoadingSpinner";
import { useMediaQuery } from "@custom-react-hooks/all";
import OneNews from "../components/landingComponents/OneNews";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNames = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
  ];
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]}, ${year}`;
}

function News() {
  const { isLoading, data, isError, error } = useBlogs();
  console.log(data);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1100px)");

  return (
    <div
      id="სიახლეები"
      className="p-5 xl:p-10 xl:px-20 w-[100%] overflow-hidden"
    >
      <h2 className="dark:text-white xl:text-[64px] font-tommaso text-[48px]">
        სიახლეები
      </h2>
      <div>
        {isLoading && <LoadingSpinner />}
        {data && data.length > 0 && (
          <Swiper
            style={{ "--swiper-pagination-bullet-inactive-color": "#ffffff" }}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
            spaceBetween={30}
            centeredSlides={isMobile}
            loop={true}
            pagination={isMobile ? { clickable: true } : false}
            navigation={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect={isMobile ? "fade" : "slide"}
            speed={2000}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            className={isMobile ? "swiper-mobile" : ""}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <OneNews
                    date={formatDate(item.created_at)}
                    image={item.image}
                    title={item.title}
                    description={item.description.slice(0, 99)}
                    type={`${index % 2 !== 1 ? "secondary" : "primary"}`}
                    bgColor={`${index % 2 !== 1 ? "bg-[#613994]" : "bg-black"}`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default News;
