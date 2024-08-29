import { useTranslation } from "react-i18next";
import Wrapper from "../Wrapper";
import ConnectForm from "./connectComponents/ConnectForm";
import HeroContent from "./HeroContent";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

const Connect = () => {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);
  return (
    <div className={`${darkMode ? "bg-[#000]" : "bg-[#1E122E]"}`}>
      <Wrapper>
        <div className="md:flex items-start justify-between">
          <ConnectForm />

          <div className="flex justify-center md:justify-start px-[15px]">
            <HeroContent
              containerStyle="flex flex-col gap-[24px] md:max-w-[480px] lg:max-w-none lg:w-[600px]"
              descriptionStyle="text-color-primary text-[16px] lg:text-[20px] lg:w-auto"
              description={[
                { paragraph: t("home.aboutUs.paragraph1") },
                { paragraph: t("home.aboutUs.paragraph2") },
              ]}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Connect;
