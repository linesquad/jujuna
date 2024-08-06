import { useState } from "react";
import BlogWrapper from "./BlogWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import FilterCategory from "./FilterCategory";
import { AnimatePresence } from "framer-motion";

const FilterNews = () => {
  const [isCategoryVisible, setCategoryVisible] = useState(false);

  const toggleCategoryVisibility = () => {
    setCategoryVisible((prevState) => !prevState);
  };
  return (
    <div className="bg-[#EAEAEA] w-full">
      <BlogWrapper>
        <div className="pb-4 md:hidden">
          <div className="flex justify-between px-3">
            <h1 className="text-[#613994] ">POPULAR CATEGORIES</h1>
            <button onClick={toggleCategoryVisibility}>
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="text-center">
            <AnimatePresence>
              {isCategoryVisible && (
                <FilterCategory
                  isCategoryVisible={isCategoryVisible}
                  toggleCategoryVisibility={toggleCategoryVisibility}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="hidden md:flex md:justify-center pb-8">
          <FilterCategory />
        </div>
      </BlogWrapper>
    </div>
  );
};

export default FilterNews;
