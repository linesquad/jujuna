import { Link, Outlet } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import { useWines } from "../hooks/useWines";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import MobileWineFilter from "../components/wineComponents/MobileWineFilter";
import MobileFilterContainer from "../components/wineComponents/MobileFilterContainer";
import LayoutChanger from "../components/LayoutChanger/LayoutChanger";
import { wineLayoutOptions } from "../components/LayoutChanger/layoutOptions";
import ProductsFilter from "../components/wineComponents/ProductsFilter";
import { useWinesCategory } from "../hooks/useWinesCategory";

const Wines = memo(() => {
  const [showFilter, setShowFilter] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const { isError, error } = useWines();

  const { data: wineCategories } = useWinesCategory();
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();

  return (
    <div
      className={`${darkMode ? "bg-[#12151C] text-[#fff]" : "bg-[#fff]"} p-4`}
    >
      <Wrapper>
        <div className="text-[#78808C] mb-16 pt-10">
          <Link to={"/"}>{t("winePage.navHomePage")} </Link>
          <span>/ {t("winePage.navProducts")}</span>
        </div>

        <div className="relative flex justify-between lg:justify-end">
          <MobileWineFilter setShowFilter={setShowFilter} />
          {showFilter && (
            <div>
              <MobileFilterContainer
                setShowFilter={setShowFilter}
                minValue={10}
                maxValue={1000}
                categories={wineCategories}
                setCategoryId={setCategoryId}
                categoryId={categoryId}
              />
            </div>
          )}

          <LayoutChanger
            layouts={wineLayoutOptions}
            activeClass="border-2 border-purple-500"
            defaultClass="text-gray-500"
            iconSize={30}
          />
        </div>

        <div className="flex items-start">
          <div className="hidden lg:block">
            <ProductsFilter
              minValue={10}
              maxValue={1000}
              categories={wineCategories}
              setCategoryId={setCategoryId}
              categoryId={categoryId}
            />
          </div>
          <Outlet />
        </div>
      </Wrapper>
      {isError && (
        <div className="text-center bg-purple-700 p-2 mb-0 w-full">
          <p className="text-white font-bold">{error.message}</p>
        </div>
      )}
    </div>
  );
});

Wines.displayName = "Wines";

export default Wines;
