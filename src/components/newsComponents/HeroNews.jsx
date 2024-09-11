import { useSelector } from "react-redux";
import BlogWrapper from "./BlogWrapper";
import blogsHero from "/images/blogsHero.jfif";
import { FaSearch } from "react-icons/fa";
import { getMode } from "../../features/darkModeSlice";

const HeroNews = () => {
  const darkMode = useSelector(getMode);
  return (
    <div className=" w-full">
      <BlogWrapper>
        <div className="px-[16px] pt-[60px] relative">
          <img
            src={blogsHero}
            alt="blogs-hero"
            className="w-full h-[462px] object-cover brightness-75 rounded-[10px]"
          />
          <div className="flex flex-col gap-[24px] md:gap-[40px] lg:gap-[64px] md:absolute md:top-[50%] md:translate-y-[-50%] left-[90px]">
            <p
              className={`text-[24px] mt-[24px] ${
                darkMode ? "text-[#fff]" : "text-[#000]"
              } md:text-[#fff] lg:text-[36px] max-w-[724px]`}
            >
              Discover the soul of Georgia through its exceptional wines
            </p>
            <div
              className={`max-w-[310px] h-[40px] ${
                darkMode ? "bg-[#fff]" : "bg-[#12151C]"
              }  md:bg-[#fff] rounded-[30px] flex gap-[7px] items-center pl-[10px]`}
            >
              <FaSearch
                color={`${darkMode ? "#000" : "#fff"}`}
                className="md:fill-[#000]"
              />
              <input
                type="text"
                placeholder="მოიძიეთ სიახლეები"
                className={`bg-transparent border-none outline-none ${
                  darkMode ? "text-[#000]" : "text-[#fff]"
                } md:text-[#000]`}
              />
            </div>
          </div>
        </div>
      </BlogWrapper>
    </div>
  );
};

export default HeroNews;
