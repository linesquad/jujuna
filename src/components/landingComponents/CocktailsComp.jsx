import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import OneCocktail from "./LandingCocktail";
import { useLatestCocktails } from "../../hooks/useLatestItems";
import Wrapper from "../Wrapper";

function CocktailsComp() {
  const { data: cocktails } = useLatestCocktails();
  return (
    <div className="bg-[#eaeaea] md:py-[30px]">
      <Wrapper>
        <div>
          <h2 className="text-color-black text-[40px] ml-[27px] mb-[5px] font-tommaso md:ml-[0px] md:text-[50px] lg:text-[64px]">
            კოქტეილი
          </h2>
          <div className="md:hidden">
            <Swiper slidesPerView={1}>
              {cocktails?.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div>
                      <OneCocktail
                        title={item.name}
                        image={item.image}
                        ingredients={item.ingredients}
                        size={index === 0 ? "big" : "small"}
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
                  title={item.name}
                  image={item.image}
                  ingredients={item.ingredients}
                  size={index === 0 ? "big" : "small"}
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
