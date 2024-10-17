import { useSelector } from "react-redux";
import CocktailsHeader from "../components/cocktailsComponents/CocktailsHeader";
import Wrapper from "../components/Wrapper";
import { getMode } from "../features/darkModeSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProductsFilter from "../components/wineComponents/ProductsFilter";
import { useCocktailsCategoriesTitle } from "../hooks/useCocktailsCategoriesTitle";
import { Outlet } from "react-router-dom";

function CockTails() {
  const { t } = useTranslation();

  const [sortValue, setSortValue] = useState(
    t("cocktails.cocktailsSidebar.default")
  );
  const [categoryId, setCategoryId] = useState("");
  const darkMode = useSelector(getMode);
  const { data: categoryTitles } = useCocktailsCategoriesTitle();

  return (
    <div className={`${darkMode ? "bg-[#12151C]" : "bg-[#fff]"}`}>
      <CocktailsHeader
        setSortValue={setSortValue}
        sortValue={sortValue}
        categories={categoryTitles}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        pageUrl="cocktail"
      />
      <Wrapper>
        <div className="flex items-start gap-[40px] mt-[23px] md:mt-[40px] lg:mt-[60px] px-[14px] md:px-[0px] py-[15px]">
          <div className="hidden md:block">
            <ProductsFilter
              minValue={10}
              maxValue={1000}
              categories={categoryTitles}
              categoryId={categoryId}
              setCategoryId={setCategoryId}
              pageUrl="cocktail"
            />
          </div>
          {/* <DisplayCocktails
            isFillterOpen={isFillterOpen}
            sortValue={sortValue}
          /> */}
          <Outlet />
        </div>
      </Wrapper>
    </div>
  );
}

export default CockTails;
