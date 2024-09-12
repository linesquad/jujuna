import Pegination from "../components/Pegination";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import useWines from "../hooks/useWines";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useTranslation } from "react-i18next";
import WineFilter from "../components/wineComponents/WineFilter";
import MobileWineFilter from "../components/wineComponents/MobileWineFilter";
import MobileFilterContainer from "../components/wineComponents/MobileFilterContainer";
import WineCard from "../components/wineComponents/WineCard";

import { useAddToCart } from "../hooks/useAddToCart";
// useGetCartItems;
const Wines = () => {
  const darkMode = useSelector(getMode);

  const { t } = useTranslation();
  const { data: wines, isLoading, isError, error } = useWines();
  const [showFilter, setShowFilter] = useState(false);
  const [paginatedWines, setPaginatedWines] = useState([]);
  const winesPerPage = 6;

  const { mutate: addToCart } = useAddToCart();
  // const { data: getCartItems } = useGetCartItems();

  useEffect(() => {
    setPaginatedWines(wines?.slice(0, winesPerPage));
  }, [wines]);

  if (isLoading) return <Spinner />;

  // const handelClick = () => {
  //   console.log(getCartItems);
  // };

  return (
    <div
      className={`${darkMode ? "bg-[#12151C] text-[#fff]" : "bg-[#fff]"} p-4`}
    >
      {/* <button onClick={() => handelClick()}>nugo</button> */}
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
          <WineFilter />

          <div className="tiny:-ml-6 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative mb-24 justify-items-center w-full">
            {paginatedWines?.map((wine) => (
              <WineCard
                key={wine._id}
                wine={wine}
                onAddToCart={() =>
                  addToCart({
                    productId: wine._id,
                    title: wine.titleTranslations.ge,
                    image: wine.image,
                    price: wine.price,
                    unit: 10,
                  })
                }
              />
            ))}
          </div>
        </div>

        <div>
          <Pegination
            itemsArray={wines}
            itemsPerPage={winesPerPage}
            setPeginatedItems={setPaginatedWines}
          />
        </div>
      </Wrapper>
      {isError && (
        <div className="text-center bg-purple-700 p-2 mb-0 w-full">
          <p className="text-white font-bold">{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default Wines;
