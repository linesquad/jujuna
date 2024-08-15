import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

function RelatedWine({ item }) {
  const { name, id } = item;
  const darkMode = useSelector(getMode);
  const { i18n, t } = useTranslation();

  return (
    <Link to={`/wines/${id}`}>
      <div
        className={`w-full tiny:max-w-[200px] max-w-[260px] md:max-w-[260px] m-auto mb-40 ${
          darkMode
            ? "bg-[#55367B] md:bg-transparent md:border md:border-buttonColor-primary"
            : "transparent md:border md:border-transparent md:shadow-[5px_8px_10px_rgba(0,0,0,0.25)]"
        }   flex flex-col items-center p-4 md:p-6 lg:p-8 cursor-pointer relative`}
      >
        <img
          src="/images/wineheart.png"
          alt="heart"
          className="w-[24px] h-[24px] absolute right-4 md:top-3"
        />
        <img src="/images/bottle.png" alt="cocktail" className="md:w-[100px]" />
        <p className="text-black mt-4">
          {i18n.language === "ge" ? name.ge : name.en}
        </p>
        <div className="flex justify-between mt-[10px] md:mt-[18px]">
          <p className={`${!darkMode && "text-buttonColor-primary"}`}>
            {t("winePage.singleWine.relatedWines.details")}
          </p>
        </div>
        <button
          className={`absolute -bottom-20 border-2 p-3 pl-8 pr-8 font-semibold shadow-[5px_8px_10px_rgba(0,0,0,0.25)] ${
            darkMode
              ? "bg-[#55367B] border-transparent text-white"
              : "bg-transparent border-buttonColor-primary text-buttonColor-primary"
          }`}
        >
          {t("winePage.singleWine.relatedWines.cart")}
        </button>
      </div>
    </Link>
  );
}

export default RelatedWine;
