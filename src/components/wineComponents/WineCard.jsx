import { Link } from "react-router-dom";
import WineImages from "./WineImages";
import AddWineToCart from "./AddWineToCart";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function WineCard({ wine }) {
  const { i18n } = useTranslation();
  const mode = useSelector(getMode);
  const id = wine.id;

  return (
    <div
      className={`mt-24 relative max-w-[360px] md:max-w-[400px] md:rounded-lg ${
        mode
          ? "bg-wineCardColor-dark"
          : "bg-wineCardColor-light shadow-[rgba(0,0,15,0.3)_8px_8px_16px_0px] lg:shadow-none xl:border xl:border-wineCardColor-dark xl:bg-transparent"
      }`}
    >
      <Link to={`/wines/${id}`}>
        <div className="relative p-4 flex flex-col items-center">
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
              mode ? "text-wineNavbarColor-light" : "text-wineNavbarColor-dark"
            }`}
          >
            {i18n.language === "ge" ? wine.name.ge : wine.name.en}
          </p>
          <p className="text-black">
            {i18n.language === "ge" ? wine.brand.ge : wine.brand.en}
          </p>
          <p className="text-black">${wine.price.toFixed(2)}</p>
          <WineImages />
        </div>
      </Link>
      <AddWineToCart />
    </div>
  );
}

export default WineCard;
