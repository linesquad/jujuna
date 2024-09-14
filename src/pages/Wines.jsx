import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import { useWines } from "../hooks/useWines";
import { memo, useState } from "react";
import Spinner from "../components/Spinner";
import { useTranslation } from "react-i18next";
import WineFilter from "../components/wineComponents/WineFilter";
import MobileWineFilter from "../components/wineComponents/MobileWineFilter";
import MobileFilterContainer from "../components/wineComponents/MobileFilterContainer";
import WineCard from "../components/wineComponents/WineCard";
import { useWinesCategory } from "../hooks/useWinesCategory";

const Wines = memo(() => {
  const darkMode = useSelector(getMode);

  const { t } = useTranslation();
  const { data: wines, isLoading, isError, error } = useWines();
  const [showFilter, setShowFilter] = useState(false);
  const { data: winesCategory } = useWinesCategory();
  console.log(winesCategory);

  if (isLoading) return <Spinner />;

  return (
    <div
      className={`${darkMode ? "bg-[#12151C] text-[#fff]" : "bg-[#fff]"} p-4`}
    >
      <Wrapper>
        <div className="text-[#78808C] mb-16 pt-10">
          <Link to={"/"}>{t("winePage.navHomePage")} </Link>
          <span>/ {t("winePage.navProducts")}</span>
        </div>

        <div className="relative">
          <MobileWineFilter setShowFilter={setShowFilter} />
          {showFilter && (
            <MobileFilterContainer setShowFilter={setShowFilter} />
          )}
        </div>

        <div className="flex">
          <WineFilter
            minValue={10}
            maxValue={1000}
            categories={winesCategory}
          />

          <div className="tiny:-ml-6 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative mb-24 justify-items-center w-full">
            {wines?.map((wine) => (
              <WineCard key={wine._id} wine={wine} />
            ))}
          </div>
        </div>

        <div></div>
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
