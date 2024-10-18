import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import OneCocktail from "./LandingCocktail";
import { useLatestCocktails } from "../../hooks/useLatestItems";
import Wrapper from "../Wrapper";
import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import ReusableLoading from "../../ui/ReusableLoading";

function CocktailsComp() {
  const { data: cocktails, isError, error, isLoading } = useLatestCocktails();
  const { i18n } = useTranslation();
  const darkMode = useSelector(getMode);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <ReusableLoading width="150px" height="150px" />;
      </div>
    );
  }

  if (isError) return <p>Error loading cocktail products: {error.message}</p>;

  return (
    <div className={`pt-20 ${darkMode ? "bg-[#12151C]" : "bg-white"} md:py-20`}>
      <Wrapper>
        <div>
          <h2
            className={`${
              darkMode ? "text-color-primary" : "text-black"
            } text-center text-[40px] mb-8 font-tommaso md:text-[50px] lg:text-[64px]`}
          >
            {i18n.language === "en" ? "Cocktails" : "კოქტეილი"}
          </h2>
          <div className="md:hidden">
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className}" style="width: 16px; height: 16px; background-color: #A583D1; border-radius: 50%;"></span>`, // Customize pagination bullets
              }}
              modules={[Pagination]}
            >
              {cocktails?.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="mb-20">
                      <OneCocktail
                        title={
                          i18n.language === "en" ? item.name.en : item.name.ge
                        }
                        image={item.image}
                        ingredients={
                          i18n.language === "en"
                            ? item.ingredients.en
                            : item.ingredients.ge
                        }
                        size={index === 0 ? "big" : "small"}
                        isSwiper={true}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="hidden md:grid grid-cols-[1fr] md:gap-[22px] md:grid-cols-[1fr_1fr]">
            {cocktails?.map((item, index) => {
              return (
                <OneCocktail
                  key={item.id}
                  title={i18n.language === "en" ? item.name.en : item.name.ge}
                  image={item.image}
                  ingredients={
                    i18n.language === "en"
                      ? item.ingredients.en
                      : item.ingredients.ge
                  }
                  size={index === 0 ? "big" : "small"}
                  position={index === 2 && "right"}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default CocktailsComp;
