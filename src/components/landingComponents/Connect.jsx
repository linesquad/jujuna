import { useTranslation } from "react-i18next";
import Wrapper from "../Wrapper";
import ConnectForm from "./connectComponents/ConnectForm";
import HeroContent from "./HeroContent";

const Connect = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div
        className="p-[23px] lg:px-[40px] lg:pt-[70px] lg:pb-[40px] bg-[url('/images/connect.png')]
        bg-no-repeat bg-cover w-full  rounded-b-md lg:rounded-md
        bg-right md:bg-right grid grid-rows-1 grid-cols-2 md:grid-cols-2 gap-x-5"
      >
        <ConnectForm />
        <div>
          <div className="block md:hidden small:flex small:justify-center small:items-center small:h-full">
            <HeroContent
              descriptionStyle="text-sm text-color-primary md:text-base lg:text-lg xl:text-xl small:text-base"
              containerStyle="font-normal p-5"
              description={[
                {
                  paragraph: t("connectForm.paragraphOne"),
                },
              ]}
            />
          </div>
          <div className="hidden smallExtra:block">
            <HeroContent
              descriptionStyle="text-base smallExtra:text-sm text-color-primary md:text-base lg:text-lg xl:text-xl"
              containerStyle="font-normal p-5"
              description={[
                {
                  paragraph: t("connectForm.paragraphOne"),
                },
                {
                  paragraph: t("connectForm.paragraphTwo"),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Connect;
