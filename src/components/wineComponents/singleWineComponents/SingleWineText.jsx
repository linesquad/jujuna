import { useTranslation } from "react-i18next";
import Wrapper from "../../Wrapper";

function SingleWineText({ wine }) {
  const { t, i18n } = useTranslation();

  const formatText = (text) => {
    return text.split("*").join("<br /><br />");
  };
  return (
    <div className="flex flex-col items-center text-center mt-12 lg:mt-20">
      <Wrapper>
        <h1 className="lg:text-xl">{t("winePage.singleWine.text.heading1")}</h1>
        <h2 className="mt-4 mb-4 lg:text-lg">
          {t("winePage.singleWine.text.heading2")}
        </h2>
        <p
          className="ml-10 mr-10 mt-6 md:mt-10 m-auto lg:max-w-[750px] lg:m-auto"
          dangerouslySetInnerHTML={{
            __html:
              i18n.language === "ge"
                ? formatText(wine.story.ge)
                : formatText(wine.story.en),
          }}
        >
          {/* {t("winePage.singleWine.text.paragraph")} */}
          {/* {i18n.language === "ge"
            ? formatText(wine.story.ge)
            : formatText(wine.story.en)} */}
        </p>
      </Wrapper>
    </div>
  );
}
export default SingleWineText;
