import { useTranslation } from "react-i18next";
import BlogWrapper from "./BlogWrapper";

const HeroNews = () => {
  const { t } = useTranslation();

  return (
    <div className=" w-full">
      <BlogWrapper>
        <div
          className="text-center flex flex-col gap-6 
        pt-4 sm:pt-5 md:pt-6 lg:pt-12 
        pb-11 sm:pb-10 md:pb-9 lg:pb-8 "
        >
          <h1 className="text-base text-black font-normal md:text-xl lg:text-2xl">
            {t("news.heroNews.heading1")}
          </h1>
          <h2 className="text-sm text-black font-normal md:text-base lg:text-xl">
            {t("news.heroNews.heading2")}
          </h2>
        </div>
        <div className="w-full h-full pb-20 sm:pb-20">
          <div className="relative w-full flex justify-center md:justify-between">
            <div className="hidden md:block"></div>
            <img
              src="./images/blogpage.jpg"
              alt="banner"
              className="w-[500px] lg:w-[550px]"
            />
            <div
              className="p-4 bg-white w-[350px] absolute bottom-[-50px] left-1/2 -translate-x-1/2 
            tiny:w-[230px] tiny:p-3 smaller:w-[300px] smaller:py-4 sm:w-[400px] md:bottom-[100px] md:left-[350px] lg:left-[550px]
            xl:left-[550px]"
            >
              <div
                className="text-center px-3 py-6 border-2 border-[#613994]
              tiny:px-2 tiny:py-2 tiny:border-1 smaller:py-2 sm:py-5"
              >
                <h2 className="text-base tiny:text-[10px] smaller:text-[12px] sm:text-lg md:text-xl ">
                  {t("news.heroNews.text1")}
                </h2>
                <h2 className="text-base tiny:text-[10px] smaller:text-[12px] sm:text-lg md:text-xl ">
                  {t("news.heroNews.text2")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </BlogWrapper>
    </div>
  );
};

export default HeroNews;
