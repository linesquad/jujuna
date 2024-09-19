import { useSelector } from "react-redux";
import CocktailsHeader from "../components/cocktailsComponents/CocktailsHeader";
import DisplayCocktails from "../components/cocktailsComponents/DisplayCocktails";
import Wrapper from "../components/Wrapper";
import { getMode } from "../features/darkModeSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProductsFilter from "../components/wineComponents/ProductsFilter";
import { useCocktailsCategoriesTitle } from "../hooks/useCocktailsCategoriesTitle";

function CockTails() {
  const { t } = useTranslation();
  const [isFillterOpen, setIsFillterOpen] = useState(false);
  const [sortValue, setSortValue] = useState(
    t("cocktails.cocktailsSidebar.default")
  );
  const [categoryId, setCategoryId] = useState("");
  const darkMode = useSelector(getMode);
  const { data: categoryTitles } = useCocktailsCategoriesTitle();
  console.log(categoryTitles);

  return (
    <div className={`${darkMode ? "bg-[#12151C]" : "bg-[#fff]"}`}>
      <CocktailsHeader
        setIsFillterOpen={setIsFillterOpen}
        setSortValue={setSortValue}
        sortValue={sortValue}
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
            />
          </div>
          <DisplayCocktails
            isFillterOpen={isFillterOpen}
            sortValue={sortValue}
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default CockTails;
