import Wrapper from "../Wrapper";
import HeroContent from "./HeroContent";
import { useTranslation } from "react-i18next";

function AboutUsComp() {
  const { t } = useTranslation();

  return (
    <div className="w-full pt-0 md:pt-[30px] md:pb-[30px]">
      <Wrapper>
        <div className="p-[23px] lg:px-[40px] lg:pt-[70px] lg:pb-[40px] bg-[url('/images/marani.png')] bg-no-repeat bg-cover w-full md:rounded-md">
          <HeroContent
            title={t("home.aboutUs.title")}
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
        </div>
      </Wrapper>
    </div>
  );
}

export default AboutUsComp;
