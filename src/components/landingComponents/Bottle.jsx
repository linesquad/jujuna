import { useSelector } from "react-redux";
import Wrapper from "../Wrapper";
import { getMode } from "../../features/darkModeSlice";
import { useWines } from "../../hooks/useWines";
import ReusableLoading from "./../../ui/ReusableLoading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import WineCard from "../wineComponents/wineCardComponents/WineCard";
import ReusableErrorRobot from "../../ui/ReusableErrorRobot";

function Bottle() {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);
  const { data: wines, isLoading, isError, error } = useWines();

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
    <div
      className={`${
        darkMode ? "bg-[#12151C] text-color-primary" : "bg-white"
      } pt-4`}
    >
      <Wrapper>
        <h1 className="text-center text-[40px] mb-[5px] md:text-[50px] lg:text-[64px]">
          {t("home.bottle.title")}
        </h1>

        <div className="mt-10">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1.5,
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
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}" style="width: 16px; height: 16px; background-color: #A583D1; border-radius: 50%;"></span>`,
            }}
            modules={[Pagination]}
          >
            {wines?.map((wine) => (
              <SwiperSlide key={wine._id}>
                <div className="flex">
                  <WineCard key={wine.id} wine={wine} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center">
          <Link
            to={"/wines"}
            className={`mt-8 border p-2 px-4 rounded-full ${
              darkMode ? "border-white" : "border-black"
            }`}
          >
            {t("home.bottle.fullCollectionBtn")}
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}

export default Bottle;
