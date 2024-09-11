import Wrapper from "../Wrapper";
import HeroContent from "./HeroContent";
import { useTranslation } from "react-i18next";
import aboutUsImage from "/images/aboutUs.jfif";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import AboutUsButton from "./AboutUsButton";

function AboutUsComp() {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);

  return (
    <div className="w-full pt-0 md:pt-[30px] md:pb-[30px] pb-[70px]">
      <Wrapper>
        <div className="mt-[22px] md:mt-[70px] flex flex-col md:flex-row-reverse">
          <div className="px-[15px] md:w-[60%]">
            <HeroContent
              title={t("home.aboutUs.title")}
              titleStyle={`text-[28px] xl:text-[36px] ${
                darkMode ? "text-[#fff]" : "text-[#000]"
              }`}
              containerStyle="flex flex-col gap-[9px]"
              descriptionStyle={`text-[15px] xl:text-[20px] ${
                darkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
              } `}
              description={[
                {
                  paragraph: `${t("home.aboutUs.paragraph1")}`,
                },
                {
                  paragraph: `${t("home.aboutUs.paragraph2")}`,
                },
                {
                  paragraph: `${t("home.aboutUs.paragraph3")}`,
                },
                {
                  paragraph: `${t("home.aboutUs.paragraph4")}`,
                },
              ]}
            />
            <div className="hidden md:flex">
              <AboutUsButton />
            </div>
          </div>
          <img
            src={aboutUsImage}
            alt="about-us"
            className="mt-[40px] md:mt-0 w-[400px] h-[400px] md:w-[40%] md:h-[550px] rounded-[15px] mx-auto"
          />
        </div>
        <div className="flex justify-center md:hidden">
          <AboutUsButton />
        </div>
      </Wrapper>
    </div>
  );
}

export default AboutUsComp;
