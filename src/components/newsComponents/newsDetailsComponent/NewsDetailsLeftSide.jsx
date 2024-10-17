import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import NewsStar from "./NewsStar";
import NewsShare from "./NewsShare";
import { useParams } from "react-router-dom";
import ComentarNews from "./ComentarNews";
import NewsDetailsWriteComment from "./NewsDetailsWriteComment";
import { useGetBlogsById } from "../../../hooks/useGetBlogsById";
import NewsDetailsLeftSkeleton from "./NewsDetailsLeftSkeleton";

const NewsDetailsLeftSide = () => {
  const { id } = useParams();
  const mode = useSelector(getMode);
  const { t } = useTranslation();
  const { data: blog, isLoading, isError, error } = useGetBlogsById(id);

  const comments = blog?.commentsRes || [];

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

  const desc = blog.blog.text || "";

  const descArray = desc.split("*");

  return (
    <div className="lg:col-span-2">
      <div className="flex flex-col gap-1 sm:gap-[5px] md:gap-[6px] lg:gap-2">
        <h1
          className={`${
            mode ? "text-white" : "text-black"
          } text-2xl sm:text-[28px] md:text-[32px] lg:text-4xl`}
        ></h1>

        <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          <p
            className={`text-base sm:text-[19px] md:text-[22px] lg:text-2xl text-[#ADACAC]`}
          >
            19-19-19
          </p>
          <p
            className={`text-base sm:text-[19px] md:text-[22px] lg:text-2xl text-[#ADACAC]`}
          >
            {blog.blog.title}
          </p>
        </div>
      </div>
      <div className="py-7 sm:py-8 md:py-9 lg:py-10 flex justify-start sm:pr-20 w-full">
        <img
          src={blog.blog.image}
          alt={blog.blog.title}
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
        {descArray.length &&
          descArray.map((items, index) => (
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
          <ComentarNews comments={comments} />
        </div>
        <div className="pt-[100px]  sm:pt-0 order-1 sm:order-2">
          <NewsDetailsWriteComment />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsLeftSide;
