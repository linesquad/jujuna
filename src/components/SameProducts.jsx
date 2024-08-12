import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect } from "react";

function SameProducts({ products, CardComponent }) {
  useEffect(() => {
    const prevArrow = document.querySelector(".swiper-button-prev");
    const nextArrow = document.querySelector(".swiper-button-next");

    if (prevArrow && nextArrow) {
      prevArrow.classList.add("text-gray-600", "text-2xl");
      nextArrow.classList.add("text-gray-600", "text-2xl");
    }
  }, []);

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
