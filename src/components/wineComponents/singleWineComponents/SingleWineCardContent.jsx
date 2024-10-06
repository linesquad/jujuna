import Wrapper from "../../Wrapper";
import SingleWineCardAddButtons from "./SingleWineCardAddButtons";
import { useTranslation } from "react-i18next";
import SingleWineInfo from "./SingleWineInfo";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import CartQuantity from "./CartQuantity";

function SingleWineCardContent({ wine }) {
  const { i18n } = useTranslation();
  const darkMode = useSelector(getMode);

  return (
    <div className="tiny:p-1 flex flex-col items-start max-w-full lg:max-w-[600px]">
      <div className="flex mt-6">
        <Wrapper>
          <h1 className="text-lg md:text-[48px]">
            {i18n.language === "ge"
              ? wine.titleTranslations.ge
              : wine.titleTranslations.en}
          </h1>
          <hr className="lg:hidden w-full mb-4 mt-2 md:mt-8" />
          <p className="hidden lg:block font-medium text-backgroundColor-purpleMid lg:text-[48px] mt-4">
            {wine.price}₾
          </p>
          <SingleWineInfo
            title={i18n.language === "ge" ? "ტექნოლოგია" : "Technology"}
            value={
              i18n.language === "ge"
                ? wine.technologyTranslations.ge
                : wine.technologyTranslations.en
            }
          />
          <SingleWineInfo
            title={i18n.language === "ge" ? "ყურძნის ჯიში" : "Grape variety"}
            value={
              i18n.language === "ge"
                ? wine.grapeVarietyTranslations.ge
                : wine.grapeVarietyTranslations.en
            }
          />
          <SingleWineInfo
            title={i18n.language === "ge" ? "ალკოჰოლი" : "Alcohol"}
            value={wine.alcohol + "%"}
          />
          <SingleWineInfo
            title={i18n.language === "ge" ? "მოცულობა" : "Volume"}
            value={i18n.language === "ge" ? "750მლ" : "750 ml"}
          />
          <hr className="lg:hidden w-96 small:max-w-[290px] md:w-full my-4" />

          <div className="hidden lg:block mt-16">
            <CartQuantity />
          </div>
        </Wrapper>
      </div>
      <div className="flex items-center tiny:gap-2 gap-4 justify-between w-full">
        <span
          className={`tiny:text-[16px] tiny:mt-6 lg:hidden ${
            darkMode ? "text-white" : "text-black"
          } text-[20px] md:text-[36px] mt-4`}
        >
          {wine.price}₾
        </span>
        <div>
          <SingleWineCardAddButtons wine={wine} />
        </div>
      </div>
      <hr className="lg:hidden mt-4 w-full" />
    </div>
  );
}
export default SingleWineCardContent;
