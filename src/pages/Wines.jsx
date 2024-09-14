import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import { useWines } from "../hooks/useWines";
import { memo, useState } from "react";
import Spinner from "../components/Spinner";
import { useTranslation } from "react-i18next";
import MobileWineFilter from "../components/wineComponents/MobileWineFilter";
import MobileFilterContainer from "../components/wineComponents/MobileFilterContainer";
import WineCard from "../components/wineComponents/WineCard";
<<<<<<< HEAD
import { useWinesCategory } from "../hooks/useWinesCategory";
import ProductsFilter from "../components/wineComponents/ProductsFilter";
=======
import LayoutChanger from "../components/LayoutChanger/LayoutChanger";
import { wineLayoutOptions } from "../components/LayoutChanger/layoutOptions";
>>>>>>> c5afb07 (create:LayoutChanger component and files for this)

const Wines = memo(() => {
  const darkMode = useSelector(getMode);

  const { t } = useTranslation();
  const { data: wines, isLoading, isError, error } = useWines();
  const [showFilter, setShowFilter] = useState(false);
  const { data: winesCategory } = useWinesCategory();
  console.log(winesCategory);

  const [layout, setLayout] = useState("default");

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  if (isLoading) return <Spinner />;

  const layoutStyles = {
    default:
      "tiny:-ml-6 grid gap-4  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative  justify-items-center ",
    list: "flex flex-col gap-4 ",
    col: "",
  };

  console.log(layout);

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

        <div className="flex">
          <ProductsFilter
            minValue={10}
            maxValue={1000}
            categories={winesCategory}
          />

          <div className={`w-full mb-24 ${layoutStyles[layout]}  `}>
            {wines?.map((wine) => (
              <>
                {layout === "default" && (
                  <WineCard key={wine._id} wine={wine} />
                )}
              </>
            ))}
          </div>
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
