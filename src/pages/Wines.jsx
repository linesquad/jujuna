import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import { useWines, useWinesByCategory } from "../hooks/useWines";
import React, { memo, useState } from "react";
import Spinner from "../components/Spinner";
import { useTranslation } from "react-i18next";
import MobileWineFilter from "../components/wineComponents/MobileWineFilter";
import MobileFilterContainer from "../components/wineComponents/MobileFilterContainer";
import LayoutChanger from "../components/LayoutChanger/LayoutChanger";
import { wineLayoutOptions } from "../components/LayoutChanger/layoutOptions";
import WineCard from "../components/wineComponents/wineCardComponents/WineCard";
import ListWineCard from "../components/wineComponents/wineCardComponents/ListWineCard";
import ColWineCard from "../components/wineComponents/wineCardComponents/ColWineCard";
import ProductsFilter from "../components/wineComponents/ProductsFilter";
import { useWinesCategory } from "../hooks/useWinesCategory";

const Wines = memo(() => {
  const [showFilter, setShowFilter] = useState(false);
  const [layout, setLayout] = useState("default");
  const [categoryId, setCategoryId] = useState("");
  const { data: wines, isLoading, isError, error } = useWines();
  const { data: winesCategory, isLoading: categoryLoading } =
    useWinesByCategory(categoryId);
  const { data: wineCategories } = useWinesCategory();
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();

  const winesForMap = winesCategory?.products || wines;

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  if (isLoading) return <Spinner />;

  const layoutStyles = {
    default:
      "tiny:-ml-6 grid gap-4  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative  justify-items-center ",
    list: "flex flex-col ",
    col: "flex flex-col ",
  };

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
            <MobileFilterContainer setShowFilter={setShowFilter} />
          )}

          <LayoutChanger
            layouts={wineLayoutOptions}
            onLayoutChange={handleLayoutChange}
            activeClass="border-2 border-purple-500"
            defaultClass="text-gray-500"
            iconSize={30}
          />
        </div>

        <div className="flex items-start">
          <ProductsFilter
            minValue={10}
            maxValue={1000}
            categories={wineCategories}
            setCategoryId={setCategoryId}
            categoryId={categoryId}
          />

          {categoryLoading ? (
            <div className="w-full min-h-[100vh] flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <div
              className={`w-full min-h-[100vh] mb-24 ${layoutStyles[layout]}`}
            >
              {winesForMap?.map((wine) => (
                <React.Fragment key={wine._id}>
                  {layout === "default" && <WineCard wine={wine} />}
                  {layout === "list" && <ListWineCard wine={wine} />}
                  {layout === "col" && <ColWineCard wine={wine} />}
                </React.Fragment>
              ))}
            </div>
          )}
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
