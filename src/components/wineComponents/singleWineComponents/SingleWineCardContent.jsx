import { useSelector } from "react-redux";
import Wrapper from "../../Wrapper";
import { getMode } from "../../../features/darkModeSlice";
import SingleWineCardAddButtons from "./SingleWineCardAddButtons";
import { useTranslation } from "react-i18next";

function SingleWineCardContent({ wine }) {
  const { i18n, t } = useTranslation();
  const darkMode = useSelector(getMode);

  return (
    <div className="flex flex-col items-center lg:items-start max-w-full lg:max-w-[600px]">
      <div className="text-center flex mt-6 lg:text-left">
        <Wrapper>
          <h1
            className={`font-bold text-lg ${
              darkMode
                ? "text-wineNavbarColor-textPurple"
                : "text-buttonColor-primary"
            }`}
          >
            {i18n.language === "ge" ? wine.name.ge : wine.name.en}
          </h1>
          <p className="font-medium">
            {i18n.language === "ge" ? wine.brand.ge : wine.brand.en}
          </p>
          <div className="flex gap-4 font-medium justify-center items-center mt-1 lg:justify-start lg:mt-5 lg:mb-5 text-center">
            <div>
              <p className={`${i18n.language === "ge" && "tiny:text-xs"}`}>
                {t("winePage.singleWine.price")}
              </p>
              <span className={`${i18n.language === "ge" && "tiny:text-sm"}`}>
                ${wine.price}
              </span>
            </div>
            <div>
              <p className={`${i18n.language === "ge" && "tiny:text-xs"}`}>
                {t("winePage.singleWine.size")}
              </p>
              <span className={`${i18n.language === "ge" && "tiny:text-sm"}`}>
                {wine.size} {i18n.language === "ge" ? "ლ" : "L"}
              </span>
            </div>
            <div>
              <p className={`${i18n.language === "ge" && "tiny:text-xs"}`}>
                {t("winePage.singleWine.alco")}
              </p>
              <span className={`${i18n.language === "ge" && "tiny:text-sm"}`}>
                {wine.alco}%
              </span>
            </div>
          </div>
          <p className="ml-10 mr-10 mt-6 md:mt-10 sm:m-auto sm:max-w-[400px] lg:m-0">
            {i18n.language === "ge" ? wine.description.ge : wine.description.en}
          </p>
        </Wrapper>
      </div>
      <SingleWineCardAddButtons wine={wine} />
    </div>
  );
}
export default SingleWineCardContent;
