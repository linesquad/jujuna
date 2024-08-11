import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React from "react";
import WineBottle from "/images/winebottle.png";
import HeartIcon from "/images/wineheart.png";
import WineImages from "./WineImages";
import AddWineToCart from "./AddWineToCart";

function WineCard({ item }) {
  const { alco, brand, color, created_at, id, image, name, price, size } = item;
  const mode = useSelector(getMode);
  const { i18n } = useTranslation();

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
          {/* <img src={item.image} alt="wine image" /> */}
          <img
            src={HeartIcon}
            alt="heart icon"
            className="w-8 absolute right-4"
          />
          <img src={WineBottle} alt="wine bottle" className="w-40" />
          <p
            className={`${
              mode ? "text-wineNavbarColor-light" : "text-wineNavbarColor-dark"
            }`}
          >
            {i18n.language === "ge" ? name.ge : name.en}
          </p>
          <p className="text-black">
            {i18n.language === "ge" ? brand.ge : brand.en}
          </p>
          <p className="text-black">${price.toFixed(2)}</p>
          <WineImages />
        </div>
      </Link>
      <AddWineToCart />
    </div>
  );
}

export default WineCard;
