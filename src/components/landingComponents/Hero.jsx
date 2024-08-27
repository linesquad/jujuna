import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import HeroContent from "./HeroContent";
import { useTranslation } from "react-i18next";
import { RiArrowRightSLine } from "react-icons/ri";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] text-[#fff]">
      <Wrapper>
        <div className=" relative flex items-center">
          <div className="w-full h-[459px] lg:h-[650px]  pt-[30px] px-[23px] relative lg:px-[0px]">
            <HeroContent
              title={t("home.hero.title")}
              heading={t("home.hero.heading")}
              desktopDescription={t("home.hero.description")}
            />
            <button className="border border-white rounded-full p-1 px-6 mt-20">
              <Link to={"/wines"} className="flex items-center pl-2">
                <span className="text-xl">შეძენა</span>
                <RiArrowRightSLine className="w-8 h-8 mt-1" />
              </Link>
            </button>
          </div>

          <img
            src="/images/bottle.png"
            alt="bottle"
            className="absolute w-[600px] right-20"
          />

          <Link
            to={"/wines"}
            className="flex items-center self-start absolute right-0 top-20"
          >
            <span className="text-xl">სრული კოლექცია</span>
            <RiArrowRightSLine className="w-6 h-6 mt-1" />
          </Link>

          <p className="self-end mb-20 text-right w-[330px] text-lg">
            ბუნების ნამუშევარი, ტრადიციებით დახვეწილი
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

export default Hero;
