import { useSelector } from "react-redux";
import Wrapper from "../Wrapper";
import LandingWineCard from "./LandingWineCard";
import { getMode } from "../../features/darkModeSlice";
import useWines from "../../hooks/useWines";
import Spinner from "../Spinner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";

// import bottle from "/images/bottle1.png";
// import { useTranslation } from "react-i18next";

function Bottle() {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);
  const { data: wines, isLoading, isError, error } = useWines();
  console.log(wines);

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <h2 className="md:text-[22px] lg:text-[26px] text-center text-red-700">
        {error.message}
      </h2>
    );

  return (
    <div
      className={`${
        darkMode ? "bg-[#12151C] text-color-primary" : "bg-white"
      } pt-20`}
    >
      <Wrapper>
        <h1 className="text-center text-[40px] mb-[5px] font-tommaso md:text-[50px] lg:text-[64px]">
          {t("home.bottle.title")}
        </h1>

        <div className="mt-10">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
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
            {wines.map((wine) => (
              <SwiperSlide key={wine.id}>
                <div className="flex justify-center">
                  <LandingWineCard key={wine.id} wine={wine} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center">
          <Link
            to={"/wines"}
            className="mt-8 border border-white p-2 px-4 rounded-full"
          >
            {t("home.bottle.fullCollectionBtn")}
          </Link>
        </div>
      </Wrapper>
    </div>
  );
  // const { t } = useTranslation();

  // return (
  //   <Wrapper>
  //     <div className="relative md:pb-[30px]">
  //       <div className="bg-[#eaeaea]  lg:px-[40px]  xl:px-[80px] lg:pb-[60px] md:rounded-md">
  //         <h2 className="ml-[20px] pt-[10px] text-[40px] text-color-black  font-tommaso font-normal lg:text-[64px]">
  //           {t("home.hero.title")}
  //         </h2>

  //         <div className="border-y-2 border-[#613994] p-[14px] flex lg:gap-[77px] lg:p-[0px] ">
  //           <div className="w-[50%] lg:w-[386px]">
  //             <img
  //               className="w-[205px] h-[255px] lg:w-[386px] lg:h-full"
  //               src={bottle}
  //               alt="bottle"
  //             />
  //             <p className="text-[16px] font-normal lg:hidden">
  //               {t("home.bottle.paragraph")}
  //             </p>
  //           </div>
  //           <div className="w-[50%] lg:w-[69%] lg:pb-[20px] bg-[url('/images/layerBlack.png')] bg-no-repeat bg-cover">
  //             <h2 className="text-[32px] text-color-primary font-tommaso text-center lg:text-left lg:text-[40px] mix-blend-difference">
  //               {t("home.bottle.heading")}
  //             </h2>
  //             <div className="flex flex-col items-center gap-[10px] mt-[15px] w-[160px] m-auto lg:w-[100%] lg:items-start lg:flex-row lg:mt-[40px] lg:gap-[20px]">
  //               <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
  //                 <p>{t("home.bottle.volume")}</p>
  //                 <p>{t("home.bottle.volumeQuantity")}</p>
  //               </div>

  //               <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
  //                 <p>{t("home.bottle.alcohol")}</p>
  //                 <p>{t("home.bottle.alcoholQuantity")}</p>
  //               </div>

  //               <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
  //                 <p>{t("home.bottle.naturalWay")}</p>
  //                 <p>{t("home.bottle.naturalWayQuantity")}</p>
  //               </div>
  //             </div>

  //             <p className="hidden lg:block text-[16px] font-normal lg:text-[24px] lg:mt-[50px] mix-blend-difference text-color-primary">
  //               {t("home.bottle.paragraph")}
  //             </p>

  //             <div className="flex justify-end w-[160px] m-auto mt-[15px] lg:w-[100%] lg:mt-[46px] lg:pr-[50px]">
  //               <div className="w-[61px] h-[58px] border-[1px] border-[#613994] self-end rounded-[10px] flex justify-center items-center lg:w-[114px] lg:h-[108px] lg:bg-[#613994] lg:text-color-primary">
  //                 <p className="text-[12px] lg:text-[24px]">
  //                   {t("home.bottle.price")}
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Wrapper>
  // );
}

export default Bottle;
