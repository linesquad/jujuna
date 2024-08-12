import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";

function SameProducts({ products, CardComponent }) {
  const darkMode = useSelector(getMode);
  useEffect(() => {
    const prevArrow = document.querySelector(".swiper-button-prev");
    const nextArrow = document.querySelector(".swiper-button-next");

    if (prevArrow && nextArrow) {
      prevArrow.classList.add(
        `${darkMode ? "text-[#eaeaea]" : "text-[#999797]"}`,
        "text-2xl"
      );
      nextArrow.classList.add(
        `${darkMode ? "text-[#eaeaea]" : "text-[#999797]"}`,
        "text-2xl"
      );
    }
  }, [darkMode]);

  return (
    <Swiper
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
      style={{
        "--swiper-pagination-color": "#616161",
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {products?.map((item) => (
        <SwiperSlide key={item.id} className="w-[90%]">
          <CardComponent item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SameProducts;
