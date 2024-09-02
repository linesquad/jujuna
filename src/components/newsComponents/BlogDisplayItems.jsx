import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogDisplayItems = ({ item, index }) => {
  const mode = useSelector(getMode);
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`p-4 lg:p-0 w-full flex flex-col items-center text-center flex-wrap lg:flex-row lg:gap-[50px] lg:justify-center lg:pb-32
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
      <div className="max-w-[490px] lg:w-full">
        <h2
          className={`${
            mode ? "text-white" : "text-black"
          } font-bold pt-4 text-xl`}
        >
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
        <Link to={`/news/${item.id}`}>
          <button
            className={`${
              mode ? "bg-[#58387F]" : "bg-[#000]"
            } text-white w-[168px] h-[39px] rounded-[30px] mt-[30px] md:mt-[120px]`}
          >
            {t("news.blogDisplay.moreBtn")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDisplayItems;
