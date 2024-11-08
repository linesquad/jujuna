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
import ReusableErrorRobot from "../../ui/ReusableErrorRobot";

function CocktailsComp() {
  const { data: cocktails, isError, error, isLoading } = useLatestCocktails();
  // console.log(cocktails);
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
              {cocktails?.map((item) => {
                return (
                  <SwiperSlide key={item._id}>
                    <div className="mb-20">
                      <OneCocktail
                        title={
                          i18n.language === "en"
                            ? item.titleTranslations.en
                            : item.titleTranslations.ge
                        }
                        image={item.url}
                        ingredients={
                          i18n.language === "en"
                            ? item.ingsTranslations.en
                            : item.ingsTranslations.ge
                        }
                        isSwiper={true}
                        id={item._id}
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
                  key={item._id}
                  title={
                    i18n.language === "en"
                      ? item.titleTranslations.en
                      : item.titleTranslations.ge
                  }
                  image={item.url}
                  ingredients={
                    i18n.language === "en"
                      ? item.ingsTranslations.en
                      : item.ingsTranslations.ge
                  }
                  size={index === 0 ? "big" : "small"}
                  position={index === 2 && "right"}
                  id={item._id}
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
