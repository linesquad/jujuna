import BlogWrapper from "./BlogWrapper";

const HeroNews = () => {
  return (
    <div className="bg-[#EAEAEA] w-full">
      <BlogWrapper>
        <div
          className="text-center flex flex-col gap-6 
        pt-4 sm:pt-5 md:pt-6 lg:pt-12 
        pb-11 sm:pb-10 md:pb-9 lg:pb-8 "
        >
          <h1 className="text-base text-black font-normal md:text-xl lg:text-2xl">
            BEHIND THE VINES
          </h1>
          <h2 className="text-sm text-black font-normal md:text-base lg:text-xl">
            No pretenses here — only the good stuff.
          </h2>
        </div>
        <div className="w-full h-full pb-14 sm:pb-20">
          <div className="relative w-full flex justify-center">
            <img
              src="./images/blogpage.jpg"
              alt="banner"
              className="max-h-[413px] sm:max-h-[500px] md:max-h-[700px] lg:max-h-[799px]"
            />
            <div
              className="p-4 bg-white w-[350px] absolute bottom-[-50px] left-1/2 -translate-x-1/2 
            tiny:w-[230px] tiny:p-3 smaller:w-[300px] smaller:py-4 sm:w-[400px] md:w-[500px]"
            >
              <div
                className="text-center px-3 py-6 border-2 border-[#613994]
              tiny:px-2 tiny:py-2 tiny:border-1 smaller:py-2"
              >
                <h2 className="text-base tiny:text-[10px] smaller:text-[12px] sm:text-lg md:text-xl lg:text-2xl">
                  Discover the soul of Georgia through
                </h2>
                <h2 className="text-base tiny:text-[10px] smaller:text-[12px] sm:text-lg md:text-xl lg:text-2xl">
                  its exceptional wines
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
