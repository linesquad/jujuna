import { useEffect, useRef, useState } from "react";
import WineCard from "../wineComponents/WineCard";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Wrapper from "../Wrapper";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

export default function PopularProducts() {
  const [products, setProducts] = useState([]);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const getPopularWines = async () => {
      try {
        const response = await fetch(
          "http://localhost:8001/popular-products?page=1&isWine=true"
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    getPopularWines();
  }, []);
  console.log(products);

  return (
    <div className="mt-20 relative">
      <Wrapper>
        <h2 className="text-[#848282] text-[24px]">გაყიდვადი პროდუქტები</h2>
        <hr className="border border-[#D9D9D9] mt-2" />
        <div className="mt-10 ">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              650: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={10}
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
            modules={[Navigation]}
          >
            {products?.map((product) => (
              <SwiperSlide key={product._id}>
                {/* <div className="flex"> */}
                <WineCard key={product._id} wine={product} />
                {/* </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={prevRef} className=" absolute top-0 right-[185px]">
            <div className="swiper-button-prev opacity-0"></div>
            <div className="text-[#DCC6FA] border-2 rounded-xl border-[#DCC6FA] p-1">
              <BiSolidLeftArrow
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
            </div>
          </div>

          <div ref={nextRef} className=" absolute top-0 right-[150px]">
            <div className="swiper-button-next opacity-0"></div>
            <div className="text-[#DCC6FA] border-2 rounded-xl border-[#DCC6FA] p-1">
              <BiSolidRightArrow
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
