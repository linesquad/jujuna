import { useState } from "react";
import FilterCategory from "./FilterCategory";
import { AnimatePresence } from "framer-motion";
import BlogWrapper from "./BlogWrapper";

import FilterButton from "./FilterButton";

const FilterNews = () => {
  const [isCategoryVisible, setCategoryVisible] = useState(false);

  const toggleCategoryVisibility = () => {
    setCategoryVisible((prevState) => !prevState);
  };
  return (
    <div className="w-full">
      <BlogWrapper>
        <div className="pb-4 md:hidden">
          <div className="flex justify-between items-center px-3">
            <h1 className="text-[#613994] text-[18px]">POPULAR CATEGORIES</h1>
            <FilterButton
              isCategoryVisible={isCategoryVisible}
              toggleCategoryVisibility={toggleCategoryVisibility}
            />
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
