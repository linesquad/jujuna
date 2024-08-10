import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

const BlogDisplayItems = ({ item, index }) => {
  const mode = useSelector(getMode);
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`p-4 lg:p-0 w-full flex flex-col items-center text-center flex-wrap lg:flex-row lg:justify-between lg:pb-32
                ${
                  index % 2 !== 0
                    ? "lg:flex-row-reverse lg:text-start lg:pl-20"
                    : "lg:text-start "
                }`}
    >
      <div className="w-full sm:w-[490px] lg:w-[400px]">
        <img
          src={item.image}
          alt={i18n.language === "ge" ? item.title.ge : item.title.en}
          className="w-full h-auto lg:w-[700px]"
        />
      </div>
      <div className="max-w-[490px] lg:w-full ">
        <h1
          className={`${
            mode ? "text-[#c993eb]" : "text-[#8A63A2]"
          } pt-4 text-lg font-semibold`}
        >
          {t("news.blogDisplay.latestNews")}
        </h1>
        <h2 className="text-black font-bold pt-4 text-xl">
          {i18n.language === "ge"
            ? item.title.ge.length > 30
              ? item.title.ge.slice(0, 30) + "..."
              : item.title.ge
            : item.title.en.length > 30
            ? item.title.en.slice(0, 30) + "..."
            : item.title.en}
        </h2>
        <p className={`pt-2 ${mode ? "text-white" : "text-black"} text-base`}>
          {i18n.language === "ge"
            ? item.description.ge.length > 170
              ? item.description.ge.slice(0, 170) + "..."
              : item.description.ge
            : item.description.en.length > 170
            ? item.description.en.slice(0, 170) + "..."
            : item.description.en}
        </p>
        <button
          className={`mt-4  text-[#613994] px-6 py-3 text-[20px] border-2 border-[#613994] shadow-[4px_4px_10px_rgba(0,0,0,0.2)] rounded-lg
                    ${
                      mode
                        ? "bg-[#613994] text-white"
                        : "bg-white text-[#613994]"
                    }`}
        >
          {t("news.blogDisplay.moreBtn")}
        </button>
      </div>
    </div>
  );
};

export default BlogDisplayItems;
