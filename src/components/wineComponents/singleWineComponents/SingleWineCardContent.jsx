import { useSelector } from "react-redux";
import Wrapper from "../../Wrapper";
import { getMode } from "../../../features/darkModeSlice";
import SingleWineCardAddButtons from "./SingleWineCardAddButtons";
import { useTranslation } from "react-i18next";

function SingleWineCardContent({ wine }) {
  const { i18n, t } = useTranslation();
  const mode = useSelector(getMode);

  console.log("from content", wine);
  return (
    <div
      className={`flex flex-col items-center lg:items-start max-w-full lg:max-w-[600px]`}
    >
      <div className="text-center flex mt-6 lg:text-left">
        <Wrapper>
          <h1
            className={`font-bold text-lg ${
              mode
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
              <p>{t("winePage.singleWine.price")}</p>
              <span>${wine.price}</span>
            </div>
            <div>
              <p>{t("winePage.singleWine.size")}</p>
              <span>
                {wine.size} {i18n.language === "ge" ? "ლ" : "L"}
              </span>
            </div>
            <div>
              <p>{t("winePage.singleWine.alco")}</p>
              <span>{wine.alco}%</span>
            </div>
          </div>
          <p className="ml-10 mr-10 mt-6 md:mt-10 sm:m-auto sm:max-w-[400px] lg:m-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            tempora temporibus aperiam aliquam dolorum, ullam accusamus alias
            repellendus porro? Quaerat dolorum iusto possimus? Distinctio dicta
            amet alias illum aut animi!
          </p>
        </Wrapper>
      </div>
      <SingleWineCardAddButtons />
    </div>
  );
}
export default SingleWineCardContent;
