import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React from "react";
import WineImages from "./WineImages";
import AddWineToCart from "./AddWineToCart";
import useWines from "../../hooks/useWines";
import Wrapper from "../Wrapper";

function WineCard() {
  const mode = useSelector(getMode);
  const { i18n } = useTranslation();
  const { data } = useWines();

  return (
    <Wrapper>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative mb-24">
        {data?.map((item) => {
          return (
            <div
              className={`mt-24 relative max-w-[360px] md:max-w-[400px] md:rounded-lg ${
                mode
                  ? "bg-wineCardColor-dark"
                  : "bg-wineCardColor-light shadow-[rgba(0,0,15,0.3)_8px_8px_16px_0px] lg:shadow-none xl:border xl:border-wineCardColor-dark xl:bg-transparent"
              }`}
            >
              <Link to={`/`}>
                <div className={`relative p-4  flex flex-col items-center `}>
                  <img
                    src="/images/wineheart.png"
                    alt="heart icon"
                    className="w-8 absolute right-4"
                  />
                  <img
                    src="/images/winebottle.png"
                    alt="wine bottle"
                    className="w-40"
                  />
                  <p
                    className={`${
                      mode
                        ? "text-wineNavbarColor-light"
                        : "text-wineNavbarColor-dark"
                    }`}
                  >
                    {i18n.language === "ge" ? item.name.ge : item.name.en}
                  </p>
                  <p className="text-black">
                    {i18n.language === "ge" ? item.brand.ge : item.brand.en}
                  </p>
                  <p className="text-black">${item.price.toFixed(2)}</p>
                  <WineImages />
                </div>
              </Link>
              <AddWineToCart />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default WineCard;
