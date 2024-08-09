import Wrapper from "../Wrapper";
import bottle from "/images/bottle1.png";
import { useTranslation } from "react-i18next";

function Bottle() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="relative md:pb-[30px]">
        <div className="bg-[#eaeaea]  lg:px-[40px]  xl:px-[80px] lg:pb-[60px] md:rounded-md">
          <h2 className="ml-[20px] pt-[10px] text-[40px] text-color-black  font-tommaso font-normal lg:text-[64px]">
            {t("home.hero.title")}
          </h2>

          <div className="border-y-2 border-[#613994] p-[14px] flex lg:gap-[77px] lg:p-[0px] ">
            <div className="w-[50%] lg:w-[386px]">
              <img
                className="w-[205px] h-[255px] lg:w-[386px] lg:h-full"
                src={bottle}
                alt="bottle"
              />
              <p className="text-[16px] font-normal lg:hidden">
                {t("home.bottle.paragraph")}
              </p>
            </div>
            <div className="w-[50%] lg:w-[69%] lg:pb-[20px] bg-[url('/images/layerBlack.png')] bg-no-repeat bg-cover">
              <h2 className="text-[32px] text-color-primary font-tommaso text-center lg:text-left lg:text-[40px] mix-blend-difference">
                {t("home.bottle.heading")}
              </h2>
              <div className="flex flex-col items-center gap-[10px] mt-[15px] w-[160px] m-auto lg:w-[100%] lg:items-start lg:flex-row lg:mt-[40px] lg:gap-[20px]">
                <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
                  <p>{t("home.bottle.volume")}</p>
                  <p>{t("home.bottle.volumeQuantity")}</p>
                </div>

                <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
                  <p>{t("home.bottle.alcohol")}</p>
                  <p>{t("home.bottle.alcoholQuantity")}</p>
                </div>

                <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
                  <p>{t("home.bottle.naturalWay")}</p>
                  <p>{t("home.bottle.naturalWayQuantity")}</p>
                </div>
              </div>

              <p className="hidden lg:block text-[16px] font-normal lg:text-[24px] lg:mt-[50px] mix-blend-difference text-color-primary">
                {t("home.bottle.paragraph")}
              </p>

              <div className="flex justify-end w-[160px] m-auto mt-[15px] lg:w-[100%] lg:mt-[46px] lg:pr-[50px]">
                <div className="w-[61px] h-[58px] border-[1px] border-[#613994] self-end rounded-[10px] flex justify-center items-center lg:w-[114px] lg:h-[108px] lg:bg-[#613994] lg:text-color-primary">
                  <p className="text-[12px] lg:text-[24px]">
                    {t("home.bottle.price")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Bottle;
