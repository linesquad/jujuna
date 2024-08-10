import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import useCocktails from "../../../hooks/useCocktails";
import CocktailCard from "../CocktailCard";
import Wrapper from "../../Wrapper";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

function SameCocktails() {
  const { data: cocktails } = useCocktails();
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div>
        <h2 className="text-[22px] pl-[19px] pt-[40px]">
          {t("cocktails.cocktailDetails.similarProducts")}
        </h2>
        <div className="pt-[43px]">
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
              "--swiper-navigation-color": "#616161",
              "--swiper-pagination-color": "#616161",
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {cocktails?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CocktailCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
}

export default SameCocktails;
