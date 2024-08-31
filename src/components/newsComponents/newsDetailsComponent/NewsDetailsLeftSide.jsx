import { useSelector } from "react-redux";
import { useBlogId } from "../../../hooks/useBlogs";
import { parseISO, format } from "date-fns";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import NewsStar from "./NewsStar";
import NewsShare from "./NewsShare";
import { useParams } from "react-router-dom";
import ComentarNews from "./ComentarNews";
import NewsDetailsWriteComment from "./NewsDetailsWriteComment";
import NewsDetailsLeftSkeleton from "./NewsDetailsLeftSkeleton";

const NewsDetailsLeftSide = () => {
  const { id } = useParams();
  const mode = useSelector(getMode);
  const { t, i18n } = useTranslation();
  const { data, isLoading, isError, error } = useBlogId(id);

  if (isLoading) {
    return <NewsDetailsLeftSkeleton />;
  }

  if (isError) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  const desc =
    i18n.language === "ge" ? data.description.ge : data.description.en;

  const descArray = desc.split("*");

  const isoDateString = data.created_at;
  const date = parseISO(isoDateString);
  const formattedDate = format(date, "dd/MM/yyyy");
  return (
    <div className="lg:col-span-2">
      <div className="flex flex-col gap-1 sm:gap-[5px] md:gap-[6px] lg:gap-2">
        <h1
          className={`${
            mode ? "text-white" : "text-black"
          } text-2xl sm:text-[28px] md:text-[32px] lg:text-4xl`}
        >
          {i18n.language === "ge" ? data.title.ge : data.title.en}
        </h1>

        <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          <p
            className={`text-base sm:text-[19px] md:text-[22px] lg:text-2xl text-[#ADACAC]`}
          >
            {formattedDate}
          </p>
          <p
            className={`text-base sm:text-[19px] md:text-[22px] lg:text-2xl text-[#ADACAC]`}
          >
            {i18n.language === "ge" ? data.author.ge : data.author.en}
          </p>
        </div>
      </div>
      <div className="py-7 sm:py-8 md:py-9 lg:py-10 flex justify-start sm:pr-20 w-full">
        <img
          src={data.image}
          alt={i18n.language === "ge" ? data.title.ge : data.title.en}
          className="max-w-[350px] tiny:max-w-[207px] smaller:max-w-[280px] sm:max-w-[370px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px]"
        />
      </div>

      <h1
        className={`${
          mode ? "text-white" : "text-black"
        } text-base sm:text-[22px] md:text-[25px] lg:text-[28px] pb-[11px] sm:pb-[17px] md:pb-[23px] lg:pb-[29px]`}
      >
        {t("newsDetails.introduction")}
      </h1>
      <div className="pb-11 sm:pb-[45px] md:pb-[46px] lg:pb-12">
        {descArray.map((items, index) => (
          <p
            className={`${
              mode ? "text-white" : "text-black"
            } py-1 text-base sm:text-lg md:text-[19px] lg:text-xl`}
            key={index}
          >
            {items}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
        <div className="order-1 sm:order-2">
          <NewsStar />
        </div>
        <div className="order-2 sm:order-1">
          <NewsShare />
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" sm:pt-[95px] md:pt-[90px] lg:pt-[85px] pb-16 order-2 sm:order-1">
          <ComentarNews />
        </div>
        <div className="pt-[100px]  sm:pt-0 order-1 sm:order-2">
          <NewsDetailsWriteComment />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsLeftSide;
