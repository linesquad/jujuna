import { useTranslation } from "react-i18next";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function OneCocktail({
  title,
  image,
  ingredients,
  size,
  position,
  id,
  isSwiper,
}) {
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={size === "big" ? "md:col-span-2" : "md:col-span-1"}>
      <div className="bg-[#000] rounded-2xl mx-2 smallExtra:pb-14 md:pb-4">
        {size === "small" && (
          <h2 className="text-color-primary text-[26px] smallExtra:text-[32px] font-tommaso font-normal lg:text-[40px] mb-[15px] p-2 pl-8">
            {title}
          </h2>
        )}

        {size === "big" && (
          <h2 className="md:hidden text-color-primary text-[26px] smallExtra:text-[32px] font-tommaso font-normal lg:text-[40px] p-2 pl-8">
            {title}
          </h2>
        )}

        <div
          className={`flex tiny:items-end items-start ${
            position === "right" && "flex-row-reverse gap-4"
          } ${size === "big" && "md:gap-8"} ${
            isSwiper && "smaller:gap-4 smallExtra:gap-16 items-end"
          } ${
            isSwiper && size === "small" && "smaller:gap-14 smallExtra:gap-28"
          }`}
        >
          <img
            src={image}
            alt="cocktail"
            className={`small:w-[130px] small:h-[200px] smallExtra:-mb-14 rounded-2xl ${
              size === "big"
                ? "smallExtra:w-[186px] smallExtra:h-[276px] w-[130px] h-[200px] sm:w-[186px] sm:h-[276px] md:!w-[240px] md:!h-[300px] lg:!w-[301px] lg:!h-[447px]"
                : "smallExtra:w-[186px] smallExtra:h-[276px] lg:w-[200px] lg:h-[280px]"
            }`}
          />

          <div
            className={`flex flex-col w-full md:mt-8  ${
              size === "small" && position !== "right" && "ml-0"
            } ${position === "right" && "ml-8"} ${
              size === "big" && "md:ml-10 lg:mx-40 lg:gap-20"
            }`}
          >
            {size === "big" && (
              <h2 className="hidden md:block text-color-primary text-[32px] font-tommaso font-normal lg:text-[40px] lg:-mb-10">
                {title}
              </h2>
            )}

            <div
              className={`grid sm:grid-cols-[1fr_1fr] md:gap-x-[40px] ${
                size === "small"
                  ? "md:grid-cols-[1fr] lg:grid-cols-[120px_1fr] md:-mt-[40px]"
                  : "md:grid-cols-[1fr_1fr_1fr]"
              } `}
            >
              {ingredients?.map((item, index) => {
                const [ingredientName, volume] = item.split(" - ");
                return (
                  <div
                    key={index}
                    className="flex flex-col text-[14px] text-color-primary lg:text-[20px]"
                  >
                    <p className="mt-4 text-xs smallExtra:text-base">
                      {ingredientName}
                    </p>
                    <p className="opacity-50 text-xs smallExtra:text-base">
                      {volume}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="lg:mt-[40px]">
              <Link
                onClick={handleClick}
                to={`/cocktails/${id}`}
                className={`pl-2 mt-4 mb-1 text-xs smallExtra:text-base smallExtra:px-4 text-white border border-white rounded-full flex items-center ${
                  i18n.language === "ge"
                    ? "w-[80px] smallExtra:w-[110px]"
                    : "w-[60px] smallExtra:w-[80px]"
                }`}
              >
                <span>{t("home.cocktails.buyBtn")}</span>
                <RiArrowRightSLine className="w-6 h-6 mt-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCocktail;
